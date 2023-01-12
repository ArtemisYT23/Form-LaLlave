import styled from "styled-components";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ContainerHeader } from "../../styles/Form/Form";
import {
  getValidateUserByCedula,
  clearEnablingDataFileType,
} from "../../redux/states/FileEnabling";
import { useNavigate } from "react-router-dom";
import { RoutesForm } from "../../models/routes";

const InputCedula = () => {
  const requiredChar = "*";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { files } = useSelector((store) => store);
  const { Validate } = files;
  const [cedula, setCedula] = useState("");

  const handleSubmit = () => {
    dispatch(clearEnablingDataFileType());
    cedula != "" ? dispatch(getValidateUserByCedula(cedula)) : <></>;
    dispatch();
  };

  return (
    <ContainerHeader>
      <Container1Col>
        <LabelInput>CEDULA DE IDENTIDAD{requiredChar}</LabelInput>
        <Input
          value={cedula}
          type="text"
          maxLength={10}
          onChange={(e) => setCedula(e.target.value)}
        />
        <br />
        {cedula != "" ? (
          <ButtonReturn onClick={handleSubmit}>Validar</ButtonReturn>
        ) : (
          <></>
        )}
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
  font-size: 1.2rem;
  color: var(--primaryColor);
  padding: 0.5rem;
`;

const Input = styled.input`
  width: 90%;
  height: 2.2rem;
  font-size: 1.2rem;
  background-color: #d0d5e8;
  color: var(--primaryColor);
  outline: none;
  text-align: center;
`;

const ButtonReturn = styled.button`
  width: 120px;
  height: 2rem;
  border-radius: 13px;
  outline: none;
  border: none;
  color: #fff;
  background-color: var(--primaryColor);
  cursor: pointer;
  :hover {
    background-color: #236591;
  }
`;
