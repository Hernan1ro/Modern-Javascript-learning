/**
 * @jest-environment jsdom
 */
import { suma } from "../js/funciones.js";

describe("suma", () => {
  test("suma 2 numeros", () => {
    expect(suma(10, 5)).toBe(15);
  });
});
