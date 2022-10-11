import React, { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";

const ForgotPasswordForm = () => {
  const { resetPassword } = useAuth();

  const [email, setemail] = useState("");
  const [error, setError] = useState("");

  const forgotPasswordHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await resetPassword(email);
      setemail("");
    } catch (err) {
      setError(err.code);
    }
  };

  return (
    <div className="flex w-screen h-screen bg-primary justify-center items-center">
      <form
        onSubmit={forgotPasswordHandler}
        className="w-[500px] rounded-3xl bg-text py-16 px-14"
      >
        <h1 className="text-4xl mb-4 font-bold text-center text-secondary">
          Forgot Password?
        </h1>
        <p className="text-error text-lg my-2 text-center">{error}</p>
        <label className="text-sm font-medium my-2">Email</label>
        <div className="flex items-center border-b text-secondary border-[#8f8f8f]">
          <FontAwesomeIcon className="my-2 ml-1 mr-2 text-xl" icon={faAt} />
          <input
            className="flex flex-1 outline-none"
            required
            value={email}
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="Type your email"
          />
        </div>
        <p className="text-base text-secondary my-2">
          Enter your email and in some seconds the password reseting link will
          be sent to your email. Make sure to change it in 48 hours. The link
          won't be available later.
        </p>
        <button
          className="bg-primary py-4 mt-4 w-full text-lg uppercase transition-all duration-300 hover:bg-shadowHard rounded-full"
          type="submit"
        >
          Forgot Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;
