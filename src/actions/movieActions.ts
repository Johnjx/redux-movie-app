import { Action, ActionStrings, Movie } from "../types/types";

export const deleteMovie = (id: number): Action => {
    return({type: ActionStrings.DELETE_MOVIE, payload: id});
}

export const addMovie = (movie: Movie): Action => {
    return {type: ActionStrings.ADD_MOVIE, payload: movie};
}