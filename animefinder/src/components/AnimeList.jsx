import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AnimeItem from './AnimeItem';

class AnimeList extends Component{
    render(){
        return(
            <div>
                {
                    this.props.favoriteAnimes.length > 0 &&
                    <h4 className='link'><Link to='/favorites'>Favorites</Link></h4>
                }
                
                {
                    this.props.animes.map(anime => {
                        return(
                            <AnimeItem 
                                key={anime.mal_id} 
                                anime={anime}
                                favoriteButton={true}
                            />
                        )
                    } )
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, null)(AnimeList);
