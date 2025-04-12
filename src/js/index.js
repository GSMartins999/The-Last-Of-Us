const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem')

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () =>{

        removeBotaoSelecionado();

        addBotaoSelecionado(botao);

        escondeImgAtiva();

        addImageAtiva(indice);

    })
})

function addImageAtiva(indice) {
    imagens[indice].classList.add('ativa');
}

function escondeImgAtiva() {
    const imgSelecionada = document.querySelector('.ativa');
    imgSelecionada.classList.remove('ativa');
}

function addBotaoSelecionado(botao) {
    botao.classList.add('selecionado');
}

function removeBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
