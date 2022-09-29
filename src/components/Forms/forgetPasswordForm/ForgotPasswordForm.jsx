import React, { useState, useRef } from "react";
import {
  Box,
  Container,
  Title,
  ErrorMessage,
  Form,
  FormElem,
  Label,
  FormField,
  Input,
  Button,
  PText,
} from "../authForm/AuthFormStyled";
import { useAuth } from "../../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const ForgotPasswordForm = () => {
  const { resetPassword } = useAuth()

  const [error, setError] = useState("");
  const emailRef = useRef(null);

  const forgotPasswordHandler = (e) => {
    e.preventDefault()
    setError("");
    try{
      resetPassword(emailRef.current.value)
      emailRef.current.value = ""
    }
    catch (error) {
      setError(error)
    }
  };

  return (
    <Box>
      <Container>
        <Title>Forgot Password?</Title>
        <ErrorMessage>{error}</ErrorMessage>
        <Form onSubmit={(e)=>forgotPasswordHandler(e)} style={{ marginTop: "30px" }}>
          <FormElem>
            <Label>Email</Label>
            <FormField>
              <FontAwesomeIcon icon={faUser} />
              <Input
                ref={emailRef}
                type="email"
                placeholder="Type your email"
              />
            </FormField>
          </FormElem>
        </Form>
        <PText
          style={{
            textAlign: "justify",
            // paddingTop: "30px",
            // paddingBottom: "30px",
          }}
        >
          Enter your email and in some seconds the password reseting link will
          be sent to your email. Make sure to change it in 48 hours. The link
          won't be available later.
        </PText>
        <Button onClick={forgotPasswordHandler}>Forgot Password</Button>
      </Container>
    </Box>
  );
};

export default ForgotPasswordForm;
