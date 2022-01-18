const { capitalize, reverseString } = require('./testing-practice.js');

// A capitalize function that takes a string and returns it with the first character capitalized.
test("banana returns Banana", ()=> {
    expect(capitalize("banana")).toBe("Banana");
});

test("b returns B",() => {
    expect(capitalize("b")).toBe("B");
});

test("banana cat returns Banana cat",() => {
    expect(capitalize("banana cat")).toBe("Banana cat");
});

test("'1' returns '1'",() => {
    expect(capitalize("1")).toBe("1");
});

test("space returns space",() => {
    expect(capitalize(" ")).toBe(" ");
});

test("empty string returns empty string",() => {
    expect(capitalize("")).toBe("");
});

test("null and undefined returns null and undefined",() => {
    expect(capitalize(null)).toBe(null);
    expect(capitalize(undefined)).toBe(undefined);
});

// A reverseString function that takes a string and returns it reversed
test("'a' returns 'a'", () => {
    expect(reverseString("a")).toBe("a");
});

test("'ab' returns 'ba'", () => {
    expect(reverseString("ab")).toBe("ba");
});

test("'banana' returns 'ananab'", () => {
    expect(reverseString("banana")).toBe("ananab");
});

test("'one two three' returns 'eerht owt eno'", () => {
    expect(reverseString("one two three")).toBe("eerht owt eno");
});

test("'anita lava la tina' returns 'anit al aval atina'", () => {
    expect(reverseString("anita lava la tina")).toBe("anit al aval atina");
});
