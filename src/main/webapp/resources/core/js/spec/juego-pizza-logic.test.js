describe("Sistema de pedido de pizzas", () => {
    it("debe agregar una masa al pedido", () => {
        const pedido = { masas: 0, lista: [] };
        pedido.masas++;
        pedido.lista.push("masa");

        expect(pedido.masas).toBe(1);
        expect(pedido.lista).toContain("masa");
    });
});

