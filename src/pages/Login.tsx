import React, { useState } from "react";
import { useLoginMutation } from "../redux/api/apiSlice";

import { useNavigate } from "react-router-dom"; 
import { useAppDispatch } from "../redux/hook";
import { loginSuccess } from "../redux/features/authSlice";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading, isError, error }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    login({ email, password })
      .unwrap()
      .then((data) => {
        dispatch(loginSuccess(data.user));
        localStorage.setItem("token", data.token);
        sessionStorage.setItem("token", data.token);
        alert("Login successful!");
        navigate("/"); 
      })
      .catch((error) => {
        console.error("Error logging in:", error);
      });
  };

  return (
    <div className="form-control items-center">
      <h1 className="font-bold text-xl">Login</h1>
      {isError && <p>Error: {error?.toString()}</p>}
      <form>
        <div>
          <label className="font-bold text-lg">Email:</label>
          <br />
          <input
            className="input input-bordered input-secondary bg-white w-96 max-w-xs my-4"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label className="font-bold text-lg">Password:</label>
          <br />
          <input
            className="input input-bordered input-secondary bg-white w-full max-w-xs my-4"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="btn btn-primary mx-auto mb-20"
          type="button"
          onClick={handleLogin}
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
