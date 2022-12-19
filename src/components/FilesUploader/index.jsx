import styled from "styled-components";
import { ContainerHeader } from "../../styles/Form/Form";

const FilesUploader = () => {
  const requiredChart = "*";
  return (
    <ContainerHeader>
      <ContainerFiles>
        <Content>
          <ContainerData>
            <LabelTitle>Foto Frontal (1) {requiredChart}</LabelTitle>
            <File type="file" />
          </ContainerData>

          <ContainerData>
            <LabelTitle>Curriculum Vitae (1) {requiredChart}</LabelTitle>
            <File type="file" />
          </ContainerData>

          <ContainerData>
            <LabelTitle>Certificado de Educación (1) {requiredChart}</LabelTitle>
            <LabelTitle>( Certificado de estudios)</LabelTitle>
            <File type="file" />
          </ContainerData>

          <ContainerData>
            <LabelTitle>Certificado de Trabajo (opcional)</LabelTitle>
            <File type="file" />
          </ContainerData>

          <ContainerData>
            <LabelTitle>Certificado o Acta de </LabelTitle>
            <LabelTitle>Matrimonio (opcional)</LabelTitle>
            <File type="file" />
          </ContainerData>

          <ContainerData>
            <LabelTitle>Certificados De Partida de Nacimiento</LabelTitle>
            <LabelTitle>De los hijos (opcional)</LabelTitle>
            <File type="file" />
          </ContainerData>

          <ContainerData>
            <LabelTitle>Certificados De Partida de Nacimiento</LabelTitle>
            <LabelTitle>De los hijos (opcional)</LabelTitle>
            <File type="file" />
          </ContainerData>

          <ContainerData>
            <LabelTitle>Copia o screenshot de cuenta de</LabelTitle>
            <LabelTitle> ahorros Banco Internacional (1) {requiredChart}</LabelTitle>
            <LabelTitle>(o copia de planilla de servicios)</LabelTitle>
            <File type="file" />
          </ContainerData>
        </Content>


        <Content>
          <ContainerData>
            <LabelTitle>Cedula o DNI (1) {requiredChart}</LabelTitle>
            <File type="file" />
          </ContainerData>

          <ContainerData>
            <LabelTitle>Certificado de votación (1) {requiredChart}</LabelTitle>
            <File type="file" />
          </ContainerData>

          <ContainerData>
            <LabelTitle>Licencia de Conducir (opcional)</LabelTitle>
            <File type="file" />
          </ContainerData>

          <ContainerData>
            <LabelTitle>Carnet De discapacidad (opcional)</LabelTitle>
            <File type="file" />
          </ContainerData>

          <ContainerData>
            <LabelTitle>Copias de Certificados de</LabelTitle>
            <LabelTitle>capacitación (opcional)</LabelTitle>
            <File type="file" />
          </ContainerData>

          <ContainerData>
            <LabelTitle>Formulario 107 En caso de haber laborado</LabelTitle>
            <LabelTitle> en relación de dependencia (opcional)</LabelTitle>
            <File type="file" />
          </ContainerData>


        </Content>
      </ContainerFiles>
      <ContainerButton>
      <ButtonSubmit>ENVIAR</ButtonSubmit>
      </ContainerButton>
    </ContainerHeader>
  );
};

export default FilesUploader;

const ContainerFiles = styled.div`
  width: 100%;
  height: 1200px;
  display: flex;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0 1rem 0;
`;

const LabelTitle = styled.label`
  display: inline-block;
  color: var(--primaryColor);
  font-family: sans-serif;
  border-radius: 0.3rem;
  margin: 0 0 0.5rem 0;
`;

const File = styled.input`
  background-color: #f8f9fc;
  border: 1px solid #e2e9f3;
  border-radius: 13px;
  height: 60px;
  width: 300px;
  color: #565a90;

  &::file-selector-button {
    border: none;
    border-radius: 4px;
    color: white;
    background-color: var(--primaryColor);
    border: 1px solid #595ef1bd;
    height: 40px;
    cursor: pointer;
    transition: all 0.25s ease-in;
    cursor: pointer;
  }
  &::file-selector-button:hover {
    background-color: #fff;
    color: #565a90;
    transition: all 0.25s ease-in;
  }
`;

const ContainerButton = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const ButtonSubmit = styled.button`
  border: none;
  background-color: var(--secondColor);
  color: white;
  border-radius: 8px;
  width: 90%;
  height: 40px;
  cursor: pointer;
`;