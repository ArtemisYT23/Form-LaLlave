import styled from "styled-components";
import { ContainerHeader } from "../../styles/Form/Form";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEnablingData,
  sendDataFormFile,
} from "../../redux/states/FileEnabling";
import { useNavigate } from "react-router-dom";

const FilesUploader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const requiredChart = "*";
  const { files } = useSelector((store) => store);
  const { FileType, FileEnabling, InfoCabinet, Route } = files;

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
  }, [FileType]);

  useEffect(() => {
    Route != 200 ? <></> : navigate("SuccessForm")
  },[Route])

  const setFile = (e) => {
    let id = e.target.id;
    let file = e.target.files[0];

    var reader = new FileReader();
    if (file != "") {
      reader.readAsDataURL(file);
      reader.onload = function () {
        fileCreated(reader.result, id);
      };
      reader.onerror = function (error) {
        console.log("Error: ", error);
      };
    }
  };

  const fileCreated = (Enabling, id) => {
    console.log(id);
    console.log(Enabling);
    FileEnabling.map((index, i) => {
      if (index.fileTypeCode == id) {
        index.file = Enabling;
      }
      return index;
    });
    console.log(FileEnabling);
    dispatch(getEnablingData(FileEnabling));
  };

  const SendFilesData = () => {
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
          {FileEnabling ? (
            FileEnabling.map((file, i) => (
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
                  onInput={(e) => setFile(e)}
                />
              </ContainerData>
            ))
          ) : (
            <></>
          )}
        </ContentData>
      </ContainerFiles>
      <ContainerButton>
        <ButtonSubmit onClick={() => SendFilesData()}>ENVIAR</ButtonSubmit>
      </ContainerButton>
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

const ButtonSubmit = styled.button`
  border: none;
  background-color: var(--secondColor);
  color: white;
  border-radius: 8px;
  width: 90%;
  height: 40px;
  cursor: pointer;
`;
