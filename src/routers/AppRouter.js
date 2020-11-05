import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import ExpensePage from "../components/ExpensePage";
import CreateExpense from "../components/CreateExpense";
import EditExpense from "../components/EditExpense";
import HelpExpense from "../components/HelpExpense";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/LoginPage";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpensePage} />
        <PrivateRoute path="/create" component={CreateExpense} />
        <PrivateRoute path="/edit/:id" component={EditExpense} />
        <PrivateRoute path="/help" component={HelpExpense} />
        <PrivateRoute component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
