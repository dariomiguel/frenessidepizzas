import {seleccionarIngrediente, limpiarListaDePedidos, renderizarPedidos} from "./juego-logic_funciones.js";

let ordenDelCliente = ["masa, salsa, queso, aceituna"];

let pedido = {
    masa: 0,
    salsa: 0,
    queso: 0,
    aceituna:0,
    albahaca:0,
    tomate:0,
    lista: []
};

const botonEntregarPedido = document.getElementById("entregarPedido");
botonEntregarPedido.addEventListener("click", () => {
    const pedidoFinal = pedido.lista.join(", ");
    console.log("Pedido:", pedidoFinal);
    limpiarListaDePedidos(pedido);
});

// Para todos los ingredientes, se le asigna un listener que llama a la función seleccionarIngrediente
document.querySelectorAll('.ingredienteEnBandeja').forEach(ingrediente => {
    ingrediente.addEventListener('click', () => seleccionarIngrediente(ingrediente, pedido.lista, pedido));
});

const botonCrearNuevoPedido = document.getElementById("crearOrdenDeCliente");

botonCrearNuevoPedido.addEventListener("click",() => {
    console.log("ordenDelCliente:", ordenDelCliente);
    renderizarPedidos(ordenDelCliente);
})

