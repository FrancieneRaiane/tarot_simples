

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


/*para adicior arcanos Menores manualmente ... e vai dar trabalho
name: nome em inglês (opcional, mas pode ajudar se um dia usar API gringa)

pt: nome em português (o que aparece na tela)

img: nome da imagem (você pode nomear como quiser, só manter o padrão)

meaning_up: significado normal

meaning_rev: significado invertido

desc: descrição breve da carta

const arcanosMenores = [
    {
      name: "Ace of Cups",
      pt: "Ás de Copas",
      img: "c01.jpg",
      meaning_up: "Novo amor, compaixão, criatividade.",
      meaning_rev: "Bloqueio emocional, frustração.",
      desc: "O Ás de Copas representa o início de emoções profundas e conexões afetivas."
    },
    {
      name: "Two of Swords",
      pt: "Dois de Espadas",
      img: "c02.jpg",
      meaning_up: "Decisão difícil, equilíbrio mental.",
      meaning_rev: "Confusão, indecisão prolongada.",
      desc: "O Dois de Espadas simboliza dilemas e a necessidade de escolhas conscientes."
    }
  ];
  




depois mudar a funçao buscarCartas para:
let embaralhado = [...arcanosMaiores, ...arcanosMenores].sort(() => 0.5 - Math.random());

*/
const arcanosMenores = [
    {
      name: "Ace of Cups",
      pt: "Ás de Copas",
      img: "img_menores/c01.jpg",
      meaning_up: "Novo amor, compaixão, criatividade.",
      meaning_rev: "Bloqueio emocional, frustração.",
      desc: "O Ás de Copas representa o início de emoções profundas e conexões afetivas."
    },
    {
        name: "Two of Cups",
        pt: "Dois de Copas",////
        img: "img_menores/c02.jpg",
        meaning_up: "Decisões difíceis, ponderação de opções, impasse, evasão",
        meaning_rev: "Indecisão, confusão, sobrecarga de informações, impasse",
        desc: "As espadas que ela segura estão em perfeito equilíbrio, sugerindo que ela está ponderando seus pensamentos e analisando ambos os lados da situação para encontrar a melhor solução.."
      },
    {
      name: "Three of Cups",
      pt: "Tres de Copas",
      img: "img_menores/c03.jpg",
      meaning_up: "Celebração, amizade, criatividade, colaborações.",
      meaning_rev: "Independência, tempo sozinho, festas intensas, três é demais.",
      desc:"O Três de Copas representa celebração, amizade e união, com três mulheres brindando e compartilhando alegria, simbolizando harmonia e a valorização mútua das contribuições de cada uma. O ambiente festivo, com flores e frutos, reforça a abundância e gratidão pela vida.",
  
    },
      {
        name: "Four of Cups",
        pt: "Quatro de Copas",
        img: "img_menores/c04.jpg",
        meaning_up: "Meditação, contemplação, apatia, reavaliação..",
        meaning_rev: "Recuo, retirada, verificação de alinhamento",
        desc: "A carta Quatro de Copas mostra um jovem absorto em seus pensamentos, ignorando tanto uma taça oferecida quanto outras três a seus pés, simbolizando desatenção às oportunidades ao seu redor."
        },
    {
      name: "Five of Cups",
      pt: "Cinco de Copas",
      img: "img_menores/c05.jpg",
      meaning_up: "Arrependimento, fracasso, decepção, pessimismo..",
      meaning_rev: "Contratempos pessoais, autoperdão, seguir em frente",
      desc: "O Cinco de Copas retrata alguém focado nas perdas e decepções, simbolizadas por taças caídas, sem perceber as oportunidades ainda presentes. Ao fundo, uma ponte representa a possibilidade de superação e reconexão com algo positivo, caso ele decida seguir em frente."
    },
    {
      name: "Six of Cups",
      pt: "Seis de Copas",
      img: "img_menores/c06.jpg",
      meaning_up: "Revisitando o passado, memórias de infância, inocência, alegria.",
      meaning_rev: " Viver no passado, perdão, falta de alegria.",
      desc: "O Seis de Copas simboliza inocência, carinho e nostalgia, mostrando uma cena de gentileza entre crianças que remete à infância, harmonia e segurança emocional. A presença de flores nas taças reforça o sentimento de ternura e afeto do passado."
    },
    {
      name: "Seven of Cups",
      pt: "Sete de Copas",
      img: "img_menores/c07.jpg",
      meaning_up: "Oportunidades, escolhas, pensamento positivo, ilusão.",
      meaning_rev: " Alinhamento, valores pessoais, sobrecarregado por escolhas.",
      desc: "A carta Sete de Copas mostra um homem diante de escolhas ilusórias, com taças que contêm tanto bênçãos quanto perigos. Ela simboliza sonhos, desejos e a necessidade de discernimento, alertando para olhar além das aparências e escolher com sabedoria o que é realmente certo para si."
    },
    {
      name: "Eight of Cups",
      pt: "Oito de Copas",
      img: "img_menores/c08.jpg",
      meaning_up: "Decepção, abandono, retirada, escapismo.",
      meaning_rev: " Tentar mais uma vez, indecisão, andar sem rumo, ir embora",
      desc: "O Oito de Copas representa alguém que se afasta de uma situação emocionalmente insatisfatória em busca de algo mais significativo, mesmo sabendo que a jornada será difícil; simboliza desapego, decepção e a busca por realização interior."
    },
    {
      name: "Nine of Cups",
      pt: "Nove de Copas",
      img: "img_menores/c09.jpg",
      meaning_up: "Contentamento, satisfação, gratidão, desejo realizado.",
      meaning_rev: "Felicidade interior, materialismo, insatisfação, indulgência.",
      desc: "O Nove de Copas simboliza satisfação emocional e realização de desejos, representando um momento de contentamento e conquista pessoal."
    },
    {
      name: "Ten of Cups",
      pt: "Dez de Copas",
      img: "img_menores/c10.jpg",
      meaning_up: "Amor divino, relacionamentos felizes, harmonia, alinhamento.",
      meaning_rev: "Desconexão, valores desalinhados, relacionamentos problemáticos.",
      desc:"O Dez de Copas representa realização emocional, amor verdadeiro e harmonia familiar. A imagem mostra um casal feliz com filhos, em um cenário de paz e plenitude, simbolizando estabilidade, felicidade duradoura e bênçãos após tempos difíceis. Invertida, a carta aponta para desconexão e conflitos nos relacionamentos."
    },
    {
      name: "Page of Cups",
      pt: "Pajem de Copas",
      img: "img_menores/c11.jpg",
      meaning_up: "Oportunidades criativas, mensagens intuitivas, curiosidade, possibilidade.",
      meaning_rev: "Novas ideias, dúvidas sobre intuição, bloqueios criativos, imaturidade emocional.",
      desc: "O Pajem de Copas aparece à beira-mar segurando uma taça de onde surge um peixe, simbolizando a criatividade e a intuição que surgem de forma inesperada quando estamos abertos às emoções.",  
    },
    {
      name: "Knight of Cups",
      pt: "Cavaleiro de Copas",
      img: "img_menores/c12.jpg",
      meaning_up: "Criatividade, romance, charme, imaginação, beleza.",
      meaning_rev: "Imaginação hiperativa, irrealista, ciumento, temperamental.",
      desc: "O Cavaleiro de Copas simboliza uma jornada guiada pelas emoções, intuição e beleza. Ele avança com calma e graça, levando uma mensagem do coração, representando sensibilidade, imaginação e idealismo mesmo em meio à aridez.",
  },
  {
      name: "Queen of Cups",
      pt: "Rainha de Copas",
      img: "img_menores/c13.jpg",
      meaning_up: " Compassivos, atenciosos, emocionalmente estáveis, intuitivos, em fluxo.",
      meaning_rev: "Sentimentos internos, autocuidado, amor-próprio, codependência.",
      desc: "A Rainha de Copas simboliza uma mulher sensível, intuitiva e emocionalmente profunda. Sentada em um trono à beira-mar, cercada por símbolos do inconsciente como água e peixes, ela segura uma taça fechada, representando sentimentos vindos do subconsciente. Apesar de estar conectada às emoções, ela não se deixa dominar por elas, demonstrando equilíbrio, empatia e compreensão interior.",
  },
  {
      name: "King of Cups",
      pt: "Rei de copas",
      img: "img_menores/c14.jpg",
      meaning_up: "Emocionalmente equilibrado, compassivo, diplomático.",
      meaning_rev: " Autocompaixão, sentimentos internos, mau humor, manipulação emocional.",
      desc:"O Rei de Copas representa maturidade emocional, equilíbrio e domínio dos sentimentos. Sentado com firmeza em meio a um mar agitado, ele demonstra que, mesmo em tempos difíceis, mantém a calma e o controle. Com símbolos de poder, criatividade e emoção ao seu redor, ele mostra que aprendeu a lidar com suas emoções com sabedoria, sem se deixar abalar por elas."
  },

  //aqui começa o PAUS, wands///////////////////////////////////////////////////////////////////// ver significe imagem
  {
      name: "Ace of Wands",
      pt: "Ás de Paus",
      img: "img_menores/p01.jpg",
      meaning_up: "Inspiração, novas oportunidades, crescimento, potencial.",
      meaning_rev: "Uma ideia emergente, falta de direção, distrações, atrasos.",
      desc:"O Ás de Paus simboliza uma nova oportunidade cheia de potencial para crescimento, representada por uma mão oferecendo uma varinha. A paisagem verdejante e o castelo distante indicam novas possibilidades, enquanto as montanhas lembram que desafios podem surgir, mas são superáveis com esforço.",

  },
  {
    name: "Two of Wands",
    pt: "Dois de Paus",
    img: "img_menores/p02.jpg",
    meaning_up: " Planejamento futuro, progresso, decisões, descoberta",
    meaning_rev: "Metas pessoais, alinhamento interno, medo do desconhecido, falta de planejamento",
    desc:" Dois de Paus simboliza o potencial e as oportunidades que se abrem para alguém, mas também reflete a necessidade de sair da zona de conforto e enfrentar desafios para alcançar o sucesso.",
  },
  {
    name: "Three of Wands",
    pt: "Tres de Paus",
    img: "img_menores/p03.jpg",
    meaning_up: "Celebração, amizade, criatividade, colaborações.",
    meaning_rev: "Independência, tempo sozinho, festas intensas, três é demais.",
    desc:"O Três de Copas representa celebração, amizade e união, com três mulheres brindando e compartilhando alegria, simbolizando harmonia e a valorização mútua das contribuições de cada uma. O ambiente festivo, com flores e frutos, reforça a abundância e gratidão pela vida.",

  },
    {
      name: "Four of Wands",
      pt: "Quatro de Paus",
      img: "img_menores/p04.jpg",
      meaning_up: "Meditação, contemplação, apatia, reavaliação..",
      meaning_rev: "Recuo, retirada, verificação de alinhamento",
      desc: "A carta Quatro de Copas mostra um jovem absorto em seus pensamentos, ignorando tanto uma taça oferecida quanto outras três a seus pés, simbolizando desatenção às oportunidades ao seu redor."
      },
  {
    name: "Five of Wands",
    pt: "Cinco de Paus",
    img: "img_menores/p05.jpg",
    meaning_up: "Arrependimento, fracasso, decepção, pessimismo..",
    meaning_rev: "Contratempos pessoais, autoperdão, seguir em frente",
    desc: "O Cinco de Copas retrata alguém focado nas perdas e decepções, simbolizadas por taças caídas, sem perceber as oportunidades ainda presentes. Ao fundo, uma ponte representa a possibilidade de superação e reconexão com algo positivo, caso ele decida seguir em frente."
  },
  {
    name: "Six of Wands",
    pt: "Seis de Paus",
    img: "img_menores/p06.jpg",
    meaning_up: "Revisitando o passado, memórias de infância, inocência, alegria.",
    meaning_rev: " Viver no passado, perdão, falta de alegria.",
    desc: "O Seis de Copas simboliza inocência, carinho e nostalgia, mostrando uma cena de gentileza entre crianças que remete à infância, harmonia e segurança emocional. A presença de flores nas taças reforça o sentimento de ternura e afeto do passado."
  },
  {
    name: "Seven of Wands",
    pt: "Sete de Paus",
    img: "img_menores/p07.jpg",
    meaning_up: "Oportunidades, escolhas, pensamento positivo, ilusão.",
    meaning_rev: " Alinhamento, valores pessoais, sobrecarregado por escolhas.",
    desc: "A carta Sete de Copas mostra um homem diante de escolhas ilusórias, com taças que contêm tanto bênçãos quanto perigos. Ela simboliza sonhos, desejos e a necessidade de discernimento, alertando para olhar além das aparências e escolher com sabedoria o que é realmente certo para si."
  },
  {
    name: "Eight of Wands",
    pt: "Oito de Paus",
    img: "img_menores/p08.jpg",
    meaning_up: "Decepção, abandono, retirada, escapismo.",
    meaning_rev: " Tentar mais uma vez, indecisão, andar sem rumo, ir embora",
    desc: "O Oito de Copas representa alguém que se afasta de uma situação emocionalmente insatisfatória em busca de algo mais significativo, mesmo sabendo que a jornada será difícil; simboliza desapego, decepção e a busca por realização interior."
  },
  {
    name: "Nine of Wands",
    pt: "Nove de Paus",
    img: "img_menores/p09.jpg",
    meaning_up: "Contentamento, satisfação, gratidão, desejo realizado.",
    meaning_rev: "Felicidade interior, materialismo, insatisfação, indulgência.",
    desc: "O Nove de Copas simboliza satisfação emocional e realização de desejos, representando um momento de contentamento e conquista pessoal."
  },
  {
    name: "Ten of Wands",
    pt: "Dez de Paus",
    img: "img_menores/p10.jpg",
    meaning_up: "Amor divino, relacionamentos felizes, harmonia, alinhamento.",
    meaning_rev: "Desconexão, valores desalinhados, relacionamentos problemáticos.",
    desc:"O Dez de Copas representa realização emocional, amor verdadeiro e harmonia familiar. A imagem mostra um casal feliz com filhos, em um cenário de paz e plenitude, simbolizando estabilidade, felicidade duradoura e bênçãos após tempos difíceis. Invertida, a carta aponta para desconexão e conflitos nos relacionamentos."
  },
  {
    name: "Page of Wands",
    pt: "Pajem de Paus",
    img: "img_menores/p11.jpg",
    meaning_up: "Oportunidades criativas, mensagens intuitivas, curiosidade, possibilidade.",
    meaning_rev: "Novas ideias, dúvidas sobre intuição, bloqueios criativos, imaturidade emocional.",
    desc: "O Pajem de Copas aparece à beira-mar segurando uma taça de onde surge um peixe, simbolizando a criatividade e a intuição que surgem de forma inesperada quando estamos abertos às emoções.",  
  },
  {
    name: "Knight of Wands",
    pt: "Cavaleiro de  Paus",
    img: "img_menores/p12.jpg",
    meaning_up: "Criatividade, romance, charme, imaginação, beleza.",
    meaning_rev: "Imaginação hiperativa, irrealista, ciumento, temperamental.",
    desc: "O Cavaleiro de Copas simboliza uma jornada guiada pelas emoções, intuição e beleza. Ele avança com calma e graça, levando uma mensagem do coração, representando sensibilidade, imaginação e idealismo mesmo em meio à aridez.",
},
{
    name: "Queen of Wands",
    pt: "Rainha de Paus",
    img: "img_menores/p13.jpg",
    meaning_up: " Compassivos, atenciosos, emocionalmente estáveis, intuitivos, em fluxo.",
    meaning_rev: "Sentimentos internos, autocuidado, amor-próprio, codependência.",
    desc: "A Rainha de Copas simboliza uma mulher sensível, intuitiva e emocionalmente profunda. Sentada em um trono à beira-mar, cercada por símbolos do inconsciente como água e peixes, ela segura uma taça fechada, representando sentimentos vindos do subconsciente. Apesar de estar conectada às emoções, ela não se deixa dominar por elas, demonstrando equilíbrio, empatia e compreensão interior.",
},
{
    name: "King of Wands",
    pt: "Rei de Paus",
    img: "img_menores/p14.jpg",
    meaning_up: "Emocionalmente equilibrado, compassivo, diplomático.",
    meaning_rev: " Autocompaixão, sentimentos internos, mau humor, manipulação emocional.",
    desc:"O Rei de Copas representa maturidade emocional, equilíbrio e domínio dos sentimentos. Sentado com firmeza em meio a um mar agitado, ele demonstra que, mesmo em tempos difíceis, mantém a calma e o controle. Com símbolos de poder, criatividade e emoção ao seu redor, ele mostra que aprendeu a lidar com suas emoções com sabedoria, sem se deixar abalar por elas."
},
///// aqui começa Espadas - Swords
{
    name: "Ace of Swords",
    pt: "Ás de Espadas",
    img: "img_menores/e01.jpg",
    meaning_up: "Avanços, novas ideias, clareza mental, sucesso",
    meaning_rev: " Clareza interior, repensar uma ideia, julgamento turvo",
    desc: "O Ás de Espadas simboliza o triunfo da mente e do intelecto, indicando sucesso, mas também desafios que exigem força mental."
},
{
    name: "Two of Swords	",
    pt: "Dois de Espadas",
    img: "img_menores/e02.jpg",
    meaning_up: "Decisões difíceis, ponderação de opções, impasse, evasão",
    meaning_rev: "Indecisão, confusão, sobrecarga de informações, impasse",
    desc:"O Dois de Espadas representa indecisão e confusão. A figura vendada mostra a dificuldade em ver a situação com clareza, indicando a necessidade de equilibrar razão, emoção e intuição para tomar uma decisão."
},
{
    name: "Three of Swords",
    pt: "Três de Espadas",
    img: "img_menores/e03.jpg",
    meaning_up: "Desgosto, dor emocional, tristeza, pesar, mágoa",
    meaning_rev: "Conversa interna negativa, liberação da dor, otimismo, perdão",
    desc:"O Três de Espadas simboliza dor emocional profunda, mas também traz a esperança de que o sofrimento é passageiro."
},
{
  name: "Four of Swords",
  pt: "Quatro de Espadas",
  img: "img_menores/e04.jpg",
  meaning_up: "Descanso, relaxamento, meditação, contemplação, recuperação",
  meaning_rev: "Exaustão, esgotamento, contemplação profunda, estagnação",
  desc:"O Quatro de Espadas representa um momento de descanso e recuperação, sugerindo a necessidade de pausa, reflexão e foco interior após desafios."
},
{
  name: "Five of Swords",
  pt: "Cinco de Espadas",
  img: "img_menores/e05.jpg",
  meaning_up: "Conflito, desacordos, competição, derrota, vencer a todo custo",
  meaning_rev: "Reconciliação, reparação, ressentimento passado",
  desc:"O Cinco de Espadas simboliza conflito, derrota e tensão. Representa uma vitória amarga ou desentendimentos em que todos saem perdendo, sugerindo a necessidade de refletir sobre o valor real de vencer."
},
{
  name: "Six of Swords",
  pt: "Seis de Espadas",
  img: "img_menores/e06.jpg",
  meaning_up: "Transição, mudança, rito de passagem, liberação de bagagem.",
  meaning_rev: "Transição pessoal, resistência à mudança, negócios inacabados",
  desc:"O Seis de Espadas representa uma transição. Indica a passagem de uma situação difícil para um estado mais calmo, sugerindo alívio, mudança e a busca por paz mental."
},
{
  name: "Seven of Swords",
  pt: "Sete de Espadas",
  img: "img_menores/e07.jpg",
  meaning_up: "Traição, engano, escapar impune de algo, agir estrategicamente",
  meaning_rev: "Síndrome do impostor, autoengano, guardar segredos",
  desc:"O Sete de Espadas simboliza furtividade, engano e estratégias questionáveis. Indica a necessidade de agir com cautela e considerar se a abordagem escolhida é ética ou se há mais em jogo do que parece."
},
{
  name: "Eight of Swords",
  pt: "Oito de Espadas",
  img: "img_menores/e08.jpg",
  meaning_up: "Pensamentos negativos, restrição autoimposta, aprisionamento, mentalidade de vítima",
  meaning_rev: "Crenças autolimitantes, crítico interno, liberação de pensamentos negativos, abertura a novas perspectivas",
  desc:"O Oito de Espadas representa limitação e sensação de aprisionamento, geralmente causados por pensamentos negativos ou autossabotagem. Indica que, embora pareça estar preso, a liberdade está ao alcance, se houver clareza mental."
},
{
  name: "Nine of Swords",
  pt: "Nove de Espadas",
  img: "img_menores/e09.jpg",
  meaning_up: "Ansiedade, preocupação, medo, depressão, pesadelos",
  meaning_rev: "Turbulência interna, medos profundos, segredos, liberação de preocupações",
  desc:"O Nove de Espadas simboliza ansiedade, preocupação e medo. Representa um momento de angústia mental, muitas vezes exacerbado pela própria mente, sugerindo que as preocupações podem ser maiores na imaginação do que na realidade."
},
{
  name: "Ten of Swords",
  pt: "Dez de Espadas",
  img: "img_menores/e10.jpg",
  meaning_up: "Finais dolorosos, feridas profundas, traição, perda, crise",
  meaning_rev: "Recuperação, regeneração, resistência a um fim inevitável",
  desc:"O Dez de Espadas simboliza o fim de um ciclo doloroso, indicando traição, perda e sofrimento profundo. No entanto, também sugere que a partir do fim, uma nova oportunidade de recomeço surgirá."
},
{
  name: "Page of Swords",
  pt: "Pajem de Espadas",
  img: "img_menores/e11.jpg",
  meaning_up: " Novas ideias, curiosidade, sede de conhecimento, novas formas de comunicação",
  meaning_rev: "Autoexpressão, muita conversa e nenhuma ação, ação aleatória, pressa",
  desc:"O Pajem de Espadas representa vigilância, curiosidade e novas ideias. Indica uma fase de investigação e aprendizado, onde a mente está alerta e pronta para enfrentar desafios com inteligência e determinação."
},
{
  name: "Knight of Swords",
  pt: "Cavaleiro de Espadas",
  img: "img_menores/e12.jpg",
  meaning_up: "Ambicioso, orientado para a ação, motivado para o sucesso, pensamento rápido",
  meaning_rev: "Inquieto, sem foco, impulsivo, esgotado",
  desc:"O Cavaleiro de Espadas simboliza ação rápida, coragem e uma busca implacável por objetivos. Representa alguém determinado, mas que pode agir de forma impulsiva, sem considerar todas as consequências."
},
{
  name: "Queen of Swords",
  pt: "Rainha de Espadas",
  img: "img_menores/e13.jpg",
  meaning_up: " Julgamento independente e imparcial, limites claros, comunicação direta",
  meaning_rev: "Excessivamente emocional, facilmente influenciável, mal-humorado, insensível",
  desc:"A Rainha de Espadas simboliza clareza mental, objetividade e independência. Ela é uma figura racional, que usa a lógica e a honestidade para tomar decisões, cortando tudo o que é desnecessário ou enganoso."
},
{
  name: "King of Swords",
  pt: "Rei de Espadas",
  img: "img_menores/e14.jpg",
  meaning_up: "Clareza mental, poder intelectual, autoridade, verdade",
  meaning_rev: "Poder silencioso, verdade interior, mau uso do poder, manipulação",
  desc:"O Rei de Espadas representa autoridade, sabedoria e domínio intelectual. Ele é uma figura de liderança que toma decisões justas e equilibradas, guiado pela razão e pela verdade."
},

/// aqui começa o de ouros - Pentacles
{
  name: "Ace of Pentacles",
  pt: "Às de Ouros",
  img: "img_menores/o01.jpg",
  meaning_up: "Uma nova oportunidade financeira ou de carreira, manifestação, abundância",
  meaning_rev: "Oportunidade perdida, falta de planejamento e previsão",
  desc:"Ás de Ouros é símbolo de uma nova oportunidade, especialmente ligada à riqueza, negócios e realização. Representado por uma mão que surge das nuvens oferecendo uma moeda, ele indica que algo valioso está sendo oferecido e cabe a você aproveitá-lo. A paisagem fértil e o caminho que leva às montanhas sugerem crescimento, prosperidade e a necessidade de esforço para alcançar o sucesso. A carta incentiva a agir com determinação para transformar a chance recebida em algo duradouro."
},
{
  name: "Two of Pentacles",
  pt: "Dois de Ouros",
  img: "img_menores/o02.jpg",
  meaning_up: "Múltiplas prioridades, gerenciamento de tempo, priorização, adaptabilidade.",
  meaning_rev: "Comprometimento excessivo, desorganização, repriorização.",
  desc:"O Dois de Ouros mostra um jovem fazendo malabarismo com duas moedas, simbolizando equilíbrio e habilidade para lidar com várias tarefas. O símbolo do infinito indica que, com boa gestão de tempo e energia, ele pode enfrentar desafios contínuos. Os navios no mar agitado ao fundo reforçam que, apesar dos altos e baixos da vida, tudo pode ser controlado com foco."
},
{
  name: "Three of Pentacles",
  pt: "Três de ouros",
  img: "img_menores/o03.jpg",
  meaning_up: "Trabalho em equipe, colaboração, aprendizado, implementação.",
  meaning_rev: "Desarmonia, desalinhamento, trabalhar sozinho.",
  desc:"O Três de Ouros mostra um pedreiro trabalhando em uma catedral e conversando com dois arquitetos. Apesar de menos experiente, sua habilidade é valorizada, e ele é visto como parte essencial do projeto. A cena destaca a importância da colaboração, do trabalho em equipe e do reconhecimento das contribuições de cada um."
},
{
  name: "Four of Pentacles",
  pt: "Quatro de Ouros",
  img: "img_menores/o04.jpg",
  meaning_up: "Economia de dinheiro, segurança, conservadorismo, escassez, controle.",
  meaning_rev: "Gastos excessivos, ganância, autoproteção.",
  desc:"O Quatro de Ouros retrata um homem agarrado ao dinheiro com tanto apego que se isola e se torna incapaz de crescer ou se conectar com os outros. Sua obsessão pela riqueza o mantém preso, sozinho e estagnado."
},
{
  name: "Five of Pentacles",
  pt: "Cinco de Ouros",
  img: "img_menores/o05.jpg",
  meaning_up: "",
  meaning_rev: "",
  desc:""
},
{
  name: "Six of Pentacles",
  pt: "Seis de Ouros",
  img: "img_menores/o06.jpg",
  meaning_up: "",
  meaning_rev: "",
  desc:""
},
{
  name: "Seven of Pentacles",
  pt: "Sete de Ouros",
  img: "img_menores/o07.jpg",
  meaning_up: "",
  meaning_rev: "",
  desc:""
},
{
  name: "Eight of Pentacles",
  pt: "Oito de Ouros",
  img: "img_menores/o08.jpg",
  meaning_up: "",
  meaning_rev: "",
  desc:""
},
{
  name: "Nine of Pentacles",
  pt: "Nove de Ouros",
  img: "img_menores/o09.jpg",
  meaning_up: "",
  meaning_rev: "",
  desc:""
},
{
  name: "Ten of Pentacles",
  pt: "Dez de Ouros",
  img: "img_menores/o10.jpg",
  meaning_up: "",
  meaning_rev: "",
  desc:""
},
{
  name: "Page of Pentacles",
  pt: "Pajem de Ouros",
  img: "img_menores/o11.jpg",
  meaning_up: "",
  meaning_rev: "",
  desc:""
},
{
  name: "Knignt of Pentacles",
  pt: "Cavaleiro de Ouros",
  img: "img_menores/o12.jpg",
  meaning_up: "",
  meaning_rev: "",
  desc:""
},
{
  name: "Queen of Pentacles",
  pt: "Rainha de Ouros",
  img: "img_menores/o13.jpg",
  meaning_up: "",
  meaning_rev: "",
  desc:""
},
{
  name: "King of Pentacles",
  pt: "Rei de Ouros",
  img: "img_menores/o14.jpg",
  meaning_up: "",
  meaning_rev: "",
  desc:""
},
]



 function buscarCartas() {
   const modo = document.getElementById('modo').value;
   const quantidade = parseInt(document.getElementById('quantidade').value);
   const cartasContainer = document.getElementById('cartas');
   const embaralhandoTexto = document.getElementById('embaralhando');

   cartasContainer.innerHTML = '';
   embaralhandoTexto.style.display = 'block';

   setTimeout(() => {
     embaralhandoTexto.style.display = 'none';
     let embaralhado = [...arcanosMaiores, ...arcanosMenores].sort(() => 0.5 - Math.random());
    // let embaralhado = [...arcanosMaiores].sort(() => 0.5 - Math.random());
     let selecionadas = [];

     if (modo === 'normal') {
       selecionadas = embaralhado.slice(0, quantidade);
     } else if (modo === 'cruz') {
       selecionadas = embaralhado.slice(0, 10);
     }

     selecionadas.forEach((carta, index) => {
       //const imagemUrl = `https://www.sacred-texts.com/tarot/pkt/img/${carta.img}`;  essa linha impede de imagem locais sejam vistas
       const imagemUrl = carta.img.startsWith("img_menores/")
            ? carta.img
                : `https://www.sacred-texts.com/tarot/pkt/img/${carta.img}`;


       const div = document.createElement('div');
       div.className = 'card';
       div.innerHTML = `
         <img src="${imagemUrl}" alt="${carta.pt}">
         <div class="card-title">${modo === 'cruz' ? `Carta ${index+1}` : carta.pt}</div>
         <div class="card-info">
           <strong>Significado (normal):</strong> ${carta.meaning_up}<br>
           <strong>Significado (invertido):</strong> ${carta.meaning_rev}<br> <br>
           <strong>Desc:</strong> ${carta.desc}
       
         </div>
       `;
       cartasContainer.appendChild(div);
     });
   }, 1500);
 }

