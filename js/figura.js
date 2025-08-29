const FIGURAS = {
  "smith": {
    name:"Adam Smith",
    theory:"Teoría de la mano invisible y la división del trabajo",
    bio:"Economista escocés del siglo XVIII considerado el padre de la economía moderna...",
    img:"https://tse4.mm.bing.net/th/id/OIP.qNgtexLwSdRKYGCvKy_T5AHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",
    ideas:["Mano invisible","Especialización laboral","Libre mercado"]
  },
  "marx": {
    name:"Karl Marx",
    theory:"Crítica al capitalismo y la teoría de la plusvalía",
    bio:"Filósofo, economista y revolucionario alemán del siglo XIX...",
    img:"https://th.bing.com/th/id/R.cef0a8c9337049ca9de544da231d26cc?rik=5cwcLxvmaa3FtA&pid=ImgRaw&r=0",
    ideas:["Lucha de clases","Plusvalía","Materialismo histórico"]
  },
  "keynes": {
    name:"John Maynard Keynes",
    theory:"Teoría general del empleo, el interés y el dinero",
    bio:"Economista británico que influyó en las políticas económicas del siglo XX...",
    img:"https://th.bing.com/th/id/OIP.345gPHOJ4BIK4jadSr_qYQHaEU?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    ideas:["Demanda agregada","Política fiscal expansiva","Intervención del Estado"]
  },
  "friedman": {
    name:"Milton Friedman",
    theory:"Monetarismo y defensa del libre mercado",
    bio:"Economista estadounidense, premio Nobel en 1976, líder del monetarismo...",
    img:"https://th.bing.com/th/id/R.114d782fc19abf2eb9b12e1d30b40bc8?rik=VM%2fEkeA2Rz1hEw&pid=ImgRaw&r=0",
    ideas:["Control de la oferta monetaria","Crítica a la intervención estatal","Defensa del libre mercado"]
  },
  "stiglitz": {
    name:"Joseph Stiglitz",
    theory:"Crítica a la globalización y asimetría de la información",
    bio:"Economista estadounidense, Nobel en 2001, reconocido por sus estudios sobre fallas de mercado...",
    img:"https://lamenteesmaravillosa.com/wp-content/uploads/2018/01/joseph-e-stiglitz.jpg",
    ideas:["Asimetría de información","Crítica al FMI y Banco Mundial","Reformas a la globalización"]
  },
  "sen": {
    name:"Amartya Sen",
    theory:"Desarrollo humano y capacidades",
    bio:"Economista indio, Nobel en 1998, creador del enfoque de las capacidades...",
    img:"https://th.bing.com/th/id/R.552ccd79556b07ed821b7b8c8cf04c8c?rik=gLVVU4yzPQsbCg&pid=ImgRaw&r=0",
    ideas:["Desarrollo humano","Índice de pobreza multidimensional","Libertades y capacidades"]
  }
};

const params = new URLSearchParams(location.search);
const id = params.get("id");
const d = FIGURAS[id];

if(!d){
  document.getElementById("app").innerHTML = `
    <a class="back" href="index.html">← Volver</a>
    <div class="title-panel"><h1>No encontrada</h1></div>`;
}else{
  document.getElementById("name").textContent = d.name;
  document.getElementById("theory").textContent = d.theory;
  document.getElementById("bio").textContent = d.bio;
  document.getElementById("img").src = d.img;
  document.getElementById("img").alt = d.name;
  document.getElementById("ideas").innerHTML = d.ideas.map(i=>`<li>${i}</li>`).join("");
}
