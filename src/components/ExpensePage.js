import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesTotal from "./ExpensesTotal";

const ExpensePage = () => (
  <div>
    <ExpensesTotal />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpensePage;
