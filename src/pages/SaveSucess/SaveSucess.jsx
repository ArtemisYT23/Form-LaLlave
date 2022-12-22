import { useEffect } from "react";
import styled from "styled-components";
import "../../styles/Save/SaveSucess.css";
import fondo from "../../../assets/fondo.png";

const SaveSucess = () => {
  return (
    <>
      <ContainerHeader>
        <ContainerForm1>
          <div className="Iam">
            <p>Formulario Enviado Con Éxito</p>
            <b>
              <div className="innerIam">
                SOMOS CENTRALFILE
                <br />
                Su Aliado en
                <br />
                Soluciones Informáticas
                <br />
                Digitalización
                <br />
                MailRoom
              </div>
            </b>
          </div>
        </ContainerForm1>
      </ContainerHeader>
      <br />
      <ContainerForm imgUrl={fondo}></ContainerForm>
    </>
  );
};

export default SaveSucess;

const ContainerHeader = styled.div`
  width: 900px;
  height: 100%;
  background-color: var(--primaryColor);
  border-radius: 13px;
  margin: 0 0 0.1rem 0;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    border-radius: 13px;
  }
`;

const ContainerForm1 = styled.div`
  width: 100%;
  height: 220px;
  display: flex;
  justify-content: center;
`;

const ContainerForm = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  justify-content: center;
  background-size: contain;
  background: url(${(props) => props.imgUrl});
  border-radius: 13px;
`;
