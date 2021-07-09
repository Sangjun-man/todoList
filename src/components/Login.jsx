import React from "react";
import { useHistory } from "react-router";
import styles from "./Login.module.css";

const { container, backgroundImg, loginForm, textField, loginButton } = styles;
const Login = (props) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/todolist");
  };

  return (
    <div className={container}>
      <div className={backgroundImg}> </div>
      <div className={loginForm}>
        <div className={textField}>
          <p>ID : </p>
          <input />
        </div>
        <div className={textField}>
          <p>PW : </p>
          <input />
        </div>
        <button id={loginButton} onClick={onClick}>
          LOGIN
        </button>
      </div>
    </div>
  );
};

export default Login;
