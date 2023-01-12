import styled from "styled-components";
import { ContainerHeader } from "../../styles/Form/Form";

const InfoBody = () => {
  const requiredChar = "*";
  return (
    <ContainerHeader>
      <ContainerInfo>
        <ContentLine>
          <Introducction>
            Esta plataforma fue diseñada para los colaboradores de{" "}
            <strong>LA LLAVE</strong> y permitirá registrar o subir sus archivos
            de documentos personales. Recuerde subir toda la información que el
            sistema le solicita de tal manera, que en el proceso no existan
            errores y se cumpla exitosamente.{" "} Por registro y control interno los
            documentos legales tienen un tiempo de caducidad,
            <strong>
              {" "}
              es importante indicarle que una vez abierto este enlace tendrá una
              vigencia de 24 horas.
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
