import styled from "styled-components";

export const Container = styled.div`
  width: 70%;
  /* background-color: #ddd; */
  margin: 40px auto;
  @media (max-width: 1000px) {
    width: 85%;
  }
`;

export const Title = styled.p`
  font-size: 35px;
  font-weight: bolder;
  margin-bottom: 15px;
  color: ${(props) => props.secondary};
`;
