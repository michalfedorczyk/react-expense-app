import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const store = configureStore();

store.dispatch(addExpense({ description: "Water bill", amount: 500 }));
store.dispatch(
  addExpense({ description: "Rent", amount: 1, createdAt: 4545646646 })
);
store.dispatch(
  addExpense({ description: "Gas bill", amount: 0, createdAt: 1564165 })
);

const state = store.getState();
const visibleExpanses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpanses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
