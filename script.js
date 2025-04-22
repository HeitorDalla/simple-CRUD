"use strict";

const cadastrarTarefa = document.querySelector("#cadastrarTarefa");
const limpar = document.querySelector("#limpar");

// Função para limpar os valores do input

function limparValores () {

};

document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    cadastrarTarefa.addEventListener("click", (event) => {
        event.preventDefault();
    
        
    });

    limpar.addEventListener("click", (event) => {
        event.preventDefault();
        
        limparValores();
    });
});