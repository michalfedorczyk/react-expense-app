import React from "react";
import { shallow } from "enzyme";
import { CreateExpense } from "../../components/CreateExpense";
import expenses from "../fixtures/expenses";

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };

  wrapper = shallow(
    <CreateExpense startAddExpense={startAddExpense} history={history} />
  );
});

test("should render the create expense page correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle on submit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(startAddExpense).toHaveBeenLastCalledWith(expenses[0]);
});
