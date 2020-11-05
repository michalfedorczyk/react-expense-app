import React from "react";
import { shallow } from "enzyme";
import { EditExpense } from "../../components/EditExpense";
import expenses from "../fixtures/expenses";

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(() => {
  startEditExpense = jest.fn();
  startRemoveExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpense
      startEditExpense={startEditExpense}
      startRemoveExpense={startRemoveExpense}
      history={history}
      expense={expenses[2]}
    />
  );
});

test("should render the edit expense correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle edit expense", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[2]);
  expect(history.push).toHaveBeenLastCalledWith("/dashboard");
  expect(startEditExpense).toHaveBeenLastCalledWith(
    expenses[2].id,
    expenses[2]
  );
});

test("should handle delete expense", () => {
  wrapper.find("button").simulate("click");
  expect(history.push).toHaveBeenLastCalledWith("/dashboard");
  expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[2].id });
});
