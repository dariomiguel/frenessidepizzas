import {seleccionarIngrediente, limpiarListaDePedidos, renderizarPedidos, compararPedidos, nuevoPedido} from "./juego-logic_funciones.js";

const pedido = {
    masa: 0,
    salsa: 0,
    queso: 0,
    toppings: {
        aceituna: 0,
        albahaca: 0,
        tomate: 0
    },
    lista: [],
    ordenDelCliente: []
};

const toppingsDisponibles = Object.keys(pedido.toppings);
let puntosTotales = 0;

const botonEntregarPedido = document.getElementById("entregarPedido");
botonEntregarPedido.addEventListener("click", () => {
    if (pedido.ordenDelCliente.length === 0) {
        console.log("El cliente todavía no ha hecho un pedido");
    }else {
        let puntosObtenidos = compararPedidos(pedido.ordenDelCliente, pedido.lista) * 50;
        console.log(puntosObtenidos + " puntos obtenidos");
        puntosTotales += puntosObtenidos;
        console.log("Puntos totales: " + puntosTotales);

        limpiarListaDePedidos(pedido);
    }
});

// Para todos los ingredientes, se le asigna un listener que llama a la función seleccionarIngrediente
document.querySelectorAll('.ingredienteEnBandeja').forEach(ingrediente => {
    ingrediente.addEventListener('click', () => seleccionarIngrediente(ingrediente, pedido.lista, pedido.ordenDelCliente));
});

const botonCrearNuevoPedido = document.getElementById("crearOrdenDeCliente");

botonCrearNuevoPedido.addEventListener("click",() => {
    pedido.ordenDelCliente = [...nuevoPedido(toppingsDisponibles)];
    renderizarPedidos(pedido.ordenDelCliente, pedido);
    console.log("El pedido del cliente es:" + pedido.ordenDelCliente);
})

