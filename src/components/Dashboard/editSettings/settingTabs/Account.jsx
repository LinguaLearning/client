import React, { useState } from "react";
import {
  Box,
  Title,
  Form,
  Input,
  Label,
  InputField,
  Button,
} from "./AccountStyled";
import { useColors } from "../../../../context/StylingContext/ColorContext";
import { useAuth } from "../../../../context/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../Firebase";

const Account = () => {
  const globalColors = useColors();

  const { currentUser, profileDetails } = useAuth();

  const [username, setusername] = useState(profileDetails?.username);
  const [email, setemail] = useState(currentUser.email);
  const [phone, setphone] = useState(profileDetails?.phoneNumber);
  const [firstName, setfirstName] = useState(profileDetails?.firstName);
  const [lastName, setlastName] = useState(profileDetails?.lastName);
  const [birthDate, setbirthDate] = useState(profileDetails?.birthDate);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (
      username !== profileDetails.username ||
      email !== currentUser.email ||
      phone !== profileDetails.phone ||
      firstName !== profileDetails.firstName ||
      lastName !== profileDetails.lastName ||
      birthDate !== profileDetails.birthDate
    ) {
      await updateDoc(doc(db, "users", currentUser.uid), {
        username: username,
        email: email,
        phoneNumber: phone,
        firstName: firstName,
        lastName: lastName,
        birthDate: birthDate,
      });
    }
  };

  return (
    <Box>
      <Title>Account Information</Title>
      <Form>
        <InputField>
          <Label>Username</Label>
          <Input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </InputField>
        <InputField>
          <Label>Email</Label>
          <Input
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </InputField>
        <InputField>
          <Label>Phone Number</Label>
          <Input
            placeholder="Phone Number"
            type="text"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
        </InputField>
        <InputField>
          <Label>First Name</Label>
          <Input
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </InputField>
        <InputField>
          <Label>Last Name</Label>
          <Input
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </InputField>
        <InputField>
          <Label>Birdhday</Label>
          <Input
            type="date"
            value={birthDate}
            onChange={(e) => {
              setbirthDate(e.target.value);
            }}
          />
        </InputField>
        <Button
          shadowHard={globalColors.shadowHard}
          text={globalColors.text}
          secondary={globalColors.secondary}
          onClick={handleUpdate}
        >
          Apply Changes
        </Button>
      </Form>
    </Box>
  );
};

export default Account;
