import React, { useRef } from "react";
import { useHistory } from "react-router";
import styles from "./Login.module.css";

const { container, backgroundImg, loginForm, textField, loginButton } = styles;

const onClick = () => {
  console.log("sign up");
};
const Login = ({ onLogin }) => {
  const history = useHistory();
  const username = useRef();
  const password = useRef();
  const onClick = () => {
    history.push("/signup");
  };
  const handleLogin = () => {
    onLogin({
      username: username.current.value,
      password: password.current.value,
    });
  };
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      handleLogin();
    }
  };

  //view에는 view에 관련된 코드만 있어야 한다!
  return (
    <div className={container}>
      <div className={backgroundImg}> </div>
      <div className={loginForm}>
        <div className={textField}>
          <p>ID : </p>
          <input ref={username} type="text" />
        </div>
        <div className={textField}>
          <p>PW : </p>
          <input ref={password} type="password" onKeyPress={onKeyPress} />
        </div>
        <div>
          <button className={loginButton} onClick={onClick}>
            Sign Up!
          </button>
          <button className={loginButton} onClick={handleLogin}>
            LOGIN
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
