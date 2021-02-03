import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button";
import { auth, provider } from "../../firebase.js";
import { useStatValue } from "../../StateProvider";
import { actionTypes } from "../../Reducer";
function Login() {
  const[state,dispatch]=useStatValue()
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type:actionTypes.SET_USER,
          user:result.user,
        })
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ_q2wW9PH3NBWsGyG9LKiqZdkCwD7cUleWA&usqp=CAU"
          alt=""
        />
        <h1>Sign in to product engineering</h1>
        <p>sagar.mounika.slack</p>
        <Button onClick={signIn}>Login with Google</Button>
      </div>
    </div>
  );
}

export default Login;
