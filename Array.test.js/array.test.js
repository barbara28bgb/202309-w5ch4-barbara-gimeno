import numbers from "../index.js";

describe("Given the array numbers ", () => {
  describe("When it uses property length", () => {
    test("Then it shoyuld return 4", () => {
      const expectedResult = 4;

      const numberLength = numbers.length;

      expect(numberLength).toBe(expectedResult);
    });
  });
});
