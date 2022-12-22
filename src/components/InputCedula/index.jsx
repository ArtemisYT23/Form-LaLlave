import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ContainerHeader } from "../../styles/Form/Form";
import { getValidateUserByCedula } from "../../redux/states/FileEnabling";

const InputCedula = () => {
  const requiredChar = "*";
  const dispatch = useDispatch();
  const [cedula, setCedula] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    cedula != "" ? dispatch(getValidateUserByCedula(cedula)) : <></>;
  };

  return (
    <ContainerHeader>
      <Container1Col>
        <LabelInput>CEDULA DE IDENTIDAD{requiredChar}</LabelInput>
        <Form onSubmit={handleSubmit}>
          <Input
            value={cedula}
            type="text"
            maxLength={10}
            onChange={(e) => setCedula(e.target.value)}
          />
        </Form>
      </Container1Col>
    </ContainerHeader>
  );
};

export default InputCedula;

const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container1Col = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 13px;
  padding: 0 0 0.7rem 0;
`;

const LabelInput = styled.label`
  height: 100%;
  width: 100%;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: var(--primaryColor);
  padding: .5rem;
`;

const Input = styled.input`
  width: 90%;
  height: 2.2rem;
  background-color: #d0d5e8;
  color: var(--primaryColor);
  outline: none;
`;
