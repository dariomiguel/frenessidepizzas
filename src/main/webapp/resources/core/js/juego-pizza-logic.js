let pedido = {
    masas: 0,
    salsas: 0,
    quesos: 0,
    lista: []
};

// Elementos
const botonMasa = document.getElementById("botonMasa");
const botonSalsa = document.getElementById("botonSalsa");
const botonQueso = document.getElementById("botonQueso");
const botonVerPedido = document.getElementById("entregarPedido");

const cantidadDeMasa = document.getElementById("contadorMasas");
const cantidadDeSalsa = document.getElementById("contadorSalsas");
const cantidadDeQueso = document.getElementById("contadorQuesos");
const resultadoPedido = document.getElementById("resultadoPedido");

// Función genérica para actualizar
function agregarIngrediente(tipo, boton, contadorElemento) {
    pedido[tipo]++;
    pedido.lista.push(boton.name);
    contadorElemento.textContent = pedido[tipo];
}

// Listeners
botonMasa.addEventListener("click", () => agregarIngrediente("masas", botonMasa, cantidadDeMasa));
botonSalsa.addEventListener("click", () => agregarIngrediente("salsas", botonSalsa, cantidadDeSalsa));
botonQueso.addEventListener("click", () => agregarIngrediente("quesos", botonQueso, cantidadDeQueso));

// Ver pedido
botonVerPedido.addEventListener("click", () => {
    const pedidoFinal = pedido.lista.join(", ");
    console.log("Pedido:", pedidoFinal);
    resultadoPedido.textContent = `Tu pedido: ${pedidoFinal}`;
});
