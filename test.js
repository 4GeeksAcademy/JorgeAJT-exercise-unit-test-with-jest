test("1 euro should be 1.07 dollars", function() {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expectedDollars = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(dollars).toBe(expectedDollars); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})

test("1 dollar should be approximately 146.26 yens", function() {
    // Importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js');

    const yens = fromDollarToYen(12);

    const expectedYens = 12 * 146.2616822429907;

    // Hago mi comparación (la prueba) usando .toBeCloseTo(expected, precision) para redondear decimales
    // Con .toBe da error porque tiene en cuenta todos los decimales
    expect(yens).toBeCloseTo(expectedYens, 2); // 1 dollar son 146.26 yens, entonces 12 dollars deberían ser = (12 * 146.26)
})

test("1 yen should be approximately 0.005559 pounds", function() {
    // Importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js');

    const pounds = fromYenToPound(1500);

    const expectedPounds = 1500 * 0.0055591054313099;

    // Hago mi comparación (la prueba) usando .toBeCloseTo(expected, precision) para redondear decimales
    // Con .toBe da error porque tiene en cuenta todos los decimales
    expect(pounds).toBeCloseTo(expectedPounds, 2); // 1 yen son 0.005559 pounds, entonces 1500 yens deberían ser = (1500 * 0.005559)
})