
export function seleccionarIngrediente(ingrediente, listaDePedidos, pedidoActual) {
    let ingredienteParaElPedido = ingrediente.getAttribute('name');
    if (permitirIngrediente(ingredienteParaElPedido, listaDePedidos)){
        pedidoActual[ingredienteParaElPedido]++;
        listaDePedidos.push(ingredienteParaElPedido);
        console.log(listaDePedidos)}
    else{
        console.log("No se puede agregar", ingredienteParaElPedido, "aun.");
        console.log("Puntos descontados!");
    }
}

export function limpiarListaDePedidos (pedidoActual) {
    for (const [k, v] of Object.entries(pedidoActual)){
        if (Array.isArray(v)) pedidoActual[k].length = 0; // vacía arrays
        else if (typeof v === 'number') pedidoActual[k] = 0; // resetea números
    }
}

// Restricción de ingredientes
export function permitirIngrediente (ingredienteAColocar, listaDePedidos) {
    if (listaDePedidos.length === 0 && ingredienteAColocar === "masa"){ // la primera debe ser masa
        return true;
    }else if (listaDePedidos.length === 1 && ingredienteAColocar === "salsa" ){ // la segunda debe ser salsa
        return true;
    }else if (listaDePedidos.length === 2 && ingredienteAColocar === "queso" ){ // la tercera debe ser queso
        return true;
    }else return listaDePedidos.length >= 3;
}
