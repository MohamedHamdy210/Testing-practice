const capitalize = require("./capitalize");
const reverse = require("./reverse");
const cal = require("./cal");
const cipher = require("./cipher");
const analyze = require("./analyze");

const ob1 = new cal(10, 5);

test("capitalize add ", () => {
  expect(capitalize("add")).toBe("Add");
});
test("capitalize mohamed ", () => {
  expect(capitalize("mohamed")).toBe("Mohamed");
});
test("capitalize hamdy ", () => {
  expect(capitalize("hamdy")).toBe("Hamdy");
});

test("reverse add ", () => {
  expect(reverse("add")).toBe("dda");
});
test("reverse mohamed ", () => {
  expect(reverse("mohamed")).toBe("demahom");
});
test("reverse hamdy ", () => {
  expect(reverse("hamdy")).toBe("ydmah");
});
test("add 10+5", () => {
  expect(ob1.add()).toBe(15);
});
test("sub 10-5", () => {
  expect(ob1.sub()).toBe(5);
});
test("by 10*5", () => {
  expect(ob1.by()).toBe(50);
});
test("divide 10/5", () => {
  expect(ob1.divide()).toEqual(2);
});
test("cipher xyz", () => {
  expect(cipher("xyz", 3)).toBe("abc");
});
test("cipher hello", () => {
  expect(cipher("hello", 3)).toEqual("khoor");
});
test("analyze [1,8,3,4,2,6]", () => {
  expect(analyze([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
