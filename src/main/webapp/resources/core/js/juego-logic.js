import {seleccionarIngrediente, limpiarListaDePedidos} from "./juego-logic_funciones.js";

let pedido = {
    masa: 0,
    salsa: 0,
    queso: 0,
    aceituna:0,
    albahaca:0,
    tomate:0,
    lista: []
};

const botonVerPedido = document.getElementById("entregarPedido");
botonVerPedido.addEventListener("click", () => {
    const pedidoFinal = pedido.lista.join(", ");
    console.log("Pedido:", pedidoFinal);
    limpiarListaDePedidos(pedido);
});

// Para todos los ingredientes, se le asigna un listener que llama a la función seleccionarIngrediente
document.querySelectorAll('.ingredienteEnBandeja').forEach(ingrediente => {
    ingrediente.addEventListener('click', () => seleccionarIngrediente(ingrediente, pedido.lista, pedido));
});


