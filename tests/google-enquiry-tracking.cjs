const {test}=require('node:test');
const assert=require('node:assert/strict');
const build=process.env.ENQUIRY_TEST_BUILD;
const {cleanAttribution,whatsappReferenceUrl}=require(build+'/enquiry-attribution.js');
const {googleExamRoute}=require(build+'/google-exam-route.js');
const {receiveEnquiryIntent}=require(build+'/enquiry-intent-handler.js');
const origin='https://www.globalcertsit.com';
const tags={utm_source:'google',utm_campaign:'24224408074',utm_term:'aws cloud practitioner certification',device:'c',gclid:'sample-click-id'};
const sample=()=>({reference:'GC-0123456789abcdef',consent:true,attribution:tags,landingPath:'/certifications/aws/cloud-practitioner'});
const request=(data=sample(),source=origin)=>new Request(origin+'/api/enquiry-intents',{method:'POST',headers:{origin:source,'Content-Type':'application/json'},body:JSON.stringify(data)});
const setup=(changes={})=>{const rows=[];return {rows,deps:{origins:[origin],configured:true,permit:()=>({allowed:true,retryAfter:0}),write:async row=>rows.push(row),...changes}}};
test('exam-specific Google visits retain attribution; generic, other-campaign and organic visits do not redirect',()=>{
  const destination=new URL(googleExamRoute('aws',tags),origin);
  assert.equal(destination.pathname,'/certifications/aws/cloud-practitioner');
  assert.equal(destination.searchParams.get('gclid'),tags.gclid);
  assert.equal(destination.searchParams.get('device'),'c');
  for(const change of [{utm_source:'facebook'},{utm_campaign:'other'},{utm_term:'aws solutions architect certification'},{utm_term:'aws certification'}]) assert.equal(googleExamRoute('aws',{...tags,...change}),null);
  assert.equal(googleExamRoute('aws',{}),null);
  assert.match(googleExamRoute('comptia',{...tags,utm_term:'comptia security+ certification'}),/comptia\/security-plus\?/);
  assert.equal(googleExamRoute('microsoft',{...tags,utm_term:'microsoft fabric certification'}),null);
});
test('only approved metadata survives; arbitrary personal data and invalid device values are dropped',()=>{
  assert.deepEqual(cleanAttribution({...tags,email:'private@example.com',phone:'+123',device:'https://example.com',utm_content:'<script>'}),{utm_source:'google',utm_campaign:'24224408074',utm_term:tags.utm_term,gclid:tags.gclid});
  assert.deepEqual(cleanAttribution(null),{});
});
test('WhatsApp reference preserves exam text and replaces any previous reference without changing destination',()=>{
  const original='https://wa.me/919392828155?text='+encodeURIComponent('PMP exam month: October\nRef: GC-fedcba9876543210');
  const updated=new URL(whatsappReferenceUrl(original,'GC-0123456789abcdef'));
  assert.equal(updated.searchParams.get('text'),'PMP exam month: October\nRef: GC-0123456789abcdef');
  assert.equal(whatsappReferenceUrl('https://wa.me/19999999999','GC-0123456789abcdef'),null);
  assert.equal(whatsappReferenceUrl('https://unrelated.example','GC-0123456789abcdef'),null);
});
test('stored WhatsApp clicks are explicitly unconfirmed and contain no message or customer fields',async()=>{
  const {rows,deps}=setup();const response=await receiveEnquiryIntent(request({...sample(),message:'must not store',email:'private@example.com'}),deps);
  assert.equal(response.status,200);assert.equal(rows.length,1);
  assert.equal(rows[0].kind,'whatsapp_click');assert.equal(rows[0].status,'unconfirmed');
  assert.equal(rows[0].message,undefined);assert.equal(rows[0].email,undefined);
});
test('missing consent, cross-origin, malformed and oversized requests cannot write records',async()=>{
  for(const [req,status] of [[request({...sample(),consent:false}),400],[request(sample(),'https://unrelated.example'),403],[request({...sample(),landingPath:'/path?email=private'}),400],[request({...sample(),padding:'x'.repeat(5000)}),413]]){
    const {rows,deps}=setup();assert.equal((await receiveEnquiryIntent(req,deps)).status,status);assert.equal(rows.length,0);
  }
});
test('unavailable storage or rate limits never report a successful record',async()=>{
  for(const [changes,status] of [[{configured:false},503],[{permit:()=>({allowed:false,retryAfter:60})},429],[{write:async()=>{throw Error('offline')}},503]]){
    const {deps}=setup(changes);const response=await receiveEnquiryIntent(request(),deps);assert.equal(response.status,status);assert.equal((await response.json()).recorded,false);
  }
});
