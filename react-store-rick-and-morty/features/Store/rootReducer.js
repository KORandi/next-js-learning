import {EpisodeBoxReducer} from '../../components/EpisodeBox/reducers';
import {initialState} from "./Store";
import {HomepageReducer} from "../../pages/index/_reducer";

let reducers = [
    EpisodeBoxReducer,
    HomepageReducer
];

export default function (state = initialState, action) {
    return reducers.reduce((acc, val) => ({...state, ...val(acc, action)}), state);
}