import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense, removeExpense, editExpense } from "./actions/expenses";
import {
  setTextFilter,
  sortByAmount,
  sortByDate,
  setStartDate,
  setEndDate,
} from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 500 }));
store.dispatch(addExpense({ description: "Gas bill", amount: 1500 }));
store.dispatch(setTextFilter("bill"));

const state = store.getState();
const visibleExpanses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpanses);

ReactDOM.render(<AppRouter />, document.getElementById("app"));
