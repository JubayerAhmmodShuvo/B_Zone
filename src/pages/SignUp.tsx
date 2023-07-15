import React, { useState } from "react";
import { useSignupMutation } from "../redux/api/apiSlice";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [signup, { isLoading }] = useSignupMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match");
      return;
    }

    try {
      await signup({ email, password });
      alert(`Account created for ${email}`);
     
    } catch (error) {
      setErrorMessage("Error occurred during signup");
    }
  };

  return (
    <div className="mx-auto my-8 card w-96 bg-white shadow-xl">
      <form onSubmit={handleSubmit} className="form-control my-8 items-center">
        <input
          type="email"
          placeholder="Email"
          className="input input-bordered input-secondary w-full max-w-xs my-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered input-secondary w-full max-w-xs my-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm password"
          className="input input-bordered input-secondary w-full my-4 max-w-xs"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {errorMessage && <p className="text-red-500 mb-4">{errorMessage}</p>}
        <button
          className="btn btn-primary mb-12"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? "Signing up..." : "Sign up"}
        </button>
      </form>
    </div>
  );
};

export default SignUp;
