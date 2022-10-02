import React, { useState } from "react";
import { useAuth } from "../../../../context/AuthContext";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../../../Firebase";

const Account = () => {
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
    <div className="mt-7">
      <h1 className="font-medium text-xl sm:text-2xl md:text-3xl">
        Account Information
      </h1>
      <form className="space-y-4 my-2 flex flex-col">
        <div>
          <label className="text-sm font-medium mb-1 text-gray-600">
            Username
          </label>
          <input
            className="w-full md:w-[70%] lg:w-[45%] outline-none block p-2.5 rounded border border-gray-300"
            placeholder="Username"
            type="text"
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 text-gray-600">
            Email
          </label>
          <input
            className="w-full md:w-[70%] lg:w-[45%] outline-none block p-2.5 rounded border border-gray-300"
            placeholder="Email"
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 text-gray-600">
            Phone Number
          </label>
          <input
            className="w-full md:w-[70%] lg:w-[45%] outline-none block p-2.5 rounded border border-gray-300"
            placeholder="Phone Number"
            type="text"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 text-gray-600">
            First Name
          </label>
          <input
            className="w-full md:w-[70%] lg:w-[45%] outline-none block p-2.5 rounded border border-gray-300"
            placeholder="First Name"
            type="text"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 text-gray-600">
            Last Name
          </label>
          <input
            className="w-full md:w-[70%] lg:w-[45%] outline-none block p-2.5 rounded border border-gray-300"
            placeholder="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
        </div>
        <div>
          <label className="text-sm font-medium mb-1 text-gray-600">
            Birdhday
          </label>
          <input
            className="w-full md:w-[70%] lg:w-[45%] outline-none block p-2.5 rounded border border-gray-300"
            type="date"
            value={birthDate}
            onChange={(e) => {
              setbirthDate(e.target.value);
            }}
          />
        </div>
        <button
          className="self-center md:self-start w-full md:w-auto py-3.5 duration-500 transition-colors ease-in-out hover:bg-shadowHard rounded-md px-7 bg-secondary text-white font-medium text-xs md:text-base"
          onClick={handleUpdate}
        >
          Apply Changes
        </button>
      </form>
    </div>
  );
};

export default Account;
