import { switchAction } from "../action/switchAction";

const initialState = {
    type: "LIGHT"
}

const switchReducer = (state = initialState, action) => {
    switch (action.type) {
        case switchAction.LIGHT:
            return { ...state, type: "LIGHT" };

        case switchAction.DARK:
            return { ...state, type: "DARK" };

        default:
            return state;
    }
}

export default switchReducer;
