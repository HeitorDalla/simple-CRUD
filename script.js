"use strict";

const containerDados = document.querySelector("#containerDados");
const containerTarefas = document.querySelector("#containerTarefas");
const descricao = document.querySelector("#descricao");
const valor = document.querySelector("#valor");
const outro = document.querySelector("#outro");

const cadastrarTarefa = document.querySelector("#cadastrarTarefa");
const limpar = document.querySelector("#limpar");

let tarefas = []; // Array para adicionar cada tarefa   

function limparValores() {
    descricao.value = '';
    valor.value = '';
    outro.checked = false;
    outro.value = '';
    if (outro.style.display === 'inline-block') {
        outro.style.display = 'none';
    }
    descricao.focus();
}

// Função para adicionar os gastos
function adicionarGastos () {

};

// Função para remover tarefa
function removerTarefa(id) {
    tarefas = tarefas.filter(() => {
        tarefa => tarefa.id !== id
    });
    atualizarListaTarefas();
    if (tarefas.length === 0) {
        containerTarefas.style.display = 'none';
    }
};

// Listener para ativar quando o html for completamente carregado
document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    document.querySelector("#descricao").focus(); // Vai dar foco ao input de descricao
    outroInput.style.display = outroRadio.checked ? "inline-block" : "none";

    // Adicionando evento de click para quando eu clicar no input de outro
    outro.addEventListener("change", () => {
        outroInput.style.display = outroRadio.checked ? "inline-block" : "none";
        if (outroRadio.checked) outroInput.focus();
    });

    const tipoRadioButtons = document.querySelectorAll('input[name="tipo"]');
    tipoRadioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            outroInput.style.display = outroRadio.checked ? "inline-block" : "none";
            if (!outroRadio.checked) outroInput.value = "";
            if (outroRadio.checked) outroInput.focus();
        });
    });

    // Adicionando evento de click no botão de cadastrar tarefa
    cadastrarTarefa.addEventListener("click", (event) => {
        event.preventDefault();

        let isValid = true; // Variável de controle

        const inputs = [...document.querySelectorAll(".info")];
        inputs.forEach((input) => {
            if (!isValid) {
                return;
            }

            if (input.value === '') {
                alert("Preencha todos os campos corretamente");
                isValid = false;
                return;
            }

            if (isValid) {
                adicionarGastos();
                containerTarefas.style.display = 'block';
            }
        });
    });

    // Adicionando evento de click para o botão de limpar valores
    limpar.addEventListener("click", (event) => {
        event.preventDefault();

        limparValores();
    });
});

