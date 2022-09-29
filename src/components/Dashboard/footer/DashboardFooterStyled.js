import styled from "styled-components";

export const Footer = styled.footer`
  background-color: ${(props) => props.bgColor};
  padding: 25px 0;
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const Box = styled.div`
  width: 100%;
`;

export const Row = styled.div`
  text-align: center;
  margin: 5px 0;
`;

export const LinkItem = styled.div`
  display: inline;
  color: ${(props) => props.color};
  padding: 0 6px;
  cursor: pointer;
`;

export const Credit = styled.p`
  color: #a1a1a1;
`;
