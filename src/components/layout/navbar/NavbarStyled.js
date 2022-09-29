import styled from "styled-components";

export const Box = styled.div`
  background-color: ${(props) => props.primary};
  padding: 10px 0;
  @media (max-width: 900px) {
    padding: 15px 0;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Brand = styled.div`
  width: 25%;
  @media (max-width: 900px) {
    width: 50%;
  }
`;

export const Menu = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const BrandName = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: ${(props) => props.text};
  @media (max-width: 1281px) {
    font-size: 25px;
  }
  @media (max-width: 600px) {
    font-size: 20px;
  }
`;

export const NavElement = styled.p`
  margin: 0 20px;
  font-weight: 500;
  font-size: 17px;
  @media (max-width: 1281px) {
    font-size: 14px;
  }
`;

export const User = styled.div`
  width: 25%;
  display: flex;
  justify-content: flex-end;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: ${(props) => props.text};
  border: none;
  margin: 0 10px;
  padding: 8px 20px;
  border-radius: 20px;
  color: ${(props) => props.primary};
  font-weight: 600;
  border: 2px solid #fff;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.primary};
    color: ${(props) => props.text};
  }
  @media (max-width: 1281px) {
    padding: 6px 15px;
    font-size: 12px;
  }
`;

export const BurgerIcon = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
  color: white;
  font-weight: 800;
  font-size: 25px;
  @media (min-width: 900px) {
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
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
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

export const ButtonSide = styled.button`
  background-color: ${(props) => props.bgColor};
  border: none;
  font-size: 26px;
  padding: 10px;
  width: 100%;
  border-radius: 15px;
  margin-top: 20px;
  color: ${(props) => props.color};
  font-weight: bold;
`;
