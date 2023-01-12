import styled from "styled-components";
import Header from "../../components/Header";
import FormExpired from "../../components/FormExpired";
import Footer from "../../components/Footer";

const InactiveForm = () => {
  return (
    <>
        <Header />

        <FormExpired />
        
        <Footer />
    </>
  );
};

export default InactiveForm;

const ContainerInactive = styled.div`
  width: 100%;
  height: 5rem;
`;
