import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>Description: {description}</h3>
    </Link>
    <p>Note: {note}</p>
    <p>
      Amount: {amount} - created at: {createdAt}
    </p>
  </div>
);

export default ExpenseListItem;
