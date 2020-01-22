import {initialState} from "../../features/Store/Store";

export function EpisodeBoxReducer(state = initialState, action) {
    switch (action.type) {
        case 'favourite/add':
            return { ...state, favourites: [...state.favourites, action.payload], lastEpisodeChange: action.payload.id};
        case 'favourite/remove':
            const fav = state.favourites.filter(fav => fav.id !== action.payload.id);
            return { ...state, favourites: fav, lastEpisodeChange: action.payload.id};
        default:
            return state;
    }
}