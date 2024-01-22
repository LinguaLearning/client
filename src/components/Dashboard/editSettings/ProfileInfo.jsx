import React from "react";
import profilepicture from "../../../lib/assets/avatar.jpg";
import { useAuth } from "../../../context/AuthContext";

const ProfileInfo = () => {
  const { currentUser, profileDetails } = useAuth();
  return (
    <div>
      <h1 className="text-2xl font-medium">My Profile</h1>
      <div>
        <div className="flex flex-col sm:flex-row justify-between my-4">
          <div className="flex flex-col max-w-[13rem]">
            <img
              src={profilepicture}
              alt=""
              className="w-52 object-cover aspect-square rounded-full"
            />
            <button
              className={`block self-center my-4 sm:mt-4 bg-secondary text-white py-2.5 px-10 rounded font-semibold`}
            >
              Follow
            </button>
          </div>
          <div className="w-1/2 space-y-4">
            <div className=" space-x-2">
              <span className="font-semibold">Name:</span>
              <span>{profileDetails?.username}</span>
            </div>
            <div className=" space-x-2">
              <span className="font-semibold">Email:</span>
              <span>{currentUser.email}</span>
            </div>
            <div className=" space-x-2">
              <span className="font-semibold">Language:</span>
              <span>{profileDetails.profileInfo?.language}</span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold">Bio</h1>
          <p>{profileDetails.profileInfo?.bio}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between my-4">
          <div style={{ width: "50%" }}>
            <h1 className="text-xl font-semibold">Achievments</h1>
            <div>{profileDetails.profileInfo?.achievments}</div>
          </div>
          <div style={{ width: "50%" }}>
            <h1 className="text-xl font-semibold">Interests</h1>
            <div>{profileDetails.profileInfo?.interests}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
