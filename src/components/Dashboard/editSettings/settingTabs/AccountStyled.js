import styled from "styled-components";

export const Box = styled.div`
  margin: 30px 0;
  margin-bottom: 0;
`;

export const Title = styled.p`
  font-size: 27px;
  font-weight: 500;
`;

export const Form = styled.form``;

export const Input = styled.input`
  width: 450px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid gray;
  outline: none;
  display: block;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 5px;
  color: #555;
  display: block;
`;

export const InputField = styled.div`
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 15px 30px;
  background-color: ${(props) => props.secondary};
  color: ${(props) => props.text};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${(props) => props.shadowHard};
  }
`;
