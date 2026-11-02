import { combineReducers } from 'redux';
import { SET_ANIMES, FAVORITE_ANIME } from '../actions/index';

function animes(state = [], action){
    switch(action.type){
        case SET_ANIMES:
            return action.items;
        default:
            return state;
    }
}

function favoriteAnimes(state = [], action){
    switch(action.type){
        case FAVORITE_ANIME:
            if (state.some(anime => anime.mal_id === action.anime.mal_id)) {
                return state;
            }
            return [...state, action.anime];
        default:
            return state;
    }
}

const rootReducer = combineReducers({ animes, favoriteAnimes });

export default rootReducer;
