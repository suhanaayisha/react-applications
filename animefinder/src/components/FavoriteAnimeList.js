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
                {this.props.favoriteRecipes.map((recipe,index) => {
                    return(
                        <AnimeItem 
                            key={index} 
                            recipe={recipe}
                            favoriteButton={false}
                        />
                    )
                    
                   }) 

                }
            
            </div>

           
        )
    }
}

function mapStateToProps(state){
    return{
        favoriteRecipes: state.favoriteRecipes
    }
}

export default connect(mapStateToProps, null)(FavoriteAnimeList);