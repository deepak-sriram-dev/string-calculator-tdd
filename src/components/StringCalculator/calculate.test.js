import { add } from "./calculate";

test("empty string returns 0", () => {
  expect(add("")).toBe(0);
});

test("single number returns itself", () => {
  expect(add("1")).toBe(1);
});

test("multiple numbers separated by commas returns sum", () => {
  expect(add("1,2,3")).toBe(6);
});

test("numbers separated by newlines returns sum", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("custom delimiter returns sum", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("negative numbers throw an exception", () => {
  expect(() => add("-1,2")).toThrowError("negative numbers not allowed: -1");
});

test("multiple negative numbers throw an exception with all negatives", () => {
  expect(() => add("-1,-2,3")).toThrowError(
    "negative numbers not allowed: -1, -2"
  );
});
