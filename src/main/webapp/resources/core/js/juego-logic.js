import {seleccionarIngrediente, limpiarListaDePedidos, renderizarPedidos, compararPedidos} from "./juego-logic_funciones.js";

let ordenDelCliente = ["masa", "salsa", "queso", "aceituna"];

let pedido = {
    masa: 0,
    salsa: 0,
    queso: 0,
    aceituna:0,
    albahaca:0,
    tomate:0,
    lista: []
};

let puntosTotales = 0;

const botonEntregarPedido = document.getElementById("entregarPedido");
botonEntregarPedido.addEventListener("click", () => {
    let puntosObtenidos = compararPedidos(ordenDelCliente, pedido.lista) * 50;
    console.log(puntosObtenidos + " puntos obtenidos");
    puntosTotales += puntosObtenidos;
    console.log("Puntos totales: " + puntosTotales);

    limpiarListaDePedidos(pedido);
});

// Para todos los ingredientes, se le asigna un listener que llama a la función seleccionarIngrediente
document.querySelectorAll('.ingredienteEnBandeja').forEach(ingrediente => {
    ingrediente.addEventListener('click', () => seleccionarIngrediente(ingrediente, pedido.lista, pedido));
});

const botonCrearNuevoPedido = document.getElementById("crearOrdenDeCliente");

botonCrearNuevoPedido.addEventListener("click",() => {
    renderizarPedidos(ordenDelCliente);
    console.log("El pedido del cliente es:" + ordenDelCliente);
})

