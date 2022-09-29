import styled from "styled-components";

export const Title = styled.p`
  font-weight: 700;
  font-size: 32px;
`;

export const SettingMenuList = styled.ul`
  list-style: none;
  display: flex;
  margin-top: 30px;
  border-bottom: 1px solid rgba(170, 170, 170, 0.56);
`;

export const List = styled.li`
  margin-right: 15px;
  padding-bottom: 5px;

  cursor: pointer;
`;

export const ListActive = styled.li`
  color: blue;
  margin-right: 15px;
  border-bottom: 1px solid blue;
  padding-bottom: 5px;

  cursor: pointer;
`;
