import React from "react";
import { useHistory } from "react-router";
import { register } from "../api/auth";
import Signup from "../components/Signup";

const SignupContainer = (props) => {
  const history = useHistory();
  const onSignup = ({ username, password }) => {
    console.log("signup");
    register({ username, password }).then(() => {
      history.push("/todolist");
    });
  };

  return <Signup onSignup={onSignup} />;
};

export default SignupContainer;
