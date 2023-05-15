import styled from "styled-components";
import { ContainerHeader } from "../../styles/Form/Form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEnablingData,
  sendDataFormFile,
  lengthTotalEnablingFile,
  SumEnablingFile,
  ResEnablingFile,
  setSpinnerFileDataSubmit,
} from "../../redux/states/FileEnabling";
import { useNavigate } from "react-router-dom";
import JSZip from "jszip";
import toast, { Toaster } from "react-hot-toast";

const FilesUploader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requiredChart = "*";
  const { files } = useSelector((store) => store);
  const { FileType, FileEnabling, InfoCabinet, Route, TotalFile } = files;
  const [isFalse, setIsFalse] = useState(true);
  const [isTrue, setIsTrue] = useState(false);
  const [FileOrderData, setFileOrderData] = useState([]);

  useEffect(() => {
    const Enabling = [];
    FileType.map((file) => {
      const Types = {
        file: null,
        fileTypeCode: file.code,
        fileTypeName: file.name,
        descriptionFront: file.name,
        isRequired: file.isRequired,
      };
      Enabling.push(Types);
    });
    // console.log(Enabling);
    dispatch(getEnablingData(Enabling));
    dispatch(lengthTotalEnablingFile(Enabling.length));
  }, [FileType]);

  useEffect(() => {
    Route != 200 ? <></> : navigate("SuccessForm");
  }, [Route]);

  useEffect(() => {
    function orderArray(a, b) {
      if (a.isRequired && !b.isRequired) {
        return -1;
      }

      if (!a.isRequired && b.isRequired) {
        return 1;
      }

      return 0;
    }

    const FileOrder = FileEnabling.sort(orderArray);
    setFileOrderData(FileOrder);
  }, [FileEnabling]);

  const setFile = (e) => {
    const zip = new JSZip();
    let id = e.target.id;
    let files = Array.from(e.target.files);
    // console.log(files);
    if (files == undefined) {
      dispatch(ResEnablingFile());
    }
    files.forEach((file) => {
      zip.file(file.name, file, { binary: true });
    });

    zip.generateAsync({ type: "blob" }).then(function (content) {
      // window.location.href = "data:application/zip;base64," + content;
      var reader = new FileReader();
      reader.readAsDataURL(content);
      reader.onload = function () {
        fileCreated(reader.result, id);
        // console.log(reader.result);
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
        dispatch(ResEnablingFile());
      };
    });
  };

  const fileCreated = (Enabling, id) => {
    FileEnabling.map((index, i) => {
      if (index.fileTypeCode == id) {
        index.file = Enabling;
      }
      return index;
    });
    dispatch(getEnablingData(FileEnabling));
    dispatch(SumEnablingFile());
  };

  const ValidateError = () => {
    const TotalFileType = [];
    FileType.forEach((file, i) => {
      if (file.isRequired == true) {
        TotalFileType.push(file);
      }
    });
    const EnablingFileType = [];
    FileEnabling.forEach((file, i) => {
      if (file.isRequired == true && file.file != null) {
        EnablingFileType.push(file);
      }
    });

    if (TotalFileType.length == EnablingFileType.length) {
      setIsTrue(true);
      setIsFalse(false);
    }
    if (TotalFileType.length != EnablingFileType.length) {
      toast.error("Archivos Requeridos Faltantes");
    }
  };

  const SendFilesData = () => {
    dispatch(setSpinnerFileDataSubmit(true));
    const FormData = {
      documnetCode: InfoCabinet?.documentCode,
      fileData: FileEnabling,
    };
    dispatch(sendDataFormFile(FormData));
  };

  return (
    <ContainerHeader>
      <ContainerFiles>
        <ContentData>
          {FileOrderData ? (
            FileOrderData.map((file, i) => (
              <ContainerData key={i}>
                {file.isRequired ? (
                  <LabelTitle>
                    {file.fileTypeName} (1) {requiredChart}
                  </LabelTitle>
                ) : (
                  <LabelTitle>{file.fileTypeName} (1) </LabelTitle>
                )}
                <File
                  id={file.fileTypeCode}
                  type="file"
                  onChange={(e) => setFile(e)}
                  multiple
                />
              </ContainerData>
            ))
          ) : (
            <></>
          )}
        </ContentData>
      </ContainerFiles>

      <ContainerButton>
        {isFalse ? (
          <ButtonValidate onClick={() => ValidateError()}>
            VALIDAR
          </ButtonValidate>
        ) : (
          <></>
        )}
        {isTrue ? (
          <ButtonSubmit onClick={() => SendFilesData()}>ENVIAR</ButtonSubmit>
        ) : (
          <></>
        )}
      </ContainerButton>
      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          duration: 3500,
          style: {
            background: "#588525",
            color: "#fff",
          },
        }}
      />
    </ContainerHeader>
  );
};

export default FilesUploader;

const ContainerFiles = styled.div`
  width: 100%;
  height: 1200px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

const ContentData = styled.div`
  width: 80%;
  display: grid;
  justify-content: space-between;
  grid-template-columns: 300px 300px;
  @media screen and (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 1rem 0 1rem 0;
  }
`;

const ContainerData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding: 1.4rem;
  }
`;

const LabelTitle = styled.label`
  display: inline-block;
  color: var(--primaryColor);
  font-family: sans-serif;
  border-radius: 0.3rem;
  margin: 0 0 0.5rem 0;
`;

const File = styled.input`
  background-color: #f8f9fc;
  border: 1px solid #e2e9f3;
  border-radius: 13px;
  height: 60px;
  width: 300px;
  color: #565a90;

  &::file-selector-button {
    border: none;
    border-radius: 4px;
    color: white;
    background-color: var(--primaryColor);
    border: 1px solid #595ef1bd;
    height: 40px;
    cursor: pointer;
    transition: all 0.25s ease-in;
    cursor: pointer;
  }
  &::file-selector-button:hover {
    background-color: #fff;
    color: #565a90;
    transition: all 0.25s ease-in;
  }
`;

const ContainerButton = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const ButtonValidate = styled.button`
  border: none;
  background-color: var(--secondColor);
  color: white;
  border-radius: 8px;
  width: 90%;
  height: 40px;
  cursor: pointer;
`;

const ButtonSubmit = styled.button`
  border: none;
  background-color: var(--primaryColor);
  color: white;
  border-radius: 8px;
  width: 90%;
  height: 40px;
  cursor: pointer;
`;
