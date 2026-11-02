import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AnimeItem from './AnimeItem';

class FavoriteAnimeList extends Component{
    render(){
        return(
            <div>
                <h4 className='link'><Link to='/'>Home</Link></h4>
                <h2> Favorites </h2>
                {this.props.favoriteAnimes.map(anime => {
                    return(
                        <AnimeItem 
                            key={anime.mal_id} 
                            anime={anime}
                            favoriteButton={false}
                        />
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        favoriteAnimes: state.favoriteAnimes
    }
}

export default connect(mapStateToProps, null)(FavoriteAnimeList);
