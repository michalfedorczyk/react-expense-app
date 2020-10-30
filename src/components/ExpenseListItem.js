import React from "react";

const ExpenseListItem = ({ description, note, amount, createdAt }) => (
  <div>
    <h3>Description: {description}</h3>
    <p>Note: {note}</p>
    <p>
      Amount: {amount} - created at: {createdAt}
    </p>
  </div>
);
export default ExpenseListItem;
