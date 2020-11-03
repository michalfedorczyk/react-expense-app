import React from "react";
import { shallow } from "enzyme";
import { ExpensesTotal } from "../../components/ExpensesTotal";
import expenses from "../fixtures/expenses";

test("should correctly render Expenses Test with 1 expanse", () => {
  const wrapper = shallow(
    <ExpensesTotal expenseCount={1} expensesTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should correctly render Expenses Test with multiple expanses", () => {
  const wrapper = shallow(
    <ExpensesTotal expenseCount={3} expensesTotal={500} />
  );
  expect(wrapper).toMatchSnapshot();
});
