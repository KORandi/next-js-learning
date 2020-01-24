import {initialState} from "../../features/Store/Store";

export function EpisodeBoxReducer(state = initialState, action) {
    switch (action.type) {
        case 'favourite/add':
            return { ...state, favourites: [...state.favourites, action.payload], lastEpisodeChange: action.payload };
        case 'favourite/remove':
            const fav = state.favourites.filter(fav => fav !== action.payload);
            return { ...state, favourites: fav, lastEpisodeChange: action.payload };
        default:
            return state;
    }
}