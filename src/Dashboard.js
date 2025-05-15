import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
export default function Dashboard({ username, onLogout }) {
  const navigate = useNavigate();

  const logoutHandler = () => {
    onLogout(); // clear authentication state and username
    navigate("/"); // redirect to the login page
  };
  return (
    <>
      {" "}
      <div className="App">Welcome to Dashboard {username}</div>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
}
