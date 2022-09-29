import styled from "styled-components";

export const Box = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: auto auto;
`;

export const GridElemenet = styled.div`
  height: 350px;
  background-color: ${(props) => props.backg};
  border: 0.5px solid aliceblue;
  position: relative;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Text = styled.p`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-weight: 600;
  font-size: 23px;
`;

export const Description = styled.p`
  margin-bottom: 20px;
`;
