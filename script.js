const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um jovem apaixonado por futebol e foi convidado para fazer um teste em um clube da sua cidade. Como se prepara?",
        alternativas: [
            { texto: "Treina todos os dias e se dedica ao máximo.", afirmacao: "Mostrou dedicação desde o início, chamou a atenção dos olheiros e foi selecionado para a base." },
            { texto: "Vai para o teste confiante no seu talento natural, sem muito treino.", afirmacao: "Confiou no seu talento e conseguiu passar, mas notou que precisará se esforçar mais para acompanhar os colegas." }
        ]
    },
    {
        enunciado: "Nos primeiros meses na base, você percebe que precisa melhorar seu condicionamento físico. O que faz?",
        alternativas: [
            { texto: "Procura o preparador físico e pede uma rotina de treinos extras.", afirmacao: "Sua força de vontade impressionou a comissão técnica, que passou a vê-lo como exemplo para o grupo." },
            { texto: "Decide focar apenas nos treinos normais e descansar no tempo livre.", afirmacao: "Manteve o ritmo, mas percebeu que os colegas que treinavam mais estavam evoluindo mais rápido." }
        ]
    },
    {
        enunciado: "Você recebe uma proposta de um time maior para integrar o time sub-20. Sua família está insegura. Qual sua decisão?",
        alternativas: [
            { texto: "Aceita o desafio e se muda para outra cidade para seguir seu sonho.", afirmacao: "Assumiu um risco importante e, com muito esforço, conseguiu se destacar no novo time." },
            { texto: "Decide esperar mais um ano para amadurecer e ganhar experiência.", afirmacao: "A escolha foi difícil, mas te ajudou a crescer emocionalmente e estar mais preparado para desafios futuros." }
        ]
    },
    {
        enunciado: "Durante uma partida importante, você é substituído e se sente injustiçado. O que faz?",
        alternativas: [
            { texto: "Fica calado, mas trabalha dobrado no treino seguinte para mostrar seu valor.", afirmacao: "Ganhou respeito do técnico e voltou ao time titular com uma atuação memorável." },
            { texto: "Reclama publicamente nas redes sociais.", afirmacao: "Sofreu críticas por sua postura, aprendeu com o erro e passou a ser mais profissional." }
        ]
    },
    {
        enunciado: "Você foi convocado para a seleção brasileira sub-23! Antes da estreia, como se prepara mentalmente?",
        alternativas: [
            { texto: "Faz sessões com um psicólogo esportivo para manter o foco.", afirmacao: "Desenvolveu inteligência emocional, o que ajudou a lidar com a pressão em grandes jogos." },
            { texto: "Confia que a emoção vai te impulsionar na hora do jogo.", afirmacao: "Foi com tudo para o jogo e, apesar do nervosismo inicial, conseguiu marcar um gol inesquecível." }
        ]
    }
];

let atual = 0;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        caixaPerguntas.textContent = "Fim da jornada!";
        textoResultado.textContent = historiaFinal;
        caixaAlternativas.innerHTML = `<button onclick="window.location.reload()">Jogar novamente</button>`;
        return;
    }

    const pergunta = perguntas[atual];
    caixaPerguntas.textContent = pergunta.enunciado;
    caixaAlternativas.innerHTML = "";

    pergunta.alternativas.forEach(alternativa => {
        const botao = document.createElement("button");
        botao.textContent = alternativa.texto;
        botao.onclick = () => {
            historiaFinal += alternativa.afirmacao + " ";
            atual++;
            mostraPergunta();
        };
        caixaAlternativas.appendChild(botao);
    });
}

mostraPergunta();
