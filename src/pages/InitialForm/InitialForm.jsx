import { useSelector } from "react-redux";
import LoadingApp from "../../utilities/LoadingApp";
import Header from "../../components/Header";
import InfoBody from "../../components/InfoBody";
import InputCedula from "../../components/InputCedula";
import FileEnabling from "../../components/FileEnabling";
import FilesUploader from "../../components/FilesUploader";
import Footer from "../../components/Footer";
import FormExpired from "../../components/FormExpired";
import FormInvalid from "../../components/FormInvalid";
import NameInfo from "../../components/NameInfo";

const InitialForm = () => {
  const { files } = useSelector((store) => store);
  const { InfoCabinet, Validate, RouteCedulaValid, isLoadingSaveFile } = files;

  return (
    <>
      {isLoadingSaveFile ? (
        <LoadingApp />
      ) : (
        <>
          <Header />

          <InfoBody />

          {RouteCedulaValid != 400 ? (
            <>{Validate ? <InputCedula /> : <FormExpired />}</>
          ) : (
            <FormInvalid />
          )}

          {InfoCabinet?.entityName ? (
            <>
              <NameInfo />
            </>
          ) : (
            <></>
          )}

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
      )}
    </>
  );
};

export default InitialForm;
