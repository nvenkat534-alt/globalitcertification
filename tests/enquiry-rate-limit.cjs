const {test}=require('node:test');
const assert=require('node:assert/strict');
const {createEnquiryLimiter}=require(process.env.ENQUIRY_TEST_BUILD+'/enquiry-rate-limit.js');
const request=(ip)=>new Request('https://www.globalcertsit.com/api/enquiries',{headers:{'x-vercel-forwarded-for':ip}});
test('30 attempts then retry-after, recovering after 10 minutes',()=>{let now=1_000_000;const permit=createEnquiryLimiter(()=>now);for(let i=0;i<30;i++)assert.equal(permit(request('192.0.2.1')).allowed,true);assert.deepEqual(permit(request('192.0.2.1')),{allowed:false,retryAfter:600});now+=600001;assert.equal(permit(request('192.0.2.1')).allowed,true);});
test('one source does not block other customers',()=>{const permit=createEnquiryLimiter();for(let i=0;i<31;i++)permit(request('192.0.2.1'));for(let i=2;i<1002;i++)assert.equal(permit(request('customer-'+i)).allowed,true);});
test('bounded capacity recovers after expired clients are cleaned',()=>{let now=1_000_000;const permit=createEnquiryLimiter(()=>now,2);permit(request('192.0.2.1'));permit(request('192.0.2.2'));assert.equal(permit(request('192.0.2.3')).allowed,false);now+=600001;assert.equal(permit(request('192.0.2.3')).allowed,true);});
test('arbitrary forwarded-for values cannot evade the trusted-IP limit',()=>{const permit=createEnquiryLimiter();for(let i=0;i<30;i++)permit(request('192.0.2.1'));const spoofed=new Request('https://www.globalcertsit.com/api/enquiries',{headers:{'x-vercel-forwarded-for':'192.0.2.1','x-forwarded-for':'192.0.2.2'}});assert.equal(permit(spoofed).allowed,false);});
