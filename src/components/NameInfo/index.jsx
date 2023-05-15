import styled from "styled-components";
import { useSelector } from "react-redux";
import { ContainerHeader } from "../../styles/Form/Form";

const NameInfo = () => {
  const { files } = useSelector((store) => store);
  const { InfoCabinet } = files;

  return (
    <ContainerHeader>
      <Container1Col>
        <LabelInput>{InfoCabinet?.entityName}</LabelInput>
      </Container1Col>
    </ContainerHeader>
  );
};

export default NameInfo;

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
