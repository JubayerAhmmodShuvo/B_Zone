import React from "react";
import { useSignupMutation } from "../redux/api/apiSlice";

const SignUp = () => {
  const signup = useSignupMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password, confirmPassword } = e.target.elements;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    signup({ email, password });
  };

  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm password" />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUp;
