import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
      <h1 className="box-layout__title">
        <i class="fas fa-money-bill-alt"> </i> Expenses
      </h1>
      <p>Start to manage your expenses.</p>
      <button className="button" onClick={startLogin}>
        <i className="fab fa-google"></i> Login with Google
      </button>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
