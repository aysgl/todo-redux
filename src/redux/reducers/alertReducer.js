import { alertAction } from "../action/alertAction";

const initialState = {
    type: null,
    message: null,
};

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case alertAction.SET_ALERT:
            return {
                ...state,
                type: action.payload.type,
                message: action.payload.message,
            };
        case alertAction.CLEAR_ALERT:
            return initialState;
        default:
            return state;
    }
};

export default alertReducer;
