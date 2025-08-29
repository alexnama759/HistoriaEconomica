const DATA = {
  "3000ac": {
    year:"3000 a.C.",
    title:"Primeros registros contables",
    img:"https://c8.alamy.com/comp/G14X80/one-of-the-first-accounting-documents-dated-from-3200-bc-mesopotamia-G14X80.jpg",
    p1:`En la antigua Mesopotamia, templos y palacios usaron el cuneiforme para administrar
    excedentes, raciones y tributos. Las tablillas registraban inventarios, contratos y
    pagos, creando una memoria económica verificable y auditable.`,
    bullets:[
      "Economía de templos: acopio y redistribución.",
      "Pesos/medidas estandarizados; sellos cilíndricos como firma.",
      "Listas de bienes, nóminas y préstamos.",
      "Escribas como especialistas contables."
    ],
    p2:`Permitió planificar cosechas, reducir disputas y financiar obras públicas.
    Base de propiedad registral, fiscalidad y comercio a distancia.`,
    concepts:[
      "Partida simple", "Registros de transacciones", "Burocracia económica", "Tributos"
    ]
  },

  "edad-media": {
    year:"Edad Media",
    title:"Feudalismo",
    img:"https://tse4.mm.bing.net/th/id/OIP.Uk1sSqoOf8mjnLSt17ktPQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    p1:`Sistema basado en la tierra y vínculos de vasallaje; agricultura de subsistencia
    y obligaciones de siervos por protección.`,
    bullets:[
      "Rentas en trabajo/especie (corveas, diezmos).",
      "Gremios y ferias reactivan comercio desde s. XI.",
      "Crédito y letras de cambio en baja Edad Media.",
      "Tecnologías: arado de vertedera, rotación trienal, molinos."
    ],
    p2:`Limitó mercados integrados, pero financió el auge urbano y redes mercantiles.`,
    concepts:[ "Señorío y servidumbre", "Gremios", "Ferias", "Crédito medieval" ]
  },

  "1492": {
    year:"1492",
    title:"Mercantilismo",
    img:"https://tse1.mm.bing.net/th/id/OIP.9-lPVXoEfj_7PuxuM-wsPgHaEc?rs=1&pid=ImgDetMain&o=7&rm=3",
    p1:`Potencias europeas buscan metales y superávits; protegen industrias y
    controlan colonias y rutas.`,
    bullets:[
      "Bullionismo y compañías privilegiadas.",
      "Actas de Navegación y aranceles.",
      "Triángulos atlánticos; revolución de los precios.",
      "Subsidios a manufacturas estratégicas."
    ],
    p2:`Creó estados fiscales-militares y redes globales, con conflictos coloniales.`,
    concepts:[ "Balanza comercial", "Política industrial temprana", "Compañías de Indias", "Colonialismo extractivo" ]
  },

  "rev-industrial": {
    year:"1760-1840",
    title:"Revolución Industrial",
    img:"https://tse3.mm.bing.net/th/id/OIP.LutgEg_xrnJnDJl2YhpuYAHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    p1:`Mecanización textil, vapor y carbón transforman la producción; nace la fábrica
    y el trabajo asalariado urbano.`,
    bullets:[
      "Ferrocarril y telégrafo integran mercados.",
      "Banca y sociedades por acciones financian capital fijo.",
      "Burguesía industrial y proletariado.",
      "Urbanización y primeras leyes laborales."
    ],
    p2:`Inicia el crecimiento sostenido, especialización y economías de escala.`,
    concepts:[ "Productividad", "Corporaciones", "Salario monetario", "Innovación continua" ]
  },

  "1776": {
    year:"1776",
    title:"Liberalismo económico",
    img:"https://tse4.mm.bing.net/th/id/OIP.7IiS84WUnioQwJCmIJajZQHaFW?rs=1&pid=ImgDetMain&o=7&rm=3",
    p1:`Smith: división del trabajo, precios y competencia coordinan la economía; crítica
    a privilegios mercantilistas.`,
    bullets:[
      "Mano invisible y especialización.",
      "Libre comercio (Ricardo: ventaja comparativa).",
      "Estado: justicia, defensa y bienes públicos.",
      "Contra monopolios y restricciones artificiales."
    ],
    p2:`Fundó el marco del capitalismo competitivo moderno.`,
    concepts:[ "Mercado competitivo", "Libre comercio", "Productividad", "Rol limitado del Estado" ]
  },

  "1848": {
    year:"1848",
    title:"Socialismo científico",
    img:"https://tse4.mm.bing.net/th/id/OIP.YZSn6b1-l81VNXkQLR8ongHaGf?rs=1&pid=ImgDetMain&o=7&rm=3",
    p1:`Marx y Engels: análisis del capitalismo y propuesta de superación basada en la
    propiedad social y la planificación.`,
    bullets:[
      "Plusvalía, acumulación y crisis.",
      "Sindicalismo e internacionalismo obrero.",
      "Crítica a la propiedad privada de medios de producción.",
      "Influencia en reformas sociales."
    ],
    p2:`Inspiró economías planificadas y ampliación de derechos laborales.`,
    concepts:[ "Planificación", "Propiedad social", "Derechos laborales", "Estado del bienestar (influencia)" ]
  },

  "1917": {
    year:"1917",
    title:"Revolución Rusa",
    img:"https://tse4.mm.bing.net/th/id/OIP.36VOwAWYCdonis3lTnKS4AHaFL?rs=1&pid=ImgDetMain&o=7&rm=3",
    p1:`Primera economía socialista a gran escala: planes quinquenales, priorización de
    industria pesada y colectivización.`,
    bullets:[
      "Propiedad estatal, precios administrados.",
      "Cuellos de botella y escasez crónica.",
      "Rápida industrialización y objetivos estratégicos.",
      "NEP y cambios de política en los 20s."
    ],
    p2:`Alta movilización con grandes costos humanos e ineficiencias informativas.`,
    concepts:[ "Planificación central", "Racionamiento", "Empresas estatales", "Objetivos físicos" ]
  },

  "gran-depresion": {
    year:"1929-1939",
    title:"Gran Depresión",
    img:"https://www.izquierdadiario.es/IMG/jpg/crash-dijous_5ccc1241_1200x834.jpg",
    p1:`Crash bursátil, deflación y quiebras; el keynesianismo redefine la política
    macroeconómica.`,
    bullets:[
      "Patrón oro y contagio internacional.",
      "New Deal y seguridad social.",
      "Demanda agregada y política fiscal.",
      "Devaluaciones y proteccionismo."
    ],
    p2:`Marcó regulación financiera y rol estabilizador del Estado por décadas.`,
    concepts:[ "Política fiscal contracíclica", "Prestamista de última instancia", "Seguro de depósitos", "Cuentas nacionales" ]
  },

  "bretton-woods": {
    year:"1944",
    title:"Bretton Woods",
    img:"https://th.bing.com/th/id/OIP.3g9MH-fI4HfMIHnhw0r7zQHaEK?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3",
    p1:`Tipo de cambio fijo ajustable, dólar-oro, FMI y Banco Mundial; comercio
    multilateral (GATT).`,
    bullets:[
      "Controles de capital y autonomía monetaria.",
      "Reconstrucción europea y Plan Marshall.",
      "Crecimiento y Estados de bienestar.",
      "Fin del dólar-oro (1971)."
    ],
    p2:`Base del orden económico internacional de posguerra.`,
    concepts:[ "Tipos de cambio fijos", "Instituciones BW", "Liberalización comercial", "Cooperación monetaria" ]
  },

  "1991": {
    year:"1991",
    title:"Fin de la Guerra Fría",
    img:"https://tse4.mm.bing.net/th/id/OIP.P_GKzGzt7i7XqJ9YR1QCDQHaDt?rs=1&pid=ImgDetMain&o=7&rm=3",
    p1:`Colapso soviético; transiciones al mercado y aceleración de la globalización.`,
    bullets:[
      "Privatizaciones y liberalización.",
      "Cadenas globales de valor y comercio.",
      "Crisis de transición y convergencia parcial.",
      "Consenso de Washington en políticas."
    ],
    p2:`Reconfiguró flujos de capital, comercio y geopolítica económica.`,
    concepts:[ "Transición poscomunista", "Ajuste estructural", "OMC", "Cadenas globales" ]
  },

  "2008": {
    year:"2008",
    title:"Crisis financiera global",
    img:"https://th.bing.com/th/id/R.766a3dc4a87ec03e58b469556edda2c5?rik=tFh6rrb%2f5eYiCw&pid=ImgRaw&r=0",
    p1:`Burbuja hipotecaria y titulización opaca derivan en riesgo sistémico; quiebra de
    Lehman y contagio global.`,
    bullets:[
      "Rescates, estímulos y QE.",
      "Dodd-Frank, Basilea III, test de estrés.",
      "Desapalancamiento y recuperación desigual.",
      "Mayor foco en estabilidad macroprudencial."
    ],
    p2:`Redefinió la política monetaria y regulatoria en economías avanzadas.`,
    concepts:[ "Riesgo sistémico", "Política no convencional", "Too big to fail", "Macroprudencial" ]
  },

  "economia-digital": {
    year:"Siglo XXI",
    title:"Economía digital",
    img:"https://tse4.mm.bing.net/th/id/OIP.qNUvaeSo9TpqDvD1D9g-DAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    p1:`Datos, plataformas y software coordinan mercados globales; activos intangibles y
    algoritmos como ventaja competitiva.`,
    bullets:[
      "Efectos de red y plataformas.",
      "Trabajo en plataformas y 'gig economy'.",
      "Intangibles (I+D, marcas, datos).",
      "Pagos instantáneos, cripto y fintech."
    ],
    p2:`Reta la competencia, la privacidad y la fiscalidad internacional.`,
    concepts:[ "Efectos de red", "Antimonopolio en plataformas", "Gobernanza de datos", "IA y automatización" ]
  }
};

const params = new URLSearchParams(location.search);
const d = DATA[params.get("id")];

const yearEl = document.getElementById("year");
const titleEl = document.getElementById("title");
const p1El = document.getElementById("p1");
const p2El = document.getElementById("p2");
const bulletsEl = document.getElementById("bullets");
const conceptsEl = document.getElementById("concepts");
const imgEl = document.getElementById("img");

if(!d){
  document.getElementById("app").innerHTML =
    '<a class="back" href="index.html">← Volver</a><div class="title-panel"><h1>Página no encontrada</h1></div>';
}else{
  yearEl.textContent = d.year;
  titleEl.textContent = d.title;
  p1El.textContent = d.p1;
  p2El.textContent = d.p2;
  imgEl.src = d.img; imgEl.alt = d.title;
  bulletsEl.innerHTML = d.bullets.map(li=>`<li>${li}</li>`).join("");
  conceptsEl.innerHTML = d.concepts.map(li=>`<li>${li}</li>`).join("");
}

