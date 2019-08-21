import {combineReducers} from "redux";
import {reducer as homeReducer} from "../containers/Home/store";
import {reducer as headerReducer} from "../components/Header/store";
import {reducer as translateReducer} from "../containers/Translate/store";

const reducer = combineReducers({
    home: homeReducer,
    header: headerReducer,
    translate: translateReducer
});
export default reducer;