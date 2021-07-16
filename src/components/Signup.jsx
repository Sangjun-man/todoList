import React from "react";
import { useHistory } from "react-router";
import styles from "./Signup.module.css";

const Signup = (props) => {
  const history = useHistory();
  const onClick = () => {
    history.push("/");
  };

  const { container, textForm, textField, signupButton } = styles;
  return (
    <div className={container}>
      <div className={textForm}>
        <h1>Sign Up</h1>
        <div className={textField}>
          <div>
            <p> Id :</p>
            <input id="id" />
          </div>
          <div>
            <p> Password :</p>
            <input id="password" />
          </div>
          <div>
            <p> Nickname :</p>
            <input id="nickname" />
          </div>
          <div>
            <p> Email :</p>
            <input id="email" />
            @
            <input id="domain" />
          </div>
        </div>

        <button
          onClick={() => {
            onClick();
          }}
          className={signupButton}
          id="submit"
        >
          가입하기{" "}
        </button>
      </div>
    </div>
  );
};

export default Signup;
