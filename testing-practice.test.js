const {capitalize} = require('./testing-practice.js');

// A capitalize function that takes a string and returns it with the first character capitalized.
test("banana becomes Banana", ()=> {
  expect(capitalize("banana")).toBe("Banana");
  expect(capitalize("b")).toBe("B");
  expect(capitalize("banana cat")).toBe("Banana cat");
  expect(capitalize("1")).toBe("1");
  expect(capitalize(" ")).toBe(" ");
  expect(capitalize("")).toBe("");
  expect(capitalize(null)).toBe(null);
  expect(capitalize(undefined)).toBe(undefined);    
});
