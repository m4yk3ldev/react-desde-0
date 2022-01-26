describe("Demo", () => {
  test("Debe ser iguales los string", () => {
    // 1. Inicializa
    const mesaje = "Hola mundo";

    // 2. Estimulo
    const mesajes2 = `Hola mundo`;

    // 3. Observar el comportamiento
    expect(mesaje).toBe(mesajes2);
  });
});
