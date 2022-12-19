import styled from "styled-components";
import { ContainerHeader } from "../../styles/Form/Form";

const InputCedula = () => {
  const requiredChar = "*";

  return (
    <ContainerHeader>
      <Container1Col>
        <LabelInput>CEDULA DE IDENTIDAD{requiredChar}</LabelInput>
        <Input type="text" 
        maxLength={10}
        />
      </Container1Col>
    </ContainerHeader>
  );
};

export default InputCedula;

const Container1Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius:  13px;
  padding: 0 0 .7rem 0;
`;

const LabelInput = styled.label`
  height: 100%;
  width: 100%;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: var(--primaryColor);
`;

const Input = styled.input`
  width: 90%;
  height: 2.2rem;
  background-color: #d0d5e8;
  color: var(--primaryColor);
  outline: none;

`;
