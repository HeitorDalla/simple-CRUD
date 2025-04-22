"use strict";

const containerDados = document.querySelector("#containerDados");
const descricao = document.querySelector("#descricao");
const valor = document.querySelector("#valor");
const outro = document.querySelector("#outro");

const cadastrarTarefa = document.querySelector("#cadastrarTarefa");
const limpar = document.querySelector("#limpar");

// Função para limpar os valores do input
function limparValores () {
    descricao.value = '';
    valor.value = '';
    outro.checked = false;

    document.querySelector("#descricao").focus(); // Vai dar foco ao input de descricao
};

// Listener para ativar quando o html for completamente carregado
document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    document.querySelector("#descricao").focus(); // Vai dar foco ao input de descricao

    // Adicionando evento de click para quando eu clicar no input de outro
    outro.addEventListener("click", () => {
        document.querySelector("#inputOutro").focus();
    });

    // Adicionando evento de click no botão de cadastrar tarefa
    cadastrarTarefa.addEventListener("click", (event) => {
        event.preventDefault();
    
        
    });

    // Adicionando evento de click para o botão de limpar valores
    limpar.addEventListener("click", (event) => {
        event.preventDefault();

        limparValores();
    });
});