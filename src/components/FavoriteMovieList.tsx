import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';
import { removeFavorite } from '../actions/favoritesActions';
import { Movie } from '../types/types';

type MovieHeaderProps = {
    favorites: Movie[];
    removeFavorite: (id: number) => void;
}

const FavoriteMovieList = (props: MovieHeaderProps) => {
    
    return (<div className="col-xs savedContainer">
        <h5>Favorite Movies</h5>
        {
            props.favorites.map(movie=>{
                return <div key={movie.id}>
                    <Link className="btn btn-light savedButton" to={`/movies/${movie.id}`}>
                        {movie.title}
                        <span onClick={() => props.removeFavorite(movie.id)}><span>remove_circle</span></span>
                    </Link> 
                </div>
            })
        }
    </div>);
}

const mapStateToProps = (state: any) => {
    return {
        favorites: state.favoritesReducer.favorites
    }
}

export default connect(mapStateToProps, { removeFavorite })(FavoriteMovieList);