import React, { Component } from 'react';
import SearchAnimes from './SearchAnimes';
import '../styles/index.css';
import AnimeList from './AnimeList';

class App extends Component{
    render(){
        return(
            <div>
                <h2>Anime Finder</h2>
                <SearchAnimes/>
                <AnimeList/>
            </div>
        )
    }
}

export default App;