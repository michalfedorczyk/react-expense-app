import selectTotalExpenses from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should sum the array of expanses", () => {
  const result = selectTotalExpenses(expenses);
  expect(result).toEqual(
    (expenses[0].amount + expenses[1].amount + expenses[2].amount) / 100
  );
});

test("should return zero if no expanses", () => {
  const result = selectTotalExpenses([]);
  expect(result).toEqual(0);
});

test("should add up correctly one expense", () => {
  const result = selectTotalExpenses([{ ...expenses[0] }]);
  expect(result).toEqual(expenses[0].amount / 100);
});
