import {combineReducers} from "redux";
import NameSpace from "./name-space";
import {reducer as data} from "./data/data";
import {reducer as moviesList} from "./movies-list/movies-list";


export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.MOVIES_LIST]: moviesList,
});
