import styled from "styled-components";

export const Title = styled.p`
  font-size: 27px;
  font-weight: 500;
`;

export const ProfileContent = styled.div``;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

export const Profile = styled.div``;

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

export const FollowButton = styled.button`
  display: block;
  margin: 15px auto;
  margin-bottom: 0;
  background-color: ${(props) => props.secondary};
  color: ${(props) => props.text};
  padding: 10px 40px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
`;

export const GeneralInfo = styled.div`
  width: 50%;
`;
export const ListItem = styled.div`
  margin-bottom: 10px;
`;
export const TagTitle = styled.span`
  margin-right: 10px;
  font-weight: 600;
`;
export const TagName = styled.span``;
export const InfoContainer = styled.div``;
export const SectionTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
export const Bio = styled.p``;
export const Achievments = styled.div``;
export const Interests = styled.div``;
