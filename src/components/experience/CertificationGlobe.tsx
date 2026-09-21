"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, BadgeCheck, Play } from "lucide-react";
import { setPausedMotion, usePausedMotion } from "./MotionSettings";
import ProviderMark from "./ProviderMark";

// Stylised continent outlines for a decorative globe; not a geographic map.
const continents = [
  [[-168,70],[-140,71],[-127,57],[-115,50],[-95,51],[-80,59],[-57,49],[-80,25],[-91,17],[-105,20],[-115,30],[-127,47],[-160,59]],
  [[-81,12],[-61,8],[-48,-1],[-35,-9],[-47,-23],[-53,-33],[-68,-55],[-76,-34],[-80,-5]],
  [[-18,35],[9,37],[31,31],[40,13],[51,10],[42,-13],[32,-31],[19,-35],[10,-21],[-1,5],[-16,13]],
  [[-10,36],[-10,57],[10,72],[33,69],[47,55],[60,61],[85,74],[124,73],[170,61],[155,42],[132,33],[121,20],[106,5],[91,23],[79,8],[69,25],[45,29],[28,41]],
  [[112,-11],[136,-10],[153,-23],[144,-39],[115,-34]],
  [[-52,60],[-25,71],[-33,83],[-62,80]],
];
function onLand(lon: number, lat: number) {
  return continents.some(poly => {
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
      const [xi, yi] = poly[i], [xj, yj] = poly[j];
      if ((yi > lat) !== (yj > lat) && lon < (xj - xi) * (lat - yi) / (yj - yi) + xi) inside = !inside;
    }
    return inside;
  });
}
export default function CertificationGlobe() {
  const canvas = useRef<HTMLCanvasElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const pointer = useRef({ x: 0, y: 0 });
  const angle = useRef(-0.7);
  const paused = usePausedMotion();
  useEffect(() => {
    const el = canvas.current;
    if (!el) return;
    const context = el.getContext("2d");
    if (!context) return;
    let frame = 0, visible = true, last = 0, active = true;
    const scale = Math.min(window.devicePixelRatio || 1, 1.7);
    el.width = 640 * scale; el.height = 640 * scale;
    context.scale(scale, scale);
    const dots: {lat: number; lon: number; land: boolean}[] = [];
    for(let lat = -78; lat <= 78; lat += 3) {
      const step = 3 / Math.cos(lat * Math.PI / 180);
      for(let lon = -180; lon < 180; lon += step) dots.push({lat: lat * Math.PI / 180, lon: lon * Math.PI / 180, land: onLand(lon, lat)});
    }
    const render = (time: number) => {
      if (!active) return;
      frame = requestAnimationFrame(render);
      if (!visible || document.hidden || time - last < 32) return;
      const dt = Math.min(time - last, 60); last = time;
      if(!paused) angle.current += dt * 0.000065;
      context.clearRect(0, 0, 640, 640);
      const r = 213, cx = 320, cy = 315, tilt = -0.2 + (paused ? 0 : pointer.current.y * 0.08);
      const rot = angle.current + (paused ? 0 : pointer.current.x * 0.13);
      const halo = context.createRadialGradient(cx,cy,r * .45,cx,cy,r * 1.27);
      halo.addColorStop(0,"rgba(13,41,79,.85)"); halo.addColorStop(.75,"rgba(19,66,127,.4)"); halo.addColorStop(.84,"rgba(53,159,242,.16)"); halo.addColorStop(1,"rgba(22,98,166,0)");
      context.fillStyle = halo; context.fillRect(0,0,640,640);
      const surface = context.createRadialGradient(cx - 80,cy - 85,10,cx,cy,r);
      surface.addColorStop(0,"#113958"); surface.addColorStop(.65,"#091b36"); surface.addColorStop(1,"#070c22");
      context.beginPath(); context.arc(cx,cy,r,0,Math.PI*2); context.fillStyle = surface; context.fill();
      context.strokeStyle="rgba(85,194,255,.56)"; context.lineWidth=1; context.stroke();
      for(const p of dots) {
        const lon=p.lon+rot, y=Math.sin(p.lat), x=Math.cos(p.lat)*Math.sin(lon), z=Math.cos(p.lat)*Math.cos(lon);
        const yy=y*Math.cos(tilt)-z*Math.sin(tilt), zz=y*Math.sin(tilt)+z*Math.cos(tilt);
        if(zz < 0) continue;
        const alpha=(p.land ? .38 : .04) + zz*(p.land ? .62 : .14);
        context.fillStyle=p.land ? `rgba(101,224,245,${alpha})` : `rgba(103,150,204,${alpha})`;
        context.beginPath(); context.arc(cx+x*r,cy-yy*r,p.land ? 1.15+zz*.65 : .6,0,Math.PI*2); context.fill();
      }
      const gleam=context.createRadialGradient(cx-105,cy-130,0,cx-105,cy-130,200);
      gleam.addColorStop(0,"rgba(83,191,247,.18)");gleam.addColorStop(1,"rgba(25,73,149,0)");
      context.fillStyle=gleam;context.beginPath();context.arc(cx,cy,r,0,Math.PI*2);context.fill();
      if(paused) {cancelAnimationFrame(frame); frame=0;}
    };
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting; if(visible && paused && !frame) frame=requestAnimationFrame(render);});
    observer.observe(el); frame=requestAnimationFrame(render);
    return()=>{active=false; cancelAnimationFrame(frame);observer.disconnect();};
  }, [paused]);
  return <div className="certification-universe" ref={stage} onPointerMove={e=>{
    if(paused || e.pointerType!=="mouse") return;
    const rect=e.currentTarget.getBoundingClientRect();
    pointer.current={x:(e.clientX-rect.left)/rect.width-.5,y:(e.clientY-rect.top)/rect.height-.5};
    stage.current?.style.setProperty("--tilt-x", `${pointer.current.y * -5}deg`);
    stage.current?.style.setProperty("--tilt-y", `${pointer.current.x * 5}deg`);
  }} onPointerLeave={()=>{pointer.current={x:0,y:0};stage.current?.style.setProperty("--tilt-x","0deg");stage.current?.style.setProperty("--tilt-y","0deg");}}>
    {paused && <button className="globe-play-control" onClick={() => setPausedMotion(false)}><Play size={14} fill="currentColor"/> Play globe & logos</button>}
    <div className="universe-grid" aria-hidden="true" />
    <div className="universe-backlight" aria-hidden="true" />
    <div className="universe-inner">
      <div className="orbital-ring ring-a" aria-hidden="true"><i /></div>
      <div className="orbital-ring ring-b" aria-hidden="true"><i /></div>
      <canvas ref={canvas} className="globe-canvas" aria-hidden="true" />
      <div className="universe-tag"><span /> A WORLD OF CERTIFICATIONS</div>
      <Link href="/certifications/pmi/pmp" className="floating-cert float-pmp"><span className="floating-top"><span className="floating-pmi">PMI</span><ArrowUpRight size={14}/></span><strong>PMP<sup>®</sup></strong><span>Project Management Professional</span><div className="floating-bottom"><BadgeCheck size={13}/> Lead with confidence</div></Link>
      <Link href="/certifications/aws" className="floating-cert float-aws"><span className="floating-top"><ProviderMark provider="aws" compact/><ArrowUpRight size={14}/></span><strong>AWS Certified</strong><span>Cloud · AI · Data</span><div className="floating-bottom"><span className="cert-small-dot"/> Find your cloud pathway</div></Link>
      <Link href="/certifications/microsoft" className="floating-cert float-microsoft"><span className="floating-top"><ProviderMark provider="microsoft"/><ArrowUpRight size={14}/></span><strong>Azure. Fabric. AI.</strong><span>Certifications for your next move.</span></Link>
      <Link href="/certifications/google-cloud" className="floating-cert float-google"><ProviderMark provider="google-cloud" compact/><div><strong>Google Cloud</strong><span>Build what’s next.</span></div><ArrowUpRight size={15}/></Link>
      <div className="globe-coordinate" aria-hidden="true">YOUR POTENTIAL. GLOBAL POSSIBILITIES.</div>
    </div>
  </div>;
}
