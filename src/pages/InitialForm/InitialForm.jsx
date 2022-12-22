import { useSelector } from "react-redux";
import Header from "../../components/Header";
import InfoBody from "../../components/InfoBody";
import InputCedula from "../../components/InputCedula";
import FileEnabling from "../../components/FileEnabling";
import FilesUploader from "../../components/FilesUploader";
import Footer from "../../components/Footer";

const InitialForm = () => {
  const { files } = useSelector((store) => store);
  const { InfoCabinet } = files;

  return (
    <>
      <Header />

      <InfoBody />

      <InputCedula />

      {InfoCabinet?.isActive ? (
        <>
          <FileEnabling />
          <FilesUploader />
        </>
      ) : (
        <></>
      )}

      <Footer />
    </>
  );
};

export default InitialForm;
