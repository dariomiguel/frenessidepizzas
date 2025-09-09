let pedido = {
    masas: 0,
    salsas: 0,
    quesos: 0,
    aceitunas:0,
    albahacas:0,
    tomates:0,
    lista: []
};

// Elementos
const botonMasa = document.getElementById("botonMasa");
const botonSalsa = document.getElementById("botonSalsa");
const botonQueso = document.getElementById("botonQueso");
const botonAlbahaca = document.getElementById("botonAlbahaca");
const botonAceituna = document.getElementById("botonAceituna");
const botonTomate = document.getElementById("botonTomate");
const botonVerPedido = document.getElementById("entregarPedido");

const cantidadDeMasa = document.getElementById("contadorMasas");
const cantidadDeSalsa = document.getElementById("contadorSalsas");
const cantidadDeQueso = document.getElementById("contadorQuesos");
const cantidadDeAlbahaca = document.getElementById("contadorAlbahacas");
const cantidadDeAceituna = document.getElementById("contadorAceitunas");
const cantidadDeTomate = document.getElementById("contadorTomates");
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
botonAlbahaca.addEventListener("click", () => agregarIngrediente("albahacas", botonAlbahaca, cantidadDeAlbahaca));
botonAceituna.addEventListener("click", () => agregarIngrediente("aceitunas", botonAceituna, cantidadDeAceituna));
botonTomate.addEventListener("click", () => agregarIngrediente("tomates", botonTomate, cantidadDeTomate));

// Ver pedido
botonVerPedido.addEventListener("click", () => {
    const pedidoFinal = pedido.lista.join(", ");
    console.log("Pedido:", pedidoFinal);
    resultadoPedido.textContent = `Tu pedido: ${pedidoFinal}`;
});
