import axios from "axios";
import { toast } from "react-hot-toast";
import { FormServer } from "../../config/axios";

const initialState = {
    InfoCabinet: "",
    FileType: [],
    elementError: [],
    FileEnabling: [],
    Route: false,
    TotalFile: 0,
    SumFile: 0,
    Validate: true,
    isLoading: false,
    RouteCedulaValid: 100,
    isLoadingSaveFile: false,

}

const VALIDATE_SUCCESS_CI = "VALIDATE_SUCCESS_CI";
const VALIDATE_ERROR_CI = "VALIDATE_ERROR_CI";

const FILETYPE_SUCCESS = "FILETYPE_SUCCESS";
const FILETYPE_ERROR = "FILETYPE_ERROR";
const CLEAR_ENABLING_DATA_FILETYPE = "CLEAR_ENABLING_DATA_FILETYPE";

const GET_ENABLING_DATA = "GET_ENABLING_DATA";

const NUMBER_FILE = "NUMBER_FILE";
const SUM_NUMBER_FILE = "SUM_NUMBER_FILE";
const RES_NUMBER_FILE = "RES_NUMBER_FILE";

const SUCCESS_SEND = "SUCCESS_SEND";
const SUCCESS_ERROR = "SUCCESS_ERROR";

const ACTIVE_SPINNER = "ACTIVE_SPINNER";
const FORM_EXPIRED = "FORM_EXPIRED";
const FORM_EXPIRED_STATED = "FORM_EXPIRED_STATED";

const ACTIVE_SPINNER_SAVE_DATA = "ACTIVE_SPINNER_SAVE_DATA";

export default function FilesReducer(state = initialState, action) {
    switch (action.type) {
        case VALIDATE_SUCCESS_CI:
        case VALIDATE_ERROR_CI:

        case FILETYPE_SUCCESS:
        case FILETYPE_ERROR:
        case CLEAR_ENABLING_DATA_FILETYPE:

        case GET_ENABLING_DATA:

        case NUMBER_FILE:
        case SUM_NUMBER_FILE:
        case RES_NUMBER_FILE:

        case SUCCESS_SEND:
        case SUCCESS_ERROR:

        case ACTIVE_SPINNER:
        case FORM_EXPIRED:
        case FORM_EXPIRED_STATED:

        case ACTIVE_SPINNER_SAVE_DATA:
            return action.payload;
        default:
            return state;
    }
};

//Numero de total de archivos
export const lengthTotalEnablingFile = (num) => async (dispatch, getState) => {
    const { files } = getState();
    dispatch({
        type: NUMBER_FILE,
        payload: { ...files, TotalFile: num }
    })
}

//sumar archivos
export const SumEnablingFile = () => async (dispatch, getState) => {
    const { files } = getState();
    const { SumFile } = files;
    dispatch({
        type: SUM_NUMBER_FILE,
        payload: { ...files, SumFile: SumFile + 1 }
    })
}

//restar archivos
export const ResEnablingFile = () => async (dispatch, getState) => {
    const { files } = getState();
    const { SumFile } = files;
    dispatch({
        type: RES_NUMBER_FILE,
        payload: { ...files, SumFile: SumFile - 1 }
    })
}

//estado de carga 
export const loadingInfomation = (bool) => async (dispatch, getState) => {
    const { files } = getState();
    dispatch({
        type: ACTIVE_SPINNER,
        payload: { ...files, isLoading: bool }
    })
}

//estado de expiracion de formulario
export const expiredFormFile = (bool) => async (dispatch, getState) => {
    const { files } = getState();
    dispatch({
        type: FORM_EXPIRED_STATED,
        payload: { ...files, Validate: bool, RouteCedulaValid: 100 }
    })
}

//Validar Usuario por la cedula
export const getValidateUserByCedula = (cedula) => async (dispatch, getState) => {
    const { files } = getState();
    dispatch(loadingInfomation(true));
    axios({
        url: `${FormServer}VerifyUserByCedula/${cedula}`,
        method: "GET",
        headers: {
            "Content-Type": "Application/json"
        }
    }).then(function (response) {
        // console.log(response.data);
        if (response.status == 200) {
            if (response.data.isActive != false) {
                dispatch({
                    type: VALIDATE_SUCCESS_CI,
                    payload: { ...files, InfoCabinet: response.data, RouteCedulaValid: response.status },
                });
                dispatch(getFileTypeByCabinet(response.data.documentCode));
            }
            if (response.data.isActive != true) {
                dispatch({
                    type: FORM_EXPIRED,
                    payload: { ...files, Validate: false }
                })
            }
        }
    }).catch(function (error) {
        console.log(error);
        dispatch({
            type: VALIDATE_ERROR_CI,
            payload: { ...files, InfoCabinet: "", elementError: error, RouteCedulaValid: 400 }
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

//limpiar estado para los tipos de archivos
export const clearEnablingDataFileType = () => async (dispatch, getState) => {
    const { files } = getState();
    dispatch({
        type: CLEAR_ENABLING_DATA_FILETYPE,
        payload: { ...files, FileEnabling: [], TotalFile: 0 }
    })
}

//spinner de carga para envio de formulario
export const setSpinnerFileDataSubmit = (bool) => async (dispatch, getState) => {
    const { files } = getState();
    dispatch({
        type: ACTIVE_SPINNER_SAVE_DATA,
        payload: { ...files, isLoadingSaveFile: bool }
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
            dispatch({
                type: SUCCESS_SEND,
                payload: {
                    ...files,
                    Route: response.status,
                    // InfoCabinet: "",
                    FileType: [],
                    elementError: [],
                    FileEnabling: [],
                }
            })
            dispatch(setSpinnerFileDataSubmit(false));
        }
    }).catch(function (error) {
        console.log(error);
        dispatch(setSpinnerFileDataSubmit(false));
        dispatch({
            type: SUCCESS_ERROR,
            payload: { ...files, Route: "" }
        })
    })
}
