import styled from "styled-components";

export const Box = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  background-color: ${(props) => props.text};
  width: 500px;
  border-radius: 20px;
  padding: 70px 55px;
  max-height: 90%;
`;

export const Title = styled.p`
  font-size: 38px;
  font-weight: 700;
  text-align: center;
  color: ${(props) => props.secondary};
`;

export const Form = styled.form`
  width: 100%;
`;

export const FormElem = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
export const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
`;
export const FormField = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1.4px solid #8f8f8f;
  padding: 10px 10px;
  color: ${(props) => props.secondary};
`;
export const Input = styled.input`
  border: none;
  outline: none;
  width: 92%;
`;
export const Text = styled.p`
  text-align: right;
  font-size: 15px;
  color: ${(props) => props.secondary};
`;
export const Button = styled.button`
  background-color: ${(props) => props.primary};
  padding: 15px;
  width: 100%;
  margin-top: 30px;
  border-radius: 50px;
  border: none;
  font-size: 18px;
  color: ${(props) => props.text};
  font-weight: bold;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.shadowHard};
  }
`;

export const PText = styled.p`
  font-size: 15px;
  color: ${(props) => props.secondary};
  padding: 0;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ImageCircle = styled.img``;
export const SocialLink = styled.span`
  margin: 5px;
`;

export const SimpleButton = styled.p`
  font-size: 15px;
  text-align: center;
  color: ${(props) => props.secondary};
  font-weight: 600;
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.error};
`;
