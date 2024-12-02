import { editarItem } from "./editarItem.js";
import { excluirItem } from "./excluirItem.js";
import { verificarListaComprados } from "./verificarListaComprados.js";
import { gerarData } from "./gerarData.js";

const listaComprados = document.getElementById("lista-comprados");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

export function criarItemDaLista(inputItem) {
    const itemDaLista = document.createElement("li");
    const containerItemLista = document.createElement("div");
    containerItemLista.classList.add("item-lista-container");
    const itemData = document.createElement("p");

    itemData.innerText = gerarData();
    itemData.classList.add("texto-data");

    const containerNomeDoItem = document.createElement("div");
    containerNomeDoItem.classList.add("container-nome-compra");

    const checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkbox-container");
    
    const checkboxInput = document.createElement("input");
    checkboxInput.setAttribute("type", "checkbox");
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.setAttribute("id", `checkbox-${++contador}`);
    
    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.id);

    checkboxLabel.addEventListener("click", function(evento) {
        const checkboxInput = evento.currentTarget.querySelector(".checkbox-input");
        const checkboxCustom = evento.currentTarget.querySelector(".checkbox-custom");
        const itemTitulo = evento.currentTarget.closest("li").querySelector("#item-titulo");

        if (checkboxInput.checked) {
            checkboxCustom.classList.add("checked");
            listaComprados.appendChild(itemDaLista);
            itemTitulo.style.textDecoration = "line-through";
            itemData.innerText = gerarData();
        } else {
            checkboxCustom.classList.remove("checked");
            itemTitulo.style.textDecoration = "none";
            listaDeCompras.appendChild(itemDaLista);
        }

        verificarListaComprados(listaComprados);
    });
    
    const checkboxCustom = document.createElement("div");
    checkboxCustom.classList.add("checkbox-custom");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustom);

    checkboxContainer.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(checkboxContainer);

    const nomeDoItem = document.createElement("p");
    nomeDoItem.id = "item-titulo";
    nomeDoItem.innerText = inputItem;
    containerNomeDoItem.appendChild(nomeDoItem);

    const containerBotoes = document.createElement("div");
    containerBotoes.classList.add("container-bt-del-edit");
    const botaoRemover = document.createElement("button");
    botaoRemover.classList.add("bt-del-edit");
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("bt-del-edit");

    botaoRemover.addEventListener("click", function() {
        itemDaLista.remove();
    });
    botaoEditar.addEventListener("click", function() {
        editarItem(itemDaLista);
    });


    const imagemRemover = document.createElement("img");
    imagemRemover.classList.add("icon-del-edit");
    imagemRemover.src = "assets/img/icons8-delete.svg";
    imagemRemover.alt = "Remover";

    botaoRemover.addEventListener("click", function() {
        excluirItem(itemDaLista);
    })

    const imagemEditar = document.createElement("img");
    imagemEditar.classList.add("icon-del-edit");
    imagemEditar.src = "assets/img/icons8-edit.svg";
    imagemEditar.alt = "Editar";

    botaoRemover.appendChild(imagemRemover);
    botaoEditar.appendChild(imagemEditar);
    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEditar);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);


    itemDaLista.appendChild(containerItemLista);
    itemDaLista.appendChild(itemData);

    return itemDaLista;
}