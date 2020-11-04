import expensesReducer from "../../reducers/expenses";
import moment from "moment";
import expenses from "../fixtures/expenses";

test("should setup default expenses reducer values", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should add expense", () => {
  const expense = {
    id: "4",
    description: "Gumka",
    note: "Pies Gumka",
    amount: 1231212,
    createdAt: moment(0).add(1, "year").valueOf(),
  };
  const action = { type: "ADD_EXPENSE", expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("should remove expense", () => {
  const action = { type: "REMOVE_EXPENSE", id: expenses[0].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1], expenses[2]]);
});

test("should not remove expense if the id doesnt exist", () => {
  const action = { type: "REMOVE_EXPENSE", id: "-111" };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should edit expense", () => {
  const updates = {
    description: "New description for id 1",
  };
  const action = { type: "EDIT_EXPENSE", id: expenses[0].id, updates };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([
    {
      id: "1",
      description: updates.description,
      note: "Pies Gum",
      amount: 123,
      createdAt: 0,
    },
    expenses[1],
    expenses[2],
  ]);
});

test("should not edit expense if it doesnt exist", () => {
  const updates = {
    description: "New description",
  };
  const action = { type: "EDIT_EXPENSE", id: "-111", updates };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should set expenses", () => {
  const action = { type: "SET_EXPENSES", expenses: [expenses[0]] };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0]]);
});
