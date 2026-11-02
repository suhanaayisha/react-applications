import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { favoriteAnime } from '../actions'

class AnimeItem extends Component{
    render(){
        const { anime, favorited, favoriteButton } = this.props;
        return(
            <div className="anime-item">
                {
                    favoriteButton &&
                        (favorited ? 
                            <div className="star">&#9733;</div>
                            :
                            <div className="star" onClick={() => this.props.favoriteAnime(anime)}>
                            &#9734;
                            </div>)
                }

                <div className="anime-text">
                    <a href={anime.url} target="_blank" rel="noreferrer">
                        <h4>{anime.title}</h4>
                    </a>
                    <p>{anime.synopsis}</p>
                </div>
                <img className="anime-img" src={anime.images?.jpg?.image_url} alt={anime.title} />
            </div>
        )
    }
}

function mapStateToProps(state, ownProps){
    return {
        favorited: state.favoriteAnimes.some(anime => anime.mal_id === ownProps.anime.mal_id)
    }
}

export default connect(mapStateToProps, { favoriteAnime })(AnimeItem);
