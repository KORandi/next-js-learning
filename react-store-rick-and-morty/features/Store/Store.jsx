import React from 'react';
import rootReducer from "./rootReducer";

export const Store = React.createContext(null);

export const initialState = {
    episodes: [],
    favourites: [],
    lastEpisodeChange: null,
};

export function StoreProvider(prop) {
    const [state, dispatch] = React.useReducer(rootReducer, initialState);
    return (
        <Store.Provider value={{ state, dispatch }}>{prop.children}</Store.Provider>
    );
}