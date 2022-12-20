import { ContainerHeader } from "../../styles/Form/Form";
import styled from "styled-components";
import logoGris from "../../../assets/logogris.png";
import gropuVila from "../../../assets/grupovilaseca.png";

const Footer = () => {
  return (
    <ContainerHeader>
      <ContainerFooter>
        <ContainerFirst>
          <ContentImg>
            <img src={logoGris} alt="cargando" />
          </ContentImg>
          <br />
          <ContainerText>
            <p>Guayaquil – Guayas: Av. Juan Tanca Marengo, Km. 2.5 Quito</p>
            <p>Pichincha: Av. Amazonas n44-153 entre Av. el Inca y Río Coca</p>
            <p>Correo: info@la-llave.com</p>
            <p>Teléfonos: Guayaquil (04) 259-6900 – Quito (02) 394-9400</p>
          </ContainerText>
        </ContainerFirst>
        <ContainerSecond>
          <Contentlogo>
            <img src={gropuVila} alt="cargando" />
          </Contentlogo>
        </ContainerSecond>
      </ContainerFooter>
    </ContainerHeader>
  );
};

export default Footer;

const ContainerFooter = styled.div`
  width: 100%;
  height: 170px;
  display: flex;
  background-color: #588525;
  border-radius: 13px;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const ContainerFirst = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContentImg = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 70px;
    display: flex;
    padding: 1rem 0 0 0;
  }
`;

const Contentlogo = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 80px;
    height: 80px;
    padding: 0 0 1rem 0;
  }
`;

const ContainerText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: justify;
  color: #c4c4c4;
  line-height: 1.4;
  @media screen and (max-width: 767px) {
    width: 300px;
    line-height: 1;
    padding: 1rem 0 1rem 0 ;
    text-align: center;
  }
`;

const ContainerSecond = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
