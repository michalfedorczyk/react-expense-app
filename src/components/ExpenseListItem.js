import React from "react";
import { connect } from "react-redux";
import { removeExpense } from "../actions/expenses";

const ExpenseListItem = ({
  dispatch,
  id,
  description,
  note,
  amount,
  createdAt,
}) => (
  <div>
    <h3>Description: {description}</h3>
    <p>Note: {note}</p>
    <p>
      Amount: {amount} - created at: {createdAt}
    </p>
    <button
      onClick={() => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove expense
    </button>
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(ExpenseListItem);
