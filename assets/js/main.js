/* Lonerpixels — main script */
"use strict";
// Set this to a Formspree (or similar) endpoint to deliver leads automatically, e.g. "https://formspree.io/f/xxxxxxx".
// Left empty, the form opens the visitor's email app addressed to CONTACT_EMAIL.
const FORM_ENDPOINT="";
const CONTACT_EMAIL="lonerpixels@gmail.com";
const GALLERY=[
 {
  "t": "assets/img/thumb/festival-coolers.jpg",
  "f": "assets/img/full/festival-coolers.jpg",
  "a": "Two people carrying vintage-style cooler boxes at a festival"
 },
 {
  "t": "assets/img/thumb/puffer-graffiti.jpg",
  "f": "assets/img/full/puffer-graffiti.jpg",
  "a": "Woman in a black puffer jacket against a red graffiti wall"
 },
 {
  "t": "assets/img/thumb/red-studio.jpg",
  "f": "assets/img/full/red-studio.jpg",
  "a": "Smiling man in sunglasses against a red backdrop"
 },
 {
  "t": "assets/img/thumb/festival-arch.jpg",
  "f": "assets/img/full/festival-arch.jpg",
  "a": "Golden festival arch with guests beneath it"
 },
 {
  "t": "assets/img/thumb/studio-crouch.jpg",
  "f": "assets/img/full/studio-crouch.jpg",
  "a": "Man crouching in a green jacket in a grey studio"
 },
 {
  "t": "assets/img/thumb/warehouse-suit.jpg",
  "f": "assets/img/full/warehouse-suit.jpg",
  "a": "Man in a blue suit seated on a wooden chair in a warehouse"
 },
 {
  "t": "assets/img/thumb/cheers-bottles.jpg",
  "f": "assets/img/full/cheers-bottles.jpg",
  "a": "Two bottles clinking in low light"
 },
 {
  "t": "assets/img/thumb/bench-still.jpg",
  "f": "assets/img/full/bench-still.jpg",
  "a": "Man in sunglasses and denim raising his hands on a park bench"
 },
 {
  "t": "assets/img/thumb/park-still.jpg",
  "f": "assets/img/full/park-still.jpg",
  "a": "Two men in a green park during a music video shoot"
 },
 {
  "t": "assets/img/thumb/sofa-creator.jpg",
  "f": "assets/img/full/sofa-creator.jpg",
  "a": "Woman on a cream sofa filming on her phone"
 },
 {
  "t": "assets/img/thumb/grey-studio.jpg",
  "f": "assets/img/full/grey-studio.jpg",
  "a": "Young man in a black durag making a hand sign"
 },
 {
  "t": "assets/img/thumb/agm-stage.jpg",
  "f": "assets/img/full/agm-stage.jpg",
  "a": "Stage armchairs at an annual general meeting"
 },
 {
  "t": "assets/img/thumb/fur-coat-red.jpg",
  "f": "assets/img/full/fur-coat-red.jpg",
  "a": "Woman in a fur coat holding sunglasses"
 },
 {
  "t": "assets/img/thumb/locker-portrait.jpg",
  "f": "assets/img/full/locker-portrait.jpg",
  "a": "Young man reading on a stool against a blue wall"
 },
 {
  "t": "assets/img/thumb/leather-set.jpg",
  "f": "assets/img/full/leather-set.jpg",
  "a": "Woman in a studded leather vest and skirt outdoors"
 },
 {
  "t": "assets/img/thumb/portrait-teal.jpg",
  "f": "assets/img/full/portrait-teal.jpg",
  "a": "Close portrait with bold blue eye makeup"
 },
 {
  "t": "assets/img/thumb/yellow-puffer.jpg",
  "f": "assets/img/full/yellow-puffer.jpg",
  "a": "Woman in a black puffer jacket against a yellow backdrop"
 },
 {
  "t": "assets/img/thumb/headphones-yellow.jpg",
  "f": "assets/img/full/headphones-yellow.jpg",
  "a": "Woman singing in headphones against a yellow backdrop"
 },
 {
  "t": "assets/img/thumb/roller-skates-pink.jpg",
  "f": "assets/img/full/roller-skates-pink.jpg",
  "a": "Hand holding a pastel roller skate against a pink backdrop"
 }
];
const mb=document.querySelector(".menu"),ml=document.getElementById("menu");
mb.addEventListener("click",()=>{const o=ml.classList.toggle("open");mb.setAttribute("aria-expanded",o)});
ml.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{ml.classList.remove("open");mb.setAttribute("aria-expanded","false")}));
(function(){
 const c=document.getElementById('px'),x=c.getContext('2d'),S=28,G=3,cols=[[232,178,58],[47,184,176],[216,69,43]];
 let W,H,C,R,cells=[],m={x:-999,y:-999},still=matchMedia('(prefers-reduced-motion:reduce)').matches;
 function size(){W=c.width=innerWidth;H=c.height=innerHeight;C=Math.ceil(W/S);R=Math.ceil(H/S);
  cells=Array.from({length:C*R},()=>({p:Math.random()*6.28,s:.4+Math.random()*1.2,k:Math.random()<.7?0:(Math.random()<.6?1:2)}))}
 addEventListener('resize',size);size();
 addEventListener('pointermove',e=>{m.x=e.clientX;m.y=e.clientY});
 function draw(t){t/=1000;x.clearRect(0,0,W,H);
  const sy=(scrollY/S)|0;
  for(let j=0;j<R;j++)for(let i=0;i<C;i++){
   const q=cells[j*C+i],px=i*S,py=j*S;
   let a=.03+.07*(.5+.5*Math.sin(t*q.s+q.p+(i+j)*.15));
   const d=Math.hypot(px+S/2-m.x,py+S/2-m.y);
   let col=cols[q.k];
   if(d<190){const f=1-d/190;a+=f*.5;col=cols[0]}
   const wave=Math.sin(t*.7-(i*.18)+(j*.12)+sy*.05);
   if(wave>.985)a+=.22;
   x.fillStyle='rgba('+col+','+Math.min(a,.7)+')';
   x.fillRect(px+1,py+1,S-G,S-G)}
  if(!still)requestAnimationFrame(draw)}
 requestAnimationFrame(draw);
})();
const ring=document.getElementById('ring');
(function(){const order=GALLERY;
 const n=order.length,w=innerWidth<900?130:190,R=Math.round((w+20)/2/Math.tan(Math.PI/n)),step=360/n,st=document.getElementById('rstage'),ct=document.getElementById('ct');
 let cur=0,timer,hover=false,sx=null,skip=false;
 const lb=document.getElementById('lb'),lbi=document.getElementById('lbi');let li=0;
 ring.style.setProperty('--R',R+'px');ring.style.width=w+'px';ring.style.height=Math.round(w*1.75)+'px';
 function go(){ring.style.transform='translateZ('+(-R)+'px) rotateY('+(-cur*step)+'deg)';ct.textContent=(((cur%n)+n)%n+1)+' / '+n}
 function to(d){cur+=d;go()}
 function auto(){clearInterval(timer);if(!matchMedia('(prefers-reduced-motion:reduce)').matches)timer=setInterval(()=>{if(!hover)to(1)},4500)}

 function face(i){let d=((i-cur)%n+n)%n;if(d>n/2)d-=n;if(d)to(d)}
 function show(i){li=i;lbi.src=order[i].f;lbi.alt=order[i].a;lb.hidden=false;document.body.style.overflow='hidden';face(i);clearInterval(timer);lb.querySelector('.lbx').focus()}
 function hide(){lb.hidden=true;document.body.style.overflow='';auto()}
 order.forEach((k,i)=>{const f=document.createElement('figure'),im=new Image();im.src=k.t;im.alt=k.a;im.width=190;im.height=332;im.loading='lazy';f.appendChild(im);f.style.transform='rotateY('+(i*360/n)+'deg) translateZ('+R+'px)';
  f.addEventListener('click',()=>{if(skip)return;show(i)});ring.appendChild(f)});
 document.getElementById('prev').onclick=()=>{to(-1);auto()};document.getElementById('next').onclick=()=>{to(1);auto()};
 st.addEventListener('mouseenter',()=>hover=true);st.addEventListener('mouseleave',()=>hover=false);
 st.addEventListener('pointerdown',e=>{sx=e.clientX});
 st.addEventListener('pointerup',e=>{if(sx!==null&&Math.abs(e.clientX-sx)>50){to(e.clientX<sx?1:-1);auto();skip=true;setTimeout(()=>skip=false,60)}sx=null});
 lb.querySelector('.lbx').onclick=hide;lb.querySelector('.lbp').onclick=()=>show((li-1+n)%n);lb.querySelector('.lbn').onclick=()=>show((li+1)%n);
 lb.addEventListener('click',e=>{if(e.target===lb)hide()});
 addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')hide();if(e.key==='ArrowRight')show((li+1)%n);if(e.key==='ArrowLeft')show((li-1+n)%n)});
 go();auto()})();
document.querySelectorAll('.reel').forEach(r=>{r.querySelector('button').addEventListener('click',()=>{const f=document.createElement('iframe');f.src='https://www.youtube-nocookie.com/embed/'+r.dataset.id+'?autoplay=1&rel=0&playsinline=1';f.title='Visual reference';f.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';f.allowFullscreen=true;r.innerHTML='';r.appendChild(f)})});
(function(){
 const form=document.getElementById('lead'),msg=document.getElementById('leadmsg');
 form.addEventListener('submit',e=>{e.preventDefault();
  const d=new FormData(form),g=k=>(d.get(k)||'').toString().trim();
  if(g('company'))return;
  const subject='New project request from '+g('name');
  const body='Name: '+g('name')+'\nPhone: '+g('phone')+'\nEmail: '+g('email')+'\n\nRequest:\n'+g('request');
  const mailto='mailto:'+CONTACT_EMAIL+'?subject='+encodeURIComponent(subject)+'&body='+encodeURIComponent(body);
  function viaMail(){const a=document.createElement('a');a.href=mailto;document.body.appendChild(a);a.click();a.remove();
   msg.innerHTML='Your email app should open with your request ready to send. If it doesn’t, <a href="'+mailto+'" style="text-decoration:underline">tap here</a> or email '+CONTACT_EMAIL+'.'}
  if(!FORM_ENDPOINT){viaMail();return}
  msg.textContent='Sending…';
  fetch(FORM_ENDPOINT,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify({name:g('name'),phone:g('phone'),email:g('email'),message:g('request'),_subject:subject})})
   .then(r=>{if(!r.ok)throw new Error('failed');msg.textContent='Thank you. We’ve received your request and will be in touch shortly.';form.reset()})
   .catch(viaMail)})})();
const scene=document.getElementById('scene'),stage=document.getElementById('stage');
stage.addEventListener('mousemove',e=>{const r=stage.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;scene.style.transform=`rotateY(${x*24}deg) rotateX(${-y*18}deg)`});
stage.addEventListener('mouseleave',()=>scene.style.transform='');
document.querySelectorAll('.tilt').forEach(c=>{
 c.addEventListener('mousemove',e=>{const r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform=`rotateY(${x*12}deg) rotateX(${-y*12}deg)`});
 c.addEventListener('mouseleave',()=>c.style.transform='');
});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
