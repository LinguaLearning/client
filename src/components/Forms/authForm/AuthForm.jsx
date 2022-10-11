import React, { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../Firebase";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import {
  faUser,
  faKey,
  faEnvelope,
  faPhone,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import Facebook from "../../../assets/facebook-icon-preview.png";
import Instagram from "../../../assets/instagram.png";
import Twitter from "../../../assets/twitter.png";
import { useAuth } from "../../../context/AuthContext";
import { useEffect } from "react";

const AuthForm = ({ formType }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState(new Date());

  const { login, signup, currentUser } = useAuth();
  const [formTypeState, setFormTypeState] = useState(formType);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/dashboard/learning");
    } catch {
      console.log("Failed to log in");
      setError("Failed to log in");
    }

    setLoading(false);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== passwordConfirmation) {
      console.log("Passwords do not match");
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password);
      await setDoc(doc(db, "users", auth.currentUser.uid), {
        username: username,
        birthDate: birthDate,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        profileInfo: {
          bio: "",
          achievments: [],
          interests: [],
          languages: [],
        },
      });
      navigate("/dashboard/learning");
    } catch (error) {
      console.log(error);
      setError("Failed to create an account");
    }

    setLoading(false);
  };

  useEffect(() => {
    currentUser && navigate("/dashboard/learning");
  }, [formTypeState, currentUser, navigate]);

  if (formTypeState === "login") {
    return (
      <div className="flex w-screen h-screen bg-primary justify-center items-center">
        <form
          onSubmit={handleLogin}
          className="w-[500px] rounded-3xl bg-text py-16 px-14"
        >
          <h1 className="text-4xl mb-4 font-bold text-center text-secondary">
            Login
          </h1>
          <p className="text-error text-lg my-2 text-center">{error}</p>

          <label className="text-sm font-medium my-2">Email</label>
          <div className="flex items-center border-b text-secondary border-[#8f8f8f] mb-5">
            <FontAwesomeIcon
              className="my-3 ml-1 mr-3.5 text-xl"
              icon={faUser}
            />
            <input
              className="flex flex-1 outline-none text-base"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Type your email"
            />
          </div>

          <label className="text-sm font-medium my-2">Password</label>
          <div className="flex items-center border-b text-secondary border-[#8f8f8f] mb-5">
            <FontAwesomeIcon
              className="my-3 ml-1 mr-3.5 text-xl"
              icon={faKey}
            />
            <input
              className="flex flex-1 outline-none text-base"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Type your password"
            />
          </div>

          <Link
            className="text-right text-sm text-secondary"
            to="/forgotPassword"
          >
            <p className="text-right text-sm text-secondary">
              Forgot password?
            </p>
          </Link>

          <button
            className="bg-primary text-text font-bold py-4 mt-6 w-full text-lg uppercase transition-all duration-300 hover:bg-shadowHard rounded-full"
            type="submit"
            disabled={loading}
          >
            Login
          </button>

          <p className=" text-base text-secondary mt-4 text-center">
            Or Sign In Using
          </p>
          <div className="flex justify-center items-center">
            <Link
              className="transition-all duration-300 hover:scale-110"
              to="www.facebook.com"
            >
              <img alt="" className="w-14 aspect-square m-1" src={Facebook} />
            </Link>

            <Link
              className="transition-all duration-300 hover:scale-110"
              to="www.instagram.com"
            >
              <img alt="" className="w-10 aspect-square m-1" src={Instagram} />
            </Link>

            <Link
              className="transition-all duration-300 hover:scale-110"
              to="www.twitter.com"
            >
              <img alt="" className="w-11 aspect-square m-2.5" src={Twitter} />
            </Link>
          </div>
          <p className="text-[15px] text-secondary pb-2.5 text-center">
            If you do not have an account yet
          </p>
          <Link to="/signup">
            <p className="text-center font-semibold text-[15px] text-secondary">
              Sign Up
            </p>
          </Link>
        </form>
      </div>
    );
  } else if (formTypeState === "signup") {
    return (
      <div className="flex w-screen h-screen bg-primary justify-center items-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setFormTypeState("signUpExtra");
          }}
          className="w-[500px] rounded-3xl bg-text py-10 px-14"
        >
          <h1 className="text-4xl mb-4 font-bold text-center text-secondary">
            Signup
          </h1>
          <p className="text-error text-lg my-2 text-center">{error}</p>

          <label className="text-sm font-medium my-2">Username</label>
          <div className="flex items-center border-b text-secondary border-[#8f8f8f] mb-5">
            <FontAwesomeIcon
              className="my-3 ml-1 mr-3.5 text-xl"
              icon={faUser}
            />
            <input
              className="flex flex-1 outline-none text-base"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Type your username"
            />
          </div>

          <label className="text-sm font-medium my-2">Email</label>
          <div className="flex items-center border-b text-secondary border-[#8f8f8f] mb-5">
            <FontAwesomeIcon
              className="my-3 ml-1 mr-3.5 text-xl"
              icon={faEnvelope}
            />
            <input
              className="flex flex-1 outline-none text-base"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Type your email"
            />
          </div>

          <label className="text-sm font-medium my-2">Password</label>
          <div className="flex items-center border-b text-secondary border-[#8f8f8f] mb-5">
            <FontAwesomeIcon
              className="my-3 ml-1 mr-3.5 text-xl"
              icon={faKey}
            />
            <input
              className="flex flex-1 outline-none text-base"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Type your password"
            />
          </div>

          <label className="text-sm font-medium my-2">Confirm Password</label>
          <div className="flex items-center border-b text-secondary border-[#8f8f8f] mb-5">
            <FontAwesomeIcon
              className="my-3 ml-1 mr-3.5 text-xl"
              icon={faKey}
            />
            <input
              className="flex flex-1 outline-none text-base"
              required
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <button
            className="bg-primary text-text font-bold py-4 mt-1 w-full text-lg uppercase transition-all duration-300 hover:bg-shadowHard rounded-full"
            type="submit"
            disabled={loading}
          >
            Sign Up
          </button>

          <p className=" text-base text-secondary mt-4 text-center">
            Or Sign Up Using
          </p>

          <div className="flex justify-center items-center">
            <Link
              className="transition-all duration-300 hover:scale-110"
              to="www.facebook.com"
            >
              <img alt="" className="w-14 aspect-square m-1" src={Facebook} />
            </Link>

            <Link
              className="transition-all duration-300 hover:scale-110"
              to="www.instagram.com"
            >
              <img alt="" className="w-10 aspect-square m-1" src={Instagram} />
            </Link>

            <Link
              className="transition-all duration-300 hover:scale-110"
              to="www.twitter.com"
            >
              <img alt="" className="w-11 aspect-square m-2.5" src={Twitter} />
            </Link>
          </div>
          <p className="text-[15px] text-secondary pb-2.5 text-center">
            If you have an account
          </p>
          <Link to="/login">
            <p className="text-center font-semibold text-[15px] text-secondary">
              Login
            </p>
          </Link>
        </form>
      </div>
    );
  } else if (formTypeState === "signUpExtra") {
    return (
      <div className="flex w-screen h-screen bg-primary justify-center items-center">
        <form
          onSubmit={handleSignUp}
          className="w-[500px] rounded-3xl bg-text py-16 px-14"
        >
          <h1 className="text-4xl mb-4 font-bold text-center text-secondary">
            Signup
          </h1>
          <p className="text-error text-lg my-2 text-center">{error}</p>

          <label className="text-sm font-medium my-2">First Name</label>
          <div className="flex items-center border-b text-secondary border-[#8f8f8f] mb-5">
            <FontAwesomeIcon
              className="my-3 ml-1 mr-3.5 text-xl"
              icon={faUser}
            />
            <input
              className="flex flex-1 outline-none text-base"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              placeholder="Type First Name"
            />
          </div>

          <label className="text-sm font-medium my-2">Surname</label>
          <div className="flex items-center border-b text-secondary border-[#8f8f8f] mb-5">
            <FontAwesomeIcon
              className="my-3 ml-1 mr-3.5 text-xl"
              icon={faUser}
            />
            <input
              className="flex flex-1 outline-none text-base"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              placeholder="Type Surname"
            />
          </div>

          <label className="text-sm font-medium my-2">Phone Number</label>
          <div className="flex items-center border-b text-secondary border-[#8f8f8f] mb-5">
            <FontAwesomeIcon
              className="my-3 ml-1 mr-3.5 text-xl"
              icon={faPhone}
            />
            <input
              className="flex flex-1 outline-none text-base"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              type="text"
              placeholder="Type Phone Number With Country Prefix ex.: (+355)"
            />
          </div>

          <label className="text-sm font-medium my-2">Birthday</label>
          <div className="flex items-center border-b text-secondary border-[#8f8f8f] mb-5">
            <FontAwesomeIcon
              className="my-3 ml-1 mr-3.5 text-xl"
              icon={faCalendar}
            />
            <input
              className="flex flex-1 outline-none text-base"
              required
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
              type="date"
            />
          </div>

          <button
            className="bg-primary text-text font-bold py-4 mt-6 w-full text-lg uppercase transition-all duration-300 hover:bg-shadowHard rounded-full"
            type="submit"
            disabled={loading}
          >
            Sign Up
          </button>
        </form>
      </div>
    );
  }
};

export default AuthForm;
