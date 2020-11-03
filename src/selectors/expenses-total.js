import moment from "moment";

export default (expenses) => {
  return expenses
    .map((expense) => expense.amount / 100)
    .reduce((prev, curr) => prev + curr, 0);
};
