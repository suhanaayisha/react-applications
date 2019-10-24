import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { favoriteRecipe } from '../actions'

class AnimeItem extends Component{
    constructor(){
        super();

        this.state={
            favorited: false
        }
    }

    favorite(recipe){
        this.props.favoriteRecipe(recipe);
        this.setState({favorited: true});
        console.log("fav",this.state.favorited)
        
    }

    render(){
        let { recipe } = this.props;
        return(
            <div className="recipe-item">
                {
                    this.props.favoriteButton?
                        this.state.favorited ? 
                        <div className="star">&#9733;</div>
                        :
                        <div className="star" onClick={() => this.favorite(recipe)}>
                        &#9734;
                        </div>
                    :
                    <div></div>

                }
                
            
                

                <div className="recipe-text">
                    <a href={recipe.url}>
                        <h4 >{recipe.title}</h4>
                    </a>
                    <p>{recipe.ingredients}</p>
                    
                </div>
                <img className="recipe-img" src={recipe.image_url} alt={recipe.title} />
            </div>
        )
    }
}

export default connect(null, { favoriteRecipe })(AnimeItem);