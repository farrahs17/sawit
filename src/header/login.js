import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function LoginContainer() {
  return (
    <div className="button-container">
      <Link to="/login">
        <button>Log In</button>
      </Link>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
}

export default LoginContainer;
