import Header from "../../components/Header";
import InfoBody from "../../components/InfoBody";
import InputCedula from "../../components/InputCedula";
import FileEnabling from "../../components/FileEnabling";
import FilesUploader from "../../components/FilesUploader";
import Footer from "../../components/Footer";

const InitialForm = () => {
  return (
    <>
      <Header />

      <InfoBody />

      <InputCedula />

      <FileEnabling />

      <FilesUploader />

      <Footer />
    </>
  );
};

export default InitialForm;
