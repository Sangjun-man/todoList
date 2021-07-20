import React, { useRef } from "react";
import Login from "../components/Login";
import { login } from "../api/auth";
import { useHistory } from "react-router";

const LoginContainer = (props) => {
  const history = useHistory();

  const onLogin = ({ username, password }) => {
    login({ username, password }).then(() => history.push("/todolist"));
  };

  return <Login onLogin={onLogin} />;
};

export default LoginContainer;
