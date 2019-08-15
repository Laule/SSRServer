import * as actionTypes from "./contants";

const defaultState = {
    isLogin: true
};


export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_LOGIN_STATUS:
            return {
                ...state,
                isLogin: action.value
            };
        default:
            return state;
    }
}