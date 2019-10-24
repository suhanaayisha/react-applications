
import { ADD_CHARACTER, REMOVE_HERO } from '../actions';
import { createCharacter } from './helpers';

function heroes(state= [] , action){
    let heroes;
    switch(action.type){
        case ADD_CHARACTER:
            heroes = [...state, createCharacter(action.id)];
            return heroes;
        case REMOVE_HERO:
            heroes = state.filter(item => item.id !== action.id);
            return heroes;
        default:
            return state;
    }
}

export default heroes;