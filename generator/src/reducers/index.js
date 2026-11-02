import { combineReducers } from 'redux';
import { RECEIVE_MEMES, NEW_MEME, MEME_ERROR } from '../actions';

function memes(state = [], action){
    switch(action.type){
        case RECEIVE_MEMES:
            return action.memes;
        default:
            return state;
    }
}

function myMemes(state = [], action){
    switch(action.type){
        case NEW_MEME:
            return [...state, action.meme];
        default:
            return state;
    }
}

function error(state = null, action){
    switch(action.type){
        case MEME_ERROR:
            return action.message;
        case NEW_MEME:
        case RECEIVE_MEMES:
            return null;
        default:
            return state;
    }
}

const rootReducer = combineReducers({ memes, myMemes, error });

export default rootReducer;
