

const arcanosMaiores = [
{ name: "The Fool", pt: "O Louco", img: "ar00.jpg", meaning_up: "Novos começos, otimismo, liberdade.", meaning_rev: "Imprudência, negligência, falta de planejamento.", desc: "O Louco representa o início de uma jornada, um salto de fé." },
{ name: "The Magician", pt: "O Mago", img: "ar01.jpg", meaning_up: "Poder, habilidade, ação.", meaning_rev: "Manipulação, truque.", desc: "O Mago é a manifestação da vontade para mudar o mundo." },
{ name: "The High Priestess", pt: "A Sacerdotisa", img: "ar02.jpg", meaning_up: "Intuição, mistério, sabedoria.", meaning_rev: "Segredos, desconexão da intuição.", desc: "A Sacerdotisa guarda os mistérios do inconsciente." },
{ name: "The Empress", pt: "A Imperatriz", img: "ar03.jpg", meaning_up: "Fertilidade, beleza, natureza.", meaning_rev: "Dependência, insegurança, negligência.", desc: "A Imperatriz simboliza nutrição, criação e abundância." },
{ name: "The Emperor", pt: "O Imperador", img: "ar04.jpg", meaning_up: "Autoridade, estrutura, controle.", meaning_rev: "Tirania, rigidez, dominação.", desc: "O Imperador representa liderança, ordem e estabilidade." },
{ name: "The Hierophant", pt: "O Hierofante", img: "ar05.jpg", meaning_up: "Tradição, espiritualidade, ensino.", meaning_rev: "Dogmatismo, rebeldia, restrição.", desc: "O Hierofante traz conhecimento espiritual e tradição." },
{ name: "The Lovers", pt: "Os Enamorados", img: "ar06.jpg", meaning_up: "Amor, união, escolhas.", meaning_rev: "Desarmonia, separação, dúvida.", desc: "Os Enamorados simbolizam conexões e decisões importantes." },
{ name: "The Chariot", pt: "O Carro", img: "ar07.jpg", meaning_up: "Determinação, conquista, direção.", meaning_rev: "Perda de controle, agressividade.", desc: "O Carro representa avanço, foco e vitória." },
{ name: "Strength", pt: "A Força", img: "ar08.jpg", meaning_up: "Coragem, paciência, compaixão.", meaning_rev: "Fraqueza, dúvida, raiva.", desc: "A Força mostra domínio emocional e autoconfiança." },
{ name: "The Hermit", pt: "O Eremita", img: "ar09.jpg", meaning_up: "Busca interior, sabedoria, solidão.", meaning_rev: "Isolamento, reclusão, afastamento.", desc: "O Eremita convida à introspecção e sabedoria interior." },
{ name: "Wheel of Fortune", pt: "A Roda da Fortuna", img: "ar10.jpg", meaning_up: "Destino, mudança, sorte.", meaning_rev: "Infortúnio, ciclos negativos.", desc: "A Roda da Fortuna representa os altos e baixos da vida." },
{ name: "Justice", pt: "A Justiça", img: "ar11.jpg", meaning_up: "Equilíbrio, verdade, justiça.", meaning_rev: "Injustiça, desequilíbrio.", desc: "A Justiça pede responsabilidade e decisões corretas." },
{ name: "The Hanged Man", pt: "O Enforcado", img: "ar12.jpg", meaning_up: "Entrega, nova perspectiva, pausa.", meaning_rev: "Resistência, estagnação.", desc: "O Enforcado representa sacrifício e revelação." },
{ name: "Death", pt: "A Morte", img: "ar13.jpg", meaning_up: "Transformação, fim de ciclo.", meaning_rev: "Resistência à mudança, medo do fim.", desc: "A Morte indica renascimento e renovação." },
{ name: "Temperance", pt: "A Temperança", img: "ar14.jpg", meaning_up: "Equilíbrio, moderação, harmonia.", meaning_rev: "Desequilíbrio, excesso, conflito.", desc: "A Temperança promove equilíbrio e integração." },
{ name: "The Devil", pt: "O Diabo", img: "ar15.jpg", meaning_up: "Apego, materialismo, vício.", meaning_rev: "Libertação, consciência.", desc: "O Diabo mostra as correntes que nos prendem." },
{ name: "The Tower", pt: "A Torre", img: "ar16.jpg", meaning_up: "Ruptura, mudança súbita.", meaning_rev: "Evitar desastre, resistência à mudança.", desc: "A Torre representa colapso e libertação forçada." },
{ name: "The Star", pt: "A Estrela", img: "ar17.jpg", meaning_up: "Esperança, inspiração, serenidade.", meaning_rev: "Desânimo, perda de fé.", desc: "A Estrela guia com luz, fé e cura." },
{ name: "The Moon", pt: "A Lua", img: "ar18.jpg", meaning_up: "Ilusão, intuição, sonhos.", meaning_rev: "Medo, confusão, engano.", desc: "A Lua revela o mundo dos mistérios e ilusões." },
{ name: "The Sun", pt: "O Sol", img: "ar19.jpg", meaning_up: "Alegria, sucesso, vitalidade.", meaning_rev: "Excesso de otimismo, egocentrismo.", desc: "O Sol traz clareza, felicidade e realização." },
{ name: "Judgement", pt: "O Julgamento", img: "ar20.jpg", meaning_up: "Renascimento, avaliação, perdão.", meaning_rev: "Negação, arrependimento.", desc: "O Julgamento convida à reflexão e renovação." },
{ name: "The World", pt: "O Mundo", img: "ar21.jpg", meaning_up: "Conclusão, sucesso, realização.", meaning_rev: "Estagnação, incompletude.", desc: "O Mundo celebra o fim de uma jornada e o sucesso pleno." }
];

 function buscarCartas() {
   const modo = document.getElementById('modo').value;
   const quantidade = parseInt(document.getElementById('quantidade').value);
   const cartasContainer = document.getElementById('cartas');
   const embaralhandoTexto = document.getElementById('embaralhando');

   cartasContainer.innerHTML = '';
   embaralhandoTexto.style.display = 'block';

   setTimeout(() => {
     embaralhandoTexto.style.display = 'none';

     let embaralhado = [...arcanosMaiores].sort(() => 0.5 - Math.random());
     let selecionadas = [];

     if (modo === 'normal') {
       selecionadas = embaralhado.slice(0, quantidade);
     } else if (modo === 'cruz') {
       selecionadas = embaralhado.slice(0, 10);
     }

     selecionadas.forEach((carta, index) => {
       const imagemUrl = `https://www.sacred-texts.com/tarot/pkt/img/${carta.img}`;

       const div = document.createElement('div');
       div.className = 'card';
       div.innerHTML = `
         <img src="${imagemUrl}" alt="${carta.pt}">
         <div class="card-title">${modo === 'cruz' ? `Carta ${index+1}` : carta.pt}</div>
         <div class="card-info">
           <strong>Significado (normal):</strong> ${carta.meaning_up}<br>
           <strong>Significado (invertido):</strong> ${carta.meaning_rev}<br>
           <em>${carta.desc}</em>
         </div>
       `;
       cartasContainer.appendChild(div);
     });
   }, 1500);
 }

