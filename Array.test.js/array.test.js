import numbers from "../index.js";

describe("Given the array numbers ", () => {
  describe("When it uses property length", () => {
    test("Then it shoyuld return 4", () => {
      const expectedResult = 4;

      const numberLength = numbers.length;

      expect(numberLength).toBe(expectedResult);
    });
  });

  describe("When it use method push and receive 6", () => {
    test("Then it should return [3, 8, 10, 2, 6]", () => {
      const pushResult = [3, 8, 10, 2, 6];

      const numbersPush = numbers.push(6);
      // Console.log(numbersPush);

      expect(numbersPush).toStrictEqual(pushResult);
    });
  });
});
