import { ActionStrings, Movie } from "../types/types";

export const deleteMovie = (id: number) => {
    return({type: ActionStrings.DELETE_MOVIE, payload: id});
}

export const addMovie = (movie: Movie) => {
    return {type: ActionStrings.ADD_MOVIE, payload: movie};
}