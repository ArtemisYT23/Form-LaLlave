import styled from "styled-components";
import { useState } from "react";
import { ContainerHeader } from "../../styles/Form/Form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Knob } from "primereact/knob";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const FileEnabling = () => {
  const dispatch = useDispatch();
  const { files } = useSelector((store) => store);
  const { SumFile, TotalFile } = files;

  useEffect(() => {
      setValue(SumFile);
  }, [SumFile]);

  const [value10, setValue] = useState(TotalFile);

  return (
    <ContainerHeader>
      <ContainerBody>
        <Card>
          <Knob
            value={value10}
            valueTemplate={`{value}/${TotalFile}`}
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
  background-color: #58852596;
  width: 95%;
  height: 250px;
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
