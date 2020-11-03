import React from "react";
import { connect } from "react-redux";
import selectTotalExpenses from "../selectors/expenses-total";
import selectExpenses from "../selectors/expenses";
import numeral from "numeral";

export const ExpensesTotal = ({ expenseCount, expensesTotal }) => {
  const expenseWord = expenseCount === 1 ? "expense" : "expenses";
  const formattedExpensesTotal = numeral(expensesTotal).format("$0,0.00");
  return (
    <div>
      <h4>
        Viewing {expenseCount} {expenseWord} totalling {formattedExpensesTotal}.
      </h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: visibleExpenses.length,
    expensesTotal: selectTotalExpenses(visibleExpenses),
  };
};

export default connect(mapStateToProps)(ExpensesTotal);
