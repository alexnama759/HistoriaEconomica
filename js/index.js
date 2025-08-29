const items = [
  { id:'3000ac', year:'3000 a.C.', sub:'Primeros registros contables',
    img:'https://c8.alamy.com/comp/G14X80/one-of-the-first-accounting-documents-dated-from-3200-bc-mesopotamia-G14X80.jpg' },
  { id:'edad-media', year:'Edad Media', sub:'Feudalismo',
    img:'https://tse4.mm.bing.net/th/id/OIP.Uk1sSqoOf8mjnLSt17ktPQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:'1492', year:'1492', sub:'Mercantilismo',
    img:'https://tse1.mm.bing.net/th/id/OIP.9-lPVXoEfj_7PuxuM-wsPgHaEc?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:'rev-industrial', year:'1760–1840', sub:'Revolución Industrial',
    img:'https://tse3.mm.bing.net/th/id/OIP.LutgEg_xrnJnDJl2YhpuYAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:'1776', year:'1776', sub:'Liberalismo económico',
    img:'https://tse4.mm.bing.net/th/id/OIP.7IiS84WUnioQwJCmIJajZQHaFW?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:'1848', year:'1848', sub:'Socialismo científico',
    img:'https://tse4.mm.bing.net/th/id/OIP.YZSn6b1-l81VNXkQLR8ongHaGf?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:'1917', year:'1917', sub:'Revolución Rusa',
    img:'https://tse4.mm.bing.net/th/id/OIP.36VOwAWYCdonis3lTnKS4AHaFL?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:'gran-depresion', year:'1929–1939', sub:'Gran Depresión',
    img:'https://www.izquierdadiario.es/IMG/jpg/crash-dijous_5ccc1241_1200x834.jpg' },
  { id:'bretton-woods', year:'1944', sub:'Bretton Woods',
    img:'https://th.bing.com/th/id/OIP.3g9MH-fI4HfMIHnhw0r7zQHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:'1991', year:'1991', sub:'Fin de la Guerra Fría',
    img:'https://tse4.mm.bing.net/th/id/OIP.P_GKzGzt7i7XqJ9YR1QCDQHaDt?rs=1&pid=ImgDetMain&o=7&rm=3' },
  { id:'2008', year:'2008', sub:'Crisis financiera',
    img:'https://th.bing.com/th/id/R.766a3dc4a87ec03e58b469556edda2c5?rik=tFh6rrb%2f5eYiCw&pid=ImgRaw&r=0' },
  { id:'economia-digital', year:'Siglo XXI', sub:'Economía digital',
    img:'https://tse4.mm.bing.net/th/id/OIP.qNUvaeSo9TpqDvD1D9g-DAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3' }
];

const track = document.getElementById('track');


items.forEach(it=>{
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img class="thumb" src="${it.img}" alt="${it.sub}">
    <div class="meta">
      <p class="year">${it.year}</p>
      <p class="subtitle">${it.sub}</p>
    </div>`;
  card.addEventListener('click', ()=>location.href=`detalle.html?id=${encodeURIComponent(it.id)}`);
  track.appendChild(card);
});


let current = 0;
function slide(dir){
  if (!track.children.length) return;
  const style = getComputedStyle(track.children[0]);
  const cardWidth = track.children[0].offsetWidth;
  const margin = parseFloat(style.marginLeft) + parseFloat(style.marginRight);
  const step = cardWidth + margin;             
  const containerW = track.parentElement.offsetWidth;
  const totalW = track.scrollWidth;
  const max = Math.max(0, totalW - containerW);

  current += dir * step;
  if(current < 0) current = 0;
  if(current > max) current = max;

  track.style.transform = `translateX(${-current}px)`;
}

document.getElementById('prev').onclick = ()=>slide(-1);
document.getElementById('next').onclick = ()=>slide(1);

window.addEventListener('resize', ()=>slide(0));

const buscador = document.getElementById("buscador");
if(buscador){
  buscador.addEventListener("input", e=>{
    const term = e.target.value.toLowerCase();
    document.querySelectorAll(".glosario-lista > div").forEach(item=>{
      const txt = item.innerText.toLowerCase();
      item.style.display = txt.includes(term) ? "block" : "none";
    });
  });
}

document.querySelectorAll(".figura-card").forEach(card=>{
  card.addEventListener("click", ()=>{
    const id = card.getAttribute("data-id");
    location.href = `figura.html?id=${id}`;
  });
});
