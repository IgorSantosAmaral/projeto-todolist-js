import { criarItemDaLista } from "./criarItemDaLista.js";
import { verificarListaVazia } from "./verificarListaVazia.js";

const inputItem = document.getElementById("input-item");
const listaDeCompras = document.getElementById("lista-de-compras");


export function adicionarItem(evento) {
    evento.preventDefault()

    if (inputItem.value === "") {
        alert("Insira um item!");
        return;
    }

    const itemDaLista = criarItemDaLista(inputItem.value);
    listaDeCompras.appendChild(itemDaLista);
    verificarListaVazia(listaDeCompras);
    inputItem.value = "";
}