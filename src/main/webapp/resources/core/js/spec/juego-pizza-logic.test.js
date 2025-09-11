import {seleccionarIngrediente, limpiarListaDePedidos, permitirIngrediente} from "../juego-logic_funciones.js";

let pedido;

const resetPedido = () => ({
    masa: 0,
    salsa: 0,
    queso: 0,
    aceituna: 0,
    albahaca: 0,
    tomate: 0,
    lista: [],
});

describe('Reglas de armado de pizza', () => {
    beforeEach(() => {
        pedido = resetPedido();
    });

    describe('permitirIngrediente()', () => {
        it('solo permite "masa" como primer ingrediente', () => {
            const lista = [];
            expect(permitirIngrediente('masa', lista)).toBeTrue();
            expect(permitirIngrediente('salsa', lista)).toBeFalse();
            expect(permitirIngrediente('queso', lista)).toBeFalse();
        });

        it('solo permite "salsa" como segundo ingrediente', () => {
            const lista = ['masa'];
            expect(permitirIngrediente('salsa', lista)).toBeTrue();
            expect(permitirIngrediente('queso', lista)).toBeFalse();
            expect(permitirIngrediente('masa', lista)).toBeFalse();
        });

        it('solo permite "queso" como tercer ingrediente', () => {
            const lista = ['masa', 'salsa'];
            expect(permitirIngrediente('queso', lista)).toBeTrue();
            expect(permitirIngrediente('aceituna', lista)).toBeFalse();
        });

        it('a partir del cuarto ítem permite cualquier ingrediente', () => {
            const lista = ['masa', 'salsa', 'queso'];
            expect(permitirIngrediente('aceituna', lista)).toBeTrue();
            expect(permitirIngrediente('albahaca', lista)).toBeTrue();
            expect(permitirIngrediente('tomate', lista)).toBeTrue();
        });
    });

    describe('seleccionarIngrediente()', () => {
        const mockElemento = (name) => ({ getAttribute: () => name });

        it('agrega masa, salsa y queso en orden y actualiza contadores', () => {
            seleccionarIngrediente(mockElemento('masa'), pedido.lista, pedido);
            seleccionarIngrediente(mockElemento('salsa'), pedido.lista, pedido);
            seleccionarIngrediente(mockElemento('queso'), pedido.lista, pedido);

            expect(pedido.lista).toEqual(['masa', 'salsa', 'queso']);
            expect(pedido.masa).toBe(1);
            expect(pedido.salsa).toBe(1);
            expect(pedido.queso).toBe(1);
        });

        it('rechaza ingredientes fuera de orden', () => {
            spyOn(console, 'log');
            seleccionarIngrediente(mockElemento('queso'), pedido.lista, pedido);

            expect(pedido.lista.length).toBe(0);
            expect(pedido.queso).toBe(0);
            expect(console.log).toHaveBeenCalledWith('No se puede agregar', 'queso', 'aun.');
        });

        it('permite cualquier ingrediente a partir del 4to', () => {
            seleccionarIngrediente(mockElemento('masa'), pedido.lista, pedido);
            seleccionarIngrediente(mockElemento('salsa'), pedido.lista, pedido);
            seleccionarIngrediente(mockElemento('queso'), pedido.lista, pedido);
            seleccionarIngrediente(mockElemento('aceituna'), pedido.lista, pedido);

            expect(pedido.lista).toEqual(['masa', 'salsa', 'queso', 'aceituna']);
            expect(pedido.aceituna).toBe(1);
        });
    });

    describe('limpiarListaDePedidos()', () => {
        it('resetea todos los contadores y vacía la lista', () => {
            // Estado con datos
            pedido.masa = 2;
            pedido.salsa = 1;
            pedido.queso = 3;
            pedido.aceituna = 1;
            pedido.albahaca = 5;
            pedido.tomate = 2;
            pedido.lista.push('masa', 'salsa', 'queso', 'tomate');

            limpiarListaDePedidos(pedido);

            expect(pedido.masa).toBe(0);
            expect(pedido.salsa).toBe(0);
            expect(pedido.queso).toBe(0);
            expect(pedido.aceituna).toBe(0);
            expect(pedido.albahaca).toBe(0);
            expect(pedido.tomate).toBe(0);
            expect(pedido.lista).toEqual([]);
        });
    });
});
