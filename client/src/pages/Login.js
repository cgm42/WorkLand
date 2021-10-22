import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { BsGithub } from "react-icons/bs";

const Login = () => {
  const userState = useSelector((state) => {
    return state.user;
  });
  console.log(process.env);
  return (
    <div className="app">
      {userState.name !== "" ? (
        <div></div>
      ) : (
        <div>
          <BsGithub />
          <a href={process.env.REACT_APP_GITHUB_LOGIN}>
            {" Log in with Github"}
          </a>
        </div>
      )}

      {userState.name !== "" ? <a href="/logout">logout</a> : <div> </div>}
    </div>
  );
};

export default Login;
