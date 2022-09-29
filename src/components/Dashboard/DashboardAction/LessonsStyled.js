import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 683px) {
    display: block;
  }
`;

export const CardList = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-between;
  row-gap: 35px;
  @media (max-width: 1273px) {
    grid-template-columns: auto auto;
    width: 60%;
  }
  @media (max-width: 683px) {
    grid-template-columns: auto auto;
    width: 100%;
    justify-content: space-around;
  }
  @media (max-width: 441px) {
    grid-template-columns: auto;
    width: 100%;
    justify-content: center;
  }
`;

export const InfoGraphicsList = styled.div`
  width: 23%;
  background-color: #d8e2ed;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 1273px) {
    width: 35%;
  }
  @media (max-width: 683px) {
    display: none;
  }
`;

export const Card = styled.div`
  background-image: url(${(props) => props.background});
  background-size: cover;
  width: 300px;
  height: 400px;
  position: relative;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media (max-width: 1682px) {
    width: 220px;
    height: 320px;
  }
  @media (max-width: 859px) {
    width: 180px;
    height: 250px;
  }
`;

export const Context = styled.div`
  height: 50%;
  padding: 14px;
`;

export const Title = styled.p`
  font-size: 43px;
  color: #fff;
  font-weight: 600;
  text-shadow: 3px 4px 7px rgba(0, 0, 0, 0.15);
`;

export const SubTitle = styled.p`
  font-size: 23px;
  color: #fff;
  font-weight: 600;
  text-shadow: 3px 4px 7px rgba(0, 0, 0, 0.15);
`;

export const BellowContent = styled.div`
  height: 50%;
  position: relative;
`;

export const BottomSection = styled.div`
  position: absolute;

  clip-path: ellipse(100% 59% at 78% 63%);
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 5px;

  bottom: 0;
  z-index: 0;
`;

export const BottomSection2 = styled.div`
  position: absolute;
  clip-path: ellipse(100% 59% at 25% 64%);
  bottom: 0;
  background-color: #0072bb;
  height: 100%;
  width: 100%;
  border-radius: 5px;
  z-index: 0;
`;

export const PlayButton = styled.div`
  position: absolute;
  z-index: 5;
  display: flex;
  width: 100%;
  height: 100%;
  bottom: 0;
  justify-content: center;
  align-items: center;
`;

export const Language = styled.div`
  display: flex;
  position: absolute;
  bottom: 14px;
  left: 14px;
  align-items: center;
`;

export const Image = styled.img`
  width: 40px;
`;

export const Text = styled.p`
  font-weight: bold;
  color: #fff;
  font-size: 20px;
  margin-left: 10px;
`;

export const GraphicsBox = styled.div`
  padding: 20px;
  padding-top: 0;
`;

export const SideTitle = styled.p`
  font-size: 35px;
  font-weight: bolder;
  text-align: center;
  margin: 20px;
  color: ${(props) => props.secondary};
`;

export const Description = styled.p`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: ${(props) => props.secondary};
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

export const LeaderBordList = styled.div`
  background-color: ${(props) => props.secondary};
  border-radius: 20px;
  padding: 10px;
`;

export const LeaderBordUser = styled.div`
  background-color: aliceblue;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserName = styled.p`
  font-size: 14px;
  font-weight: 500;
`;

export const UserScore = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

export const LeaderTitle = styled.p`
  font-size: 25px;
  color: ${(props) => props.secondary};
  text-align: center;
  padding-top: 10px;
  font-weight: 600;
`;

export const UsersBackground = styled.div`
  background-color: aliceblue;
  border-radius: 20px;
`;
