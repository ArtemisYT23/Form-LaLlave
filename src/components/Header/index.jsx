import styled from "styled-components";
import { ContainerHeader } from "../../styles/Form/Form";
import LaLLave from "../../../assets/logo_llave.png";
import LogoPrincipal from "../../../assets/logo_principal.png";

const FormBase = () => {
  return (
    <ContainerHeader>
      <Header>
        <ContentLogo>
          <ContainerImg>
            <KeyContainer alt="Cargando" src={LaLLave} />
          </ContainerImg>
        </ContentLogo>
        <ContentText>
          <span>INGRESO DE PERSONAL</span>
        </ContentText>
        <ContentLogo>
          <ContainerImg2>
            <KeyContainer alt="Cargando" src={LogoPrincipal} />
          </ContainerImg2>
        </ContentLogo>
      </Header>
    </ContainerHeader>
  );
};

export default FormBase;

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const ContentLogo = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ContainerImg = styled.div`
  width: 80px;
  height: 80px;
`;

const ContainerImg2 = styled.div`
  width: 175px;
  height: 80px;
`;

const KeyContainer = styled.img`
  width: 100%;
  height: 100%;
`;

const ContentText = styled.div`
  width: 75%;
  text-decoration-line: underline overline;
  color: var(--secondColor);
  font-size: 2.5rem;
  margin-top: 1rem; 
`;
