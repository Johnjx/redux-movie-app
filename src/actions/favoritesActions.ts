import { ActionStrings, Movie } from "../types/types";


export const toggleFavorites = () => {
    return({type: ActionStrings.TOGGLE_FAVORITES});
}

export const addFavorite = (movie: Movie)=> {
    return({type: ActionStrings.ADD_FAVORITE, payload: movie});
}

export const removeFavorite = (id: number)=> {
    return({type: ActionStrings.REMOVE_FAVORITE, payload: id});
}