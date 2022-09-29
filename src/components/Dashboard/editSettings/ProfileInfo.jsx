import React from "react";
import {
  Title,
  ProfileContent,
  Row,
  Profile,
  ProfileImage,
  FollowButton,
  GeneralInfo,
  ListItem,
  TagTitle,
  TagName,
  Bio,
  Achievments,
  Interests,
  InfoContainer,
  SectionTitle,
} from "./ProfileInfoStyled";
import profilepicture from "../../../assets/avatar.jpg";
import { useColors } from "../../../context/StylingContext/ColorContext";
import { useAuth } from "../../../context/AuthContext";

const ProfileInfo = () => {
  const globalColors = useColors();
  const { currentUser, profileDetails } = useAuth();
  return (
    <>
      <Title>My Profile</Title>
      <ProfileContent>
        <Row>
          <Profile>
            <ProfileImage src={profilepicture} />
            <FollowButton
              secondary={globalColors.secondary}
              text={globalColors.text}
            >
              Follow
            </FollowButton>
          </Profile>
          <GeneralInfo>
            <ListItem>
              <TagTitle>Name:</TagTitle>
              <TagName>{profileDetails?.username}</TagName>
            </ListItem>
            <ListItem>
              <TagTitle>Email:</TagTitle>
              <TagName>{currentUser.email}</TagName>
            </ListItem>
            <ListItem>
              <TagTitle>Language:</TagTitle>
              <TagName>{profileDetails.profileInfo?.language}</TagName>
            </ListItem>
          </GeneralInfo>
        </Row>
        <InfoContainer>
          <SectionTitle>Bio</SectionTitle>
          <Bio>{profileDetails.profileInfo?.bio}</Bio>
        </InfoContainer>
        <Row>
          <InfoContainer style={{ width: "50%" }}>
            <SectionTitle>Achievments</SectionTitle>
            <Achievments>{profileDetails.profileInfo?.achievments}</Achievments>
          </InfoContainer>
          <InfoContainer style={{ width: "50%" }}>
            <SectionTitle>Interests</SectionTitle>
            <Interests>{profileDetails.profileInfo?.interests}</Interests>
          </InfoContainer>
        </Row>
      </ProfileContent>
    </>
  );
};

export default ProfileInfo;
