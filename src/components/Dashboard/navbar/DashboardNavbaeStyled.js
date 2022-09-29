import styled from "styled-components";

export const Box = styled.div`
  background-color: ${(props) => props.secondary};
  color: ${(props) => props.text};
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PageEssentials = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Brand = styled.div``;

export const BrandName = styled.p`
  font-size: 27px;
  font-weight: 600;
  margin-right: 25px;
`;

export const TabNavigator = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1185px) {
    display: none;
  }
`;

export const Tab = styled.div`
  margin: 0 10px;
  padding: 5px 15px;
  display: flex;
  align-items: center;
`;

export const TabActive = styled.div`
  margin: 0 10px;
  padding: 5px 15px;
  border-radius: 10px;
  background-color: #9dbcc7;
  display: flex;
  align-items: center;
  color: ${(props) => props.secondary};
`;

export const Client = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media (max-width: 1185px) {
    display: none;
  }
`;

export const Offer = styled.div``;

export const OfferButton = styled.button`
  background-color: #9dbcc7;
  color: ${(props) => props.secondary};
  padding: 7px 20px;
  border-radius: 50px;
  border: none;
  font-weight: 700;
`;

export const ElemtText = styled.p`
  margin-left: 20px;
`;

export const LinkElement = styled.div`
  margin-left: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;

export const DropdownMenu = styled.ul`
  list-style: none;
  position: absolute;
  right: 40px;
  background-color: ${(props) => props.secondary};
  border-radius: 10px;
  border: 1px #dedede solid;
  text-align: left;
`;

export const DropdownItem = styled.li`
  cursor: pointer;
  width: 250px;
  font-size: 18px;
  margin: 10px 20px;
`;

export const BurgerIcon = styled.div`
  width: 30%;
  display: flex;
  justify-content: right;
  color: white;
  font-weight: 800;
  font-size: 25px;
  @media (min-width: 1185px) {
    display: none;
  }
`;

export const Xbar = styled.div`
  position: absolute;
  left: 10px;
  top: 10px;
  color: white;
  font-weight: 900;
  font-size: 30px;
`;

export const SideBar = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  touch-action: none;

  @media (max-width: 500px) {
    min-height: fill-available;
    min-height: -webkit-fill-available;
  }
`;

export const SidebarList = styled.div``;

export const ListItem = styled.div`
  font-weight: 600;
  font-size: 33px;
  padding: 10px 0;
  text-align: center;
  color: ${(props) => props.color};
`;

export const SideButton = styled.button`
  padding: 10px 20px;
  width: 100%;
  margin: 0 auto;
  border-radius: 50px;
  border: none;
  background-color: #9dbcc7;
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  font-weight: bold;
  align-items: center;
  color: ${(props) => props.color};
`;
