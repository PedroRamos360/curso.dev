const calculadora = require("../../models/calculadora");

test("2 + 2 = 4", () => {
  expect(calculadora.somar(2, 2)).toBe(4);
});

test("100 + 5", () => {
  expect(calculadora.somar(100, 5)).toBe(105);
});
