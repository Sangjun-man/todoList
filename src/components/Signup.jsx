import React, { useRef } from "react";
import { useHistory } from "react-router";
import styles from "./Signup.module.css";

const { container, textForm, textField, signupButton } = styles;
const Signup = ({ onSignup }) => {
  const username = useRef();
  const password = useRef();

  const handleSignup = () => {
    onSignup({
      username: username.current.value,
      password: password.current.value,
    });
  };
  const onKeyPress = (e) => {
    if (e.key == "Enter") {
      handleSignup();
    }
  };

  return (
    <div className={container}>
      <div className={textForm}>
        <h1>Sign Up</h1>
        <div className={textField}>
          <div>
            <p> Id :</p>
            <input ref={username} type="text" id="id" />
          </div>
          <div>
            <p> Password :</p>
            <input
              ref={password}
              type="password"
              id="password"
              onKeyPress={onKeyPress}
            />
          </div>
          {/* <div>
            <p> Nickname :</p>
            <input id="nickname" />
          </div>
          <div>
            <p> Email :</p>
            <input id="email" />
            @
            <input id="domain" />
          </div> */}
        </div>

        <button onClick={handleSignup} className={signupButton} id="submit">
          가입하기{" "}
        </button>
      </div>
    </div>
  );
};

export default Signup;
