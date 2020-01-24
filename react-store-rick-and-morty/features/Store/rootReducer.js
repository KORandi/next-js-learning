import {EpisodeBoxReducer} from '../../components/EpisodeBox/reducers';
import {initialState} from "./Store";
import {ApiReducer} from "../Api/reducer";

let reducers = [
    EpisodeBoxReducer,
    ApiReducer
];

export default function (state = initialState, action) {
    return reducers.reduce((acc, val) => ({...state, ...val(acc, action)}), state);
}