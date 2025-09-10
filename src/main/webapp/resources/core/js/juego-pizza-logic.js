let pedido = {
    masa: 0,
    salsa: 0,
    queso: 0,
    aceituna:0,
    albahaca:0,
    tomate:0,
    lista: []
};

function seleccionarIngrediente(ingrediente){
    
    let ingredienteAgregadoAlPedido = ingrediente.getAttribute('name');
    pedido[ingredienteAgregadoAlPedido]++;
    pedido.lista.push(ingredienteAgregadoAlPedido);
    console.log(pedido.lista)
}

const botonVerPedido = document.getElementById("entregarPedido");
botonVerPedido.addEventListener("click", () => {
    const pedidoFinal = pedido.lista.join(", ");
    console.log("Pedido:", pedidoFinal);
    limpiarListaDePedidos();
});

// Para todos los ingredientes, se le asigna un listener que llama a la función seleccionarIngrediente
document.querySelectorAll('.ingredienteEnBandeja').forEach(ingrediente => {
    ingrediente.addEventListener('click', () => seleccionarIngrediente(ingrediente));
});

const limpiarListaDePedidos = () => {
    for (const [k, v] of Object.entries(pedido)){ 
        if (Array.isArray(v)) pedido[k].length = 0; // vacía arrays 
        else if (typeof v === 'number') pedido[k] = 0; // resetea números 
    }
}