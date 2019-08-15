import *  as actionTypes from './contants';
const defaultState = {
    list: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_TRANSLATE_LIST:
            return {
                ...state,
                list:action.list
            };
        default:
            return state;
    }
}