(()=>{
const $=s=>document.querySelector(s);
const esc=s=>s.replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const eur=n=>'€ '+Number(n).toFixed(2).replace('.',',');
const data=MENU.map(c=>({...c,items:c.righe.trim().split('\n').map(r=>{const[n,i,a,p]=r.split('|');return{n,i,a:[...(a||'')],p}})}));
let cat='tutte';
$('#legend').textContent='Allergeni: '+Object.values(ALLERGENI).join(', ')+'.';
const tabs=$('#tabs');
[{id:'tutte',nome:'Tutte'},...data].forEach(c=>{const b=document.createElement('button');b.textContent=c.nome;b.dataset.id=c.id;b.setAttribute('role','tab');b.onclick=()=>{cat=c.id;render()};tabs.append(b)});
function render(){
  const q=$('#q').value.trim().toLowerCase();let n=0;
  tabs.querySelectorAll('button').forEach(b=>b.setAttribute('aria-selected',b.dataset.id===cat));
  $('#menu-list').innerHTML=data.filter(c=>cat==='tutte'||c.id===cat).map(c=>{
    const it=c.items.filter(x=>!q||(x.n+' '+x.i).toLowerCase().includes(q));n+=it.length;
    return it.length?`<div class="cat"><h3>${c.nome}</h3><div class="items">${it.map(x=>`<div class="item"><h4>${esc(x.n)}</h4><span class="p">${eur(x.p)}</span>${x.i?`<p class="d">${esc(x.i)}</p>`:''}${x.a.length?`<div class="al" aria-label="Allergeni">${x.a.map(a=>`<span>${ALLERGENI[a]}</span>`).join('')}</div>`:''}</div>`).join('')}</div></div>`:'';
  }).join('');
  $('#empty').hidden=n>0;
}
$('#q').addEventListener('input',render);render();
// menu mobile
const bg=$('.burger'),nav=$('#links');
bg.onclick=()=>{const o=nav.classList.toggle('open');bg.setAttribute('aria-expanded',o)};
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');bg.setAttribute('aria-expanded',false)}));
// aperto/chiuso ora (fuso Europe/Rome)
const now=new Date(new Date().toLocaleString('en-US',{timeZone:'Europe/Rome'}));
const d=now.getDay(),h=now.getHours()+now.getMinutes()/60;
const S={0:[[17.5,21.5]],1:[],2:[[11,14],[17.5,21.5]],3:[[11,14],[17.5,21.5]],4:[[11,14],[17.5,21.5]],5:[[11,14],[17.5,21.5]],6:[[11,14],[17.5,21.5]]};
const open=S[d].some(([a,b])=>h>=a&&h<b);
const bd=$('#open-now');bd.hidden=false;bd.textContent=open?'● Aperto ora':'● Chiuso ora, vedi gli orari';
document.querySelectorAll('.hours tr').forEach(r=>{if(r.dataset.d.split(',').includes(String(d)))r.classList.add('today')});
$('#y').textContent=new Date().getFullYear();
})();
