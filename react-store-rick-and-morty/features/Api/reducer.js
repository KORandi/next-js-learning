import {initialState} from "../../features/Store/Store";

export function ApiReducer(state = initialState, action) {
    switch (action.type) {
        case 'index/fetch-episodes':
            return { ...state, episodes: action.payload };
        default:
            return state;
    }
}