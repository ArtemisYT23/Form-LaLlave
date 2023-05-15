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
          <ContainerText>
            <p>Ecuador</p>
            <p>Guayaquil: Av. Juan Tanca Marengo, Km. 2.5</p>
            <p>Quito: Av. Amazonas n44-153 entre Av. el Inca y Río Coca</p>
            <p>Correo: mvelasquez@la-llave.com</p>
            <p>Perú</p>
            <p>Av. Juan de Arona 151 Oficina 505 san isidro. </p>
            <p>Correo: staipe@lallave.com.pe o ebarona@lallave.com.pe</p>
            <p> Bolivia:</p>
             <p>Av. Ramblas y 4to Anillo, Edificio El Cubo I Piso # 2 (Equipetrol)</p>
             <p>Correo: staipe@lallave.com.pe o ebarona@lallave.com.pe</p>
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
  height: 300px;
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
  line-height: 1.5;
  @media screen and (max-width: 767px) {
    width: 300px;
    line-height: 1;
    padding: 1rem 0 1rem 0;
    text-align: center;
  }
`;

const ContainerSecond = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
