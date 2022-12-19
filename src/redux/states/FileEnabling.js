import axios from "axios";
const initialState = {
    File1: null,
}

const FILE1_PRUEBA = "FILE1_PRUEBA";

export default function FilesReducer(state = initialState, action) {
    switch (action.type) {
        case FILE1_PRUEBA:
            return action.payload;
        default:
            return state;
    }
};

//Prueba
export const setClearTockenInvalidate = (file) => async (dispatch, getState) => {
    const { files } = getState();
    dispatch({
        type: FILE1_PRUEBA,
        payload: { files, File1: file },
    })
}