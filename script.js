"use strict";

const containerDados = document.querySelector("#containerDados");
const containerTarefas = document.querySelector("#containerTarefas");
const descricao = document.querySelector("#descricao");
const valor = document.querySelector("#valor");
const outro = document.querySelector("#outro");

const cadastrarTarefa = document.querySelector("#cadastrarTarefa");
const limpar = document.querySelector("#limpar");

let tarefas = []; // Array para adicionar cada tarefa   

// Função para limpar valores
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

// Função para adicionar cada gasto
const adicionarGastos = () => {
    const desc = descricao.value.trim();
    const val = parseFloat(valor.value);
    const tipoSelecionado = document.querySelector('input[name="tipo"]:checked');
    let tipo = tipoSelecionado?.value;

    if (!desc || isNaN(val) || !tipo || (tipo === 'outro' && !document.querySelector("#inputOutro").value.trim())) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    if (tipo === 'outro') tipo = document.querySelector("#inputOutro").value.trim();

    tarefas.push({ id: Date.now(), descricao: desc, valor: val, tipo });
    atualizarListaTarefas();
    limparValores();
    containerTarefas.style.display = "block";
};

// Função para remover tarefa
const removerTarefa = (id) => {
    tarefas = tarefas.filter(tarefa => tarefa.id !== id);
    atualizarListaTarefas();
    containerTarefas.style.display = tarefas.length > 0 ? "block" : "none";
};

// Função para atualizr no DOM a lista de tarefas
const atualizarListaTarefas = () => {
    tarefas.innerHTML = "";
    let total = 0;
    tarefas.forEach(t => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <span>${t.descricao}</span>
            <span class="tipo-tag">${t.tipo}</span>
            <span class="valor-tarefa ${t.valor > 100 ? 'valor-alto' : ''}">R$ ${t.valor.toFixed(2)}</span>
            <button class="remover-tarefa" data-id="${t.id}">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;
        listItem.querySelector('.remover-tarefa').addEventListener('click', function() {
            removerTarefa(parseInt(this.dataset.id));
        });
        listaTarefas.appendChild(listItem);
        total += t.valor;
    });
    valorTotalSpan.textContent = `R$ ${total.toFixed(2)}`;
};

// Listener para ativar quando o html for completamente carregado
document.addEventListener("DOMContentLoaded", (event) => {
    event.preventDefault();

    document.querySelector("#descricao").focus(); // Vai dar foco ao input de descricao
    outro.style.display = outro.checked ? "inline-block" : "none";

    // Adicionando evento de click para quando eu clicar no input de outro
    outro.addEventListener("change", () => {
        outro.style.display = outro.checked ? "inline-block" : "none";
        if (outro.checked) outro.focus();
    });

    const tipoRadioButtons = document.querySelectorAll('input[name="tipo"]');
    tipoRadioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            outro.style.display = outro.checked ? "inline-block" : "none";
            if (!outro.checked) outro.value = "";
            if (outro.checked) outro.focus();
        });
    });

    // Adicionando evento de click no botão de cadastrar tarefa
    cadastrarTarefa.addEventListener("click", adicionarGastos);

    // Adicionando evento de click para o botão de limpar valores
    limpar.addEventListener("click", limparValores);

    atualizarListaTarefas();
});

