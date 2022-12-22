import axios from "axios";
import { FormServer } from "../../config/axios";

const initialState = {
    InfoCabinet: "",
    FileType: [],
    elementError: [],
    FileEnabling: [],
    Route: "",

}

const VALIDATE_SUCCESS_CI = "VALIDATE_SUCCESS_CI";
const VALIDATE_ERROR_CI = "VALIDATE_ERROR_CI";

const FILETYPE_SUCCESS = "FILETYPE_SUCCESS";
const FILETYPE_ERROR = "FILETYPE_ERROR";

const GET_ENABLING_DATA = "GET_ENABLING_DATA";
const SUCCESS_SEND = "SUCCESS_SEND";
const SUCCESS_ERROR = "SUCCESS_ERROR";

export default function FilesReducer(state = initialState, action) {
    switch (action.type) {
        case VALIDATE_SUCCESS_CI:
        case VALIDATE_ERROR_CI:

        case FILETYPE_SUCCESS:
        case FILETYPE_ERROR:

        case GET_ENABLING_DATA:
        case SUCCESS_SEND:
        case SUCCESS_ERROR:
            return action.payload;
        default:
            return state;
    }
};

//Validar Usuario por la cedula
export const getValidateUserByCedula = (cedula) => async (dispatch, getState) => {

    const { files } = getState();
    axios({
        url: `${FormServer}VerifyUserByCedula/${cedula}`,
        method: "GET",
        headers: {
            "Content-Type": "Application/json"
        }
    }).then(function (response) {
        if (response.status == 200) {
            dispatch({
                type: VALIDATE_SUCCESS_CI,
                payload: { ...files, InfoCabinet: response.data },
            });
            dispatch(getFileTypeByCabinet(response.data.documentCode));
        }
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: VALIDATE_ERROR_CI,
            payload: { ...files, InfoCabinet: "", elementError: error }
        })
    })
}

//Traer Tipo de archivos del gabinete
export const getFileTypeByCabinet = (documentId) => async (dispatch, getState) => {
    const { files } = getState();
    axios({
        url: `${FormServer}filetype/${documentId}`,
        method: "GET",
        headers: {
            "Content-Type": "Application/json"
        }
    }).then(function (response) {
        if (response.status == 200) {
            dispatch({
                type: FILETYPE_SUCCESS,
                payload: { ...files, FileType: response.data },
            });
        }
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: FILETYPE_ERROR,
            payload: { ...files, InfoCabinet: [] }
        })
    })
}

//Guardar los tipos de archivos para guardado de datos
export const getEnablingData = (Enabling) => async (dispatch, getState) => {
    const { files } = getState();
    dispatch({
        type: GET_ENABLING_DATA,
        payload: { ...files, FileEnabling: Enabling }
    })
}

//Enviar Datos al servidor
export const sendDataFormFile = (FormData) => async (dispatch, getState) => {
    console.log(FormData)
    const { files } = getState();
    axios({
        url: `${FormServer}file`,
        method: "PUT",
        data: FormData,
        headers: {
            "Content-Type": "Application/json"
        }
    }).then(function (response) {
        if (response.status == 200) {
            console.log(response.status);
            console.log(response.data);
            dispatch({
                type: SUCCESS_SEND,
                payload: {
                    ...files, 
                    Route: response.status, 
                    InfoCabinet: "",
                    FileType: [],
                    elementError: [],
                    FileEnabling: [],
                }
            })
        }
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: SUCCESS_ERROR,
            payload: { ...files, Route: "" }
        })
    })
}