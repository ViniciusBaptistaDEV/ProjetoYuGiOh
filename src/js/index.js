
const btnAvancar = document.getElementById('btn-avancar'); //Pega o botão com o ID
const btnVoltar = document.getElementById('btn-voltar'); //Pega o botão com o ID
const cartoes = document.querySelectorAll('.cartao'); //Busca os cartões("li") que possuem a classe "cartao"
let cartaoAtual = 0; //Define que o cartão atual é o 0 (o primeiro cartão que tem a classe selecionado)

cartoes.forEach(cartao => {    //Função de seta, equivalente a: forEach(function(cartao) { "codigo" })
    cartao.addEventListener('click', function () {
        const cartaVirada = cartao.querySelector('.carta-virada'); //Enxergando a div com esse nome
        
        cartao.classList.toggle('virar'); //Girar o cartão
        cartaVirada.classList.toggle('mostrar-fundo-carta'); //Mostrar fundo da carta

        const descricao = cartao.querySelector('.descricao');
        descricao.classList.toggle('esconder');

    });
});



btnAvancar.addEventListener('click', function () {
    if (cartaoAtual === cartoes.length - 1) { //Se o cartão atual for o ultimo da lista ele não segue com o código
        return;
    }

    esconderCartaoSelecionado();

    cartaoAtual++; //Incrementa em mais 1 o cartão, ou seja, vai para o próximo
    mostrarCartao();
});

btnVoltar.addEventListener('click', function () {
    if (cartaoAtual === 0) { //Se o cartão atual for o primeiro da lista ele não segue com o código
        return;
    }

    esconderCartaoSelecionado();

    cartaoAtual--; //Subtrai em menos 1 o cartão, ou seja, vai para o anterior
    mostrarCartao();
});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add('selecionado'); //Adiciona a classe "selecionado" a este cartão atual que foi incrementado ou subtraido
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector('.selecionado'); //Verificando qual cartão está selecionado
    cartaoSelecionado.classList.remove('selecionado'); //Removendo a classe
}

