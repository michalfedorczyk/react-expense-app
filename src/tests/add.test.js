const add = (a, b) => a + b;

test("should add two numbers", () => {
  const result = add(5, 3);
  expect(result).toBe(8);
});

const generateGreeting = (name) => `Hello ${name}`;

test("should generate greeting with correct name", () => {
  const name = generateGreeting("Pies");
  expect(name).toBe("Hello Pies");
});
