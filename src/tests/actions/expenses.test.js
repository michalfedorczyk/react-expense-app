import {
  startAddExpense,
  editExpense,
  removeExpense,
  addExpense,
} from "../../actions/expenses";
import expenses from "../fixtures/expenses";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const createMockStore = configureMockStore([thunk]);

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc",
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("123abc", {
    description: "123456767",
    note: "Pies jamnik",
  });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      description: "123456767",
      note: "Pies jamnik",
    },
  });
});

test("should setup default add expense action object", () => {
  const action = addExpense(expenses[0]);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[0],
  });
});

test("should add expense to database and store", (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: "Mous",
    amount: 30000,
    note: "This is good mouse",
    createdAt: 123,
  };
  store.dispatch(startAddExpense(expenseData)).then(() => {
    expect(1).toBe(2);
    done();
  });
});

test("should add expense with defaults to database and store", () => {});
