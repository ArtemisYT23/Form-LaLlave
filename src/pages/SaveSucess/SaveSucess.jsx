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
            <p>Formulario Enviado</p>
            <p>Con Éxito</p>
            <b>
              <div className="innerIam">
                LA LLAVE
                <br />
                Somos Especialistas
                <br />
                Su Aliado en los
                <br />
                Sectores
                <br />
                Industriales
              </div>
            </b>
          </div>
        </ContainerForm1>
      </ContainerHeader>

      <ContentImg>
        <ContainerForm imgUrl={fondo}></ContainerForm>
      </ContentImg>
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
  height: 280px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ContentImg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    overflow: hidden;
    flex-direction: column;
  }
`;

const ContainerForm = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  justify-content: center;
  background-size: contain;
  background: url(${(props) => props.imgUrl});
  border-radius: 13px;

  @media screen and (max-width: 767px) {
    width: 600px;
    height: 400px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 25%;
  }
`;
