export const removeFavourite = (payload) => {
    return {
        type: 'favourite/remove',
        payload: payload.id
    }
};

export const addFavourite = (payload) => {
    return {
        type: 'favourite/add',
        payload: payload.id
    }
};