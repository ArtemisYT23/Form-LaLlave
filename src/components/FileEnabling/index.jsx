import styled from "styled-components";
import { useState } from "react";
import { ContainerHeader } from "../../styles/Form/Form";
import { Knob } from "primereact/knob";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const FileEnabling = () => {
  const [value10, setValue10] = useState(0);

  return (
    <ContainerHeader>
      <ContainerBody>
        <Card>
          <Knob
            value={value10}
            valueTemplate={"{value}/14"}
            size={160}
            valueColor={"#588525"}
            readOnly
          />
          <LabelFile for="upload">Carga De Archivos Requeridos</LabelFile>
        </Card>
      </ContainerBody>
    </ContainerHeader>
  );
};

export default FileEnabling;

const ContainerBody = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: #58852576;
  width: 90%;
  height: 250px;
  margin: 0 1rem 0 0;
  border-radius: 13px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LabelFile = styled.label`
  display: inline-block;
  color: white;
  padding: 0.5rem;
  font-family: sans-serif;
  border-radius: 0.3rem;
  margin-top: 1rem;
`;
