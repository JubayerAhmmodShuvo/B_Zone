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
    <div className="mx-auto  my-8 card w-96 bg-white shadow-xl">
      <form onSubmit={handleSubmit} className="form-control my-8 items-center">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered input-secondary w-full max-w-xs my-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered input-secondary w-full max-w-xs my-4"
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="input input-bordered input-secondary w-full my-4 max-w-xs"
        />
        <button className="btn btn-primary mb-12" type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
