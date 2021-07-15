import React from "react";
import { useHistory } from "react-router";
import styles from "./Login.module.css";

const { container, backgroundImg, loginForm, textField, loginButton } = styles;
const Login = (props) => {
  const history = useHistory();
  const onClick = (id) => {
    history.push(`/${id}`);
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
        <div>
          <button
            className={loginButton}
            onClick={() => {
              onClick("signup");
            }}
          >
            Sign Up!
          </button>
          <button className={loginButton} onClick={() => onClick("todolist")}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
