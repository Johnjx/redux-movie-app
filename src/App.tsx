import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import MovieHeader from './components/MovieHeader';

type AppProps = {
  displayFavorites: boolean;
}

function App(props: AppProps) {
  const { displayFavorites } = props;

  return (
    <div>
      <nav className="navbar">
        <span>Redux Module Project</span>
      </nav>
      <div>
      <MovieHeader/>
      </div>
    </div>
  );
}

export default connect((state: any) => ({
  displayFavorites: state.favoritesReducer.displayFavorites
}))(App);