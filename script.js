(()=>{const pl=document.getElementById('preloader');const hide=()=>{pl&&pl.classList.add('done');setTimeout(()=>pl&&pl.remove(),700)};
window.addEventListener('load',()=>setTimeout(hide,900));setTimeout(hide,4000);
const io='IntersectionObserver'in window?new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12}):null;
document.querySelectorAll('.reveal').forEach(el=>io?io.observe(el):el.classList.add('in'));
document.querySelectorAll('.tilt').forEach(c=>{c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.transform=`perspective(900px) rotateX(${(.5-(e.clientY-r.top)/r.height)*8}deg) rotateY(${((e.clientX-r.left)/r.width-.5)*8}deg) translateY(-4px)`});c.addEventListener('pointerleave',()=>c.style.transform='')});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('open')));
const f=document.getElementById('cform');f&&f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f);location.href='mailto:trueprosperityeoutreach@gmail.com?subject='+encodeURIComponent(d.get('t'))+'&body='+encodeURIComponent(d.get('m')+'\n\n'+d.get('n')+'\n'+d.get('p'))});
const s=document.getElementById('share');s&&s.addEventListener('click',async()=>{const u={title:document.title,url:location.href};try{navigator.share?await navigator.share(u):(await navigator.clipboard.writeText(u.url),s.textContent='Link copied ✓')}catch(e){}})})();

(()=>{const tb=document.getElementById('topbar'),d=new Date(),ev=new Date(2026,10,11,23,59);
if(tb)tb.innerHTML=d<=ev?'🦃 <b>Turkey + Ham Giveaway</b> is on Nov 11 at 5 PM · 8751 N 40th St, Tampa <a href="events.html">Details →</a>':'🍲 <b>Hot meals &amp; grocery</b> every Monday, Wednesday &amp; Saturday at 5 PM <a href="events.html">Details →</a>';
const p=document.getElementById('progress'),t=document.getElementById('totop');
addEventListener('scroll',()=>{const h=document.documentElement,s=h.scrollTop/(h.scrollHeight-h.clientHeight);p.style.width=(s*100)+'%';t.classList.toggle('show',h.scrollTop>500)},{passive:true});
t.onclick=()=>scrollTo({top:0,behavior:'smooth'});
const run=el=>{const n=+el.dataset.count,sx=el.dataset.suffix||'',pl=el.dataset.plain;let s=null;const f=ts=>{s=s||ts;const k=Math.min((ts-s)/1600,1),v=Math.floor(n*(1-Math.pow(1-k,3)));el.textContent=(pl?v:v.toLocaleString())+(k>=1?sx:'');k<1&&requestAnimationFrame(f)};requestAnimationFrame(f)};
const o=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){run(x.target);o.unobserve(x.target)}}),{threshold:.5});document.querySelectorAll('[data-count]').forEach(e=>o.observe(e));
const lb=document.createElement('div');lb.id='lb';lb.innerHTML='<img alt="">';document.body.appendChild(lb);lb.onclick=()=>lb.classList.remove('on');
document.querySelectorAll('img.zoom').forEach(i=>i.onclick=()=>{lb.firstChild.src=i.src;lb.classList.add('on')});
addEventListener('keydown',e=>e.key==='Escape'&&lb.classList.remove('on'))})();

(()=>{const v=document.getElementById('vod');if(!v)return;const L=[["As iron sharpens iron, so one person sharpens another.","Proverbs 27:17"],["Whoever is kind to the poor lends to the Lord.","Proverbs 19:17"],["I was hungry and you gave me something to eat.","Matthew 25:35"],["Seek first his kingdom, and all these things will be added to you.","Matthew 6:33"],["Jesus Christ is the same yesterday, today and forever.","Hebrews 13:8"],["I am the way, the truth and the life.","John 14:6"]];
const d=Math.floor(Date.now()/864e5),x=L[d%L.length];v.innerHTML='“'+x[0]+'”<span>'+x[1]+'</span>'})();
