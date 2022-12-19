import styled from "styled-components";
import { ContainerHeader } from "../../styles/Form/Form";

const InfoBody = () => {
  const requiredChar = "*";
  return (
    <ContainerHeader>
      <ContainerInfo>
        <ContentLine>
          <Introducction>
            El presente formulario permite el ingreso de datos personales para los colaboradores de la <strong>llave</strong>
            <strong>
              {" "}
              es importante llenar toda la información para que su proceso y información
              pueda guardarse inmediatamente y de forma correcta,{" "}
            </strong>
            por registro interno todos los instrumentos legales tendrán un
            tiempo de caducidad
            <strong>
              {" "}
              por lo que es necesario que una vez abierto este enlace sea llenado en las 24 horas posterior.
            </strong>
          </Introducction>
          <AditionalInformation>
            Todos los campos {requiredChar} son obligatorios
          </AditionalInformation>
        </ContentLine>
      </ContainerInfo>
    </ContainerHeader>
  );
};

export default InfoBody;

const ContainerInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 0.25rem;
`;

const ContentLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 6px solid var(--thirdColor);
  padding: 1rem;
  border-radius: 13px;
`;

const Introducction = styled.p`
  text-align: justify;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 4px solid var(--PrimaryColor);
`;

const AditionalInformation = styled.span`
  margin-bottom: 1rem;
  font-weight: bold;
`;
