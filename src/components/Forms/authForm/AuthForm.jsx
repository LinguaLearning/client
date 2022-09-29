import React, { useState } from "react";
import { setDoc, doc } from "firebase/firestore";
import { auth, db } from "../../../Firebase";
import {
  Box,
  Container,
  Title,
  Form,
  FormElem,
  Label,
  FormField,
  Input,
  Text,
  Button,
  PText,
  SocialMediaContainer,
  ImageCircle,
  SocialLink,
  SimpleButton,
  ErrorMessage,
} from "./AuthFormStyled";
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
import { useColors } from "../../../context/StylingContext/ColorContext";

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

  //recieving GlobalColors
  const globalColors = useColors();

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
      <Box primary={globalColors.primary}>
        <Container text={globalColors.text}>
          <Title secondary={globalColors.secondary}>Login</Title>
          <ErrorMessage error={globalColors.error}>{error}</ErrorMessage>
          <Form>
            <FormElem>
              <Label>Email</Label>
              <FormField secondary={globalColors.secondary}>
                <FontAwesomeIcon icon={faUser} />
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="text"
                  placeholder="Type your email"
                />
              </FormField>
            </FormElem>
            <FormElem>
              <Label>Password</Label>
              <FormField secondary={globalColors.secondary}>
                <FontAwesomeIcon icon={faKey} />
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Type your password"
                />
              </FormField>
            </FormElem>
            <Link style={{ textDecoration: "none" }} to="/forgotPassword">
              <Text secondary={globalColors.secondary}>Forgot password?</Text>
            </Link>
            <Button
              primary={globalColors.primary}
              text={globalColors.text}
              shadowHard={globalColors.shadowHard}
              disabled={loading}
              onClick={handleLogin}
            >
              Login
            </Button>
          </Form>
          <PText
            secondary={globalColors.secondary}
            style={{
              textAlign: "center",
              paddingTop: "15px",
              paddingBottom: "0px",
            }}
          >
            Or Sign In Using
          </PText>
          <SocialMediaContainer>
            <SocialLink>
              <Link to="www.facebook.com">
                <ImageCircle
                  style={{ width: "55px", height: "55px" }}
                  src={Facebook}
                ></ImageCircle>
              </Link>
            </SocialLink>
            <SocialLink>
              <Link to="www.instagram.com">
                <ImageCircle
                  src={Instagram}
                  style={{ width: "40px", height: "40px", marginRight: "7px" }}
                ></ImageCircle>
              </Link>
            </SocialLink>
            <SocialLink>
              <Link to="www.twitter.com">
                <ImageCircle
                  src={Twitter}
                  style={{ width: "45px", height: "45px" }}
                ></ImageCircle>
              </Link>
            </SocialLink>
          </SocialMediaContainer>
          <PText
            secondary={globalColors.secondary}
            style={{
              textAlign: "center",
              paddingTop: "0px",
              paddingBottom: "10px",
            }}
          >
            If you do not have an account yet
          </PText>
          <Link style={{ textDecoration: "none" }} to="/signup">
            <SimpleButton secondary={globalColors.secondary}>
              Sign Up
            </SimpleButton>
          </Link>
        </Container>
      </Box>
    );
  } else if (formTypeState === "signup") {
    return (
      <Box primary={globalColors.primary}>
        <Container text={globalColors.text}>
          <Title secondary={globalColors.secondary}>Signup</Title>
          <ErrorMessage error={globalColors.error}>{error}</ErrorMessage>
          <Form>
            <FormElem>
              <Label>Username</Label>
              <FormField secondary={globalColors.secondary}>
                <FontAwesomeIcon icon={faUser} />
                <Input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Type your username"
                />
              </FormField>
            </FormElem>
            <FormElem>
              <Label>Email</Label>
              <FormField secondary={globalColors.secondary}>
                <FontAwesomeIcon icon={faEnvelope} />
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Type your email"
                />
              </FormField>
            </FormElem>
            <FormElem>
              <Label>Password</Label>
              <FormField secondary={globalColors.secondary}>
                <FontAwesomeIcon icon={faKey} />
                <Input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Type your password"
                />
              </FormField>
            </FormElem>
            <FormElem>
              <Label>Password</Label>
              <FormField secondary={globalColors.secondary}>
                <FontAwesomeIcon icon={faKey} />
                <Input
                  value={passwordConfirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  type="password"
                  placeholder="Confirm your password"
                />
              </FormField>
            </FormElem>

            <Button
              primary={globalColors.primary}
              text={globalColors.text}
              shadowHard={globalColors.shadowHard}
              disabled={loading}
              // onClick={handleSignUp}
              onClick={(e) => {
                e.preventDefault();
                setFormTypeState("signUpExtra");
              }}
            >
              Sign Up
            </Button>
          </Form>
          <PText
            secondary={globalColors.secondary}
            style={{
              textAlign: "center",
              paddingTop: "15px",
              paddingBottom: "0px",
            }}
          >
            Or Sign Up Using
          </PText>
          <SocialMediaContainer>
            <SocialLink>
              <Link to="www.facebook.com">
                <ImageCircle
                  style={{ width: "55px", height: "55px" }}
                  src={Facebook}
                ></ImageCircle>
              </Link>
            </SocialLink>
            <SocialLink>
              <Link to="www.instagram.com">
                <ImageCircle
                  src={Instagram}
                  style={{ width: "40px", height: "40px", marginRight: "7px" }}
                ></ImageCircle>
              </Link>
            </SocialLink>
            <SocialLink>
              <Link to="www.twitter.com">
                <ImageCircle
                  src={Twitter}
                  style={{ width: "45px", height: "45px" }}
                ></ImageCircle>
              </Link>
            </SocialLink>
          </SocialMediaContainer>
          <PText
            secondary={globalColors.secondary}
            style={{
              textAlign: "center",
              paddingTop: "0px",
              paddingBottom: "10px",
            }}
          >
            If you have an account
          </PText>
          <Link style={{ textDecoration: "none" }} to="/login">
            <SimpleButton>Login</SimpleButton>
          </Link>
        </Container>
      </Box>
    );
  } else if (formTypeState === "signUpExtra") {
    return (
      <Box primary={globalColors.primary}>
        <Container text={globalColors.text}>
          <Title secondary={globalColors.secondary}>Signup</Title>
          <ErrorMessage error={globalColors.error}>{error}</ErrorMessage>
          <Form>
            <FormElem>
              <Label>First Name</Label>
              <FormField secondary={globalColors.secondary}>
                <FontAwesomeIcon icon={faUser} />
                <Input
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  placeholder="Type First Name"
                />
              </FormField>
            </FormElem>
            <FormElem>
              <Label>Surname</Label>
              <FormField secondary={globalColors.secondary}>
                <FontAwesomeIcon icon={faUser} />
                <Input
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  placeholder="Type Surname"
                />
              </FormField>
            </FormElem>
            <FormElem>
              <Label>Phone Number</Label>
              <FormField secondary={globalColors.secondary}>
                <FontAwesomeIcon icon={faPhone} />
                <Input
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="text"
                  placeholder="Type Phone Number With Country Prefix ex.: (+355)"
                />
              </FormField>
            </FormElem>
            <FormElem>
              <Label>Birthday</Label>
              <FormField secondary={globalColors.secondary}>
                <FontAwesomeIcon icon={faCalendar} />
                <Input
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  type="date"
                />
              </FormField>
            </FormElem>

            <Button
              primary={globalColors.primary}
              text={globalColors.text}
              shadowHard={globalColors.shadowHard}
              disabled={loading}
              onClick={handleSignUp}
            >
              Sign Up
            </Button>
          </Form>
        </Container>
      </Box>
    );
  }
};

export default AuthForm;
