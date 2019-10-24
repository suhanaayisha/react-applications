import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AnimeItem from './AnimeItem';

class AnimeList extends Component{
    render(){
        console.log("this.props",this.props);
        return(
            <div>
                {
                    this.props.favoriteRecipes.length > 0 ?
                    <h4 className='link'><Link to='/favorites'>Favorites</Link></h4>
                    :
                    <div></div>
                }
                
                {
                    this.props.recipes.map((recipe, index) => {
                        return(
                            <AnimeItem 
                                key={index} 
                                recipe={recipe}
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