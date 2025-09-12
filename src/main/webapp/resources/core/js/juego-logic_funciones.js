
export function seleccionarIngrediente(ingrediente, listaDePedidos, pedidoActual) {
    let ingredienteParaElPedido = ingrediente.getAttribute('name');
    if (agregarElementoAMesa(ingredienteParaElPedido, listaDePedidos)){
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
    document.querySelectorAll('.ingredienteParaEntregar').forEach(ingrediente => {
        ingrediente.style.display = "none";
    });
}

// Restricción de ingredientes
export function ingredientePermitido (ingredienteAColocar, listaDePedidos) {
    if (listaDePedidos.length === 0 && ingredienteAColocar === "masa"){ // la primera debe ser masa
        return true;
    }else if (listaDePedidos.length === 1 && ingredienteAColocar === "salsa" ){ // la segunda debe ser salsa
        return true;
    }else if (listaDePedidos.length === 2 && ingredienteAColocar === "queso" ){ // la tercera debe ser queso
        return true;
    }else if (listaDePedidos.length >= 3 && listaDePedidos.length < 6 && esUnTopping(ingredienteAColocar) ){ // Último el topping
        return true;
    }else return listaDePedidos.length >= 6;
}

//Agregar ingrediente a la mesa
export function agregarElementoAMesa(ingredienteAColocar, listaDePedidos) {
    if (ingredientePermitido (ingredienteAColocar, listaDePedidos)) {
        let idDelIngrediente = esUnTopping(ingredienteAColocar) ? "toppingParaEntregar" : ingredienteAColocar + "ParaEntregar";
        let elemento = document.getElementById(idDelIngrediente);
        elemento.style.display = "block";
        return true;
    }else{
        return false;
    }
}

export function esUnTopping(ingrediente) {
    if(ingrediente === "masa" || ingrediente === "salsa" || ingrediente === "queso") return false;
    else return true;
}

export function renderizarPedidos(ordenDelCliente) {
    let pedidoEnPantalla = document.querySelectorAll('.ingredienteParaEntregar.ingredientesParaCliente');
    pedidoEnPantalla.forEach(ingrediente => {
        ingrediente.style.display = "block";
    })
}

export function compararPedidos(ordenDelCliente, pedidoRealizado ) {
    let contadorPuntos = 0;
    let cantidadDeIngredientesDelCliente = ordenDelCliente.length;
    let cantidadDeIngredientesDelPedidoRealizado = pedidoRealizado.length;

    if (cantidadDeIngredientesDelCliente !== cantidadDeIngredientesDelPedidoRealizado) {
        contadorPuntos -= Math.abs(cantidadDeIngredientesDelCliente - cantidadDeIngredientesDelPedidoRealizado) ;
    }
    for(let i = 0; i < ordenDelCliente.length; i++) {
        if ( ordenDelCliente[i] === pedidoRealizado[i] ) {
           contadorPuntos += 2;
        }else{
            contadorPuntos -= 3;
        }
    }
    return contadorPuntos;
}