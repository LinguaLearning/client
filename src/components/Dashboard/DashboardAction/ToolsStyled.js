import styled from "styled-components";

export const ToolsList = styled.div``;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #bed0ed;
  padding: 15px;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
`;

export const Content = styled.div`
  width: calc(95% - 70px);
  padding-left: 20px;
`;

export const ItemDescription = styled.p`
  font-size: 14px;
  color: ${(props) => props.color};
`;

export const ItemTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
`;

export const Status = styled.div`
  width: 5%;
`;
