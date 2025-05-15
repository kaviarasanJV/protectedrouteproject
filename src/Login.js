import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
///username, pwd ,Login btn //post api call
export default function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const navigate = useNavigate();
  useEffect(() => {}, []);
  const usernameHandler = (e) => {
    e.preventDefault();
    setUsername(e.target.value);
  };
  const pwdHandler = (e) => {
    e.preventDefault();
    setPwd(e.target.value);
  };
  const loginHandler = () => {
    let dataObj = {
      userName: `${username}`,
      userPassword: `${pwd}`,
    };
    if (username === "kavi" && pwd === "123") {
      onLoginSuccess(username);
      navigate("/dashboard");
    }

    // axios
    //   .post("https://dummyjson.com/", dataObj)
    //   .then((response) => {
    //     if (response.status === "200") {
    //       console.log("Successfully posted the login data");
    //     } else if (response.status === "404") {
    //       console.log("failure in posting the login data");
    //     }
    //   })
    //   .catch((err) => console.log(err));
    setUsername("");
    setPwd("");
  };
  return (
    <>
      <div>
        <input
          type="text"
          placeholder="enter username"
          value={username}
          onChange={(e) => usernameHandler(e)}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="enter password"
          value={pwd}
          onChange={(e) => pwdHandler(e)}
        />
      </div>
      <button onClick={loginHandler}> LOGIN </button>
    </>
  );
}
