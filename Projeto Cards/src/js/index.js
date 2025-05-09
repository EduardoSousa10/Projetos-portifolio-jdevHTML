/* OBJETIVO 1 - quando clicamos na seta de avançar temos que mostrar o proximo cartao de lista
 - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar
 - passo 2 - dar um jeito de identificar o clique do úsuario na seta avançar
 - passo 3 - fazer aparecer o próximo cartão da lista 
 - passo 4 - buscar o cartão que esta selecionado e esconder 

 OBJETIVO 2 - quando clicarmos na seta de voltar temos que mostrar o proximo cartao de lista
 - passo 1 - dar um jeito de pegar o elemento HTML da seta voltar
 - passo 2 - dar um jeito de identificar o clique do úsuario na seta voltar
 - passo 3 - fazer aparecer o próximo cartão da lista 
 - passo 4 - buscar o cartão que esta selecionado e esconder 
 */

 /* OBJETIVO 1 - quando clicamos na seta de avançar temos que mostrar o proximo cartao de lista
 - passo 1 - dar um jeito de pegar o elemento HTML da seta avancar */

 const btnAvancar = document.getElementById("btn-avancar");
 const btnVoltar = document.getElementById("btn-voltar")
 let cartaoAtual = 0;
 const cartoes = document.querySelectorAll(".cartao");


 //- passo 2 - dar um jeito de identificar o clique do úsuario na seta avançar

 btnAvancar.addEventListener("click", function(){

    if (cartaoAtual === cartoes.length - 1 ) return;

     // - passo 4 - buscar o cartão que esta selecionado e esconder 

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

 //- passo 3 - fazer aparecer o próximo cartão da lista, colocando a classe selecionado nele 

 cartaoAtual++;
 cartoes[cartaoAtual].classList.add("selecionado");

});

// objeto 2

 //- passo 2 - dar um jeito de identificar o clique do úsuario na seta avançar

 btnVoltar.addEventListener
 ("click", function(){

    if(cartaoAtual === 0) return;

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");

cartaoAtual--;
cartoes[cartaoAtual].classList.add("selecionado");

});


