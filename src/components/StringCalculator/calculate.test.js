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
