import styled from "styled-components";
import { ContainerHeader } from "../../styles/Form/Form";
import { useDispatch } from "react-redux";
import  { expiredFormFile } from "../../redux/states/FileEnabling";

const FormInvalid = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(expiredFormFile(true));
  };

  return (
    <ContainerHeader>
      <Content>
        <ContentInfo>
          <Introducction>
            La cédula ingresada no es correcta{" "}
            <strong>VUELVA A INTENTARLO</strong>
          </Introducction>
        </ContentInfo>
        <ButtonReturn onClick={() => handleClick()}>Reintentar</ButtonReturn>
      </Content>
    </ContainerHeader>
  );
};

export default FormInvalid;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  margin-bottom: 0.25rem;
`;

const ContentInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Introducction = styled.p`
  line-height: 2;
  text-align: center;
  padding-bottom: 1rem;
  border-bottom: 4px solid var(--PrimaryColor);
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
