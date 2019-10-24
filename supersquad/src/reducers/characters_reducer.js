import characters_json from '../data/characters.json';
import { ADD_CHARACTER, REMOVE_HERO } from '../actions';
import { createCharacter } from './helpers';

function characters(state = characters_json, action) {
    let characters;
    switch(action.type){
        case ADD_CHARACTER:
            characters = state.filter(item => item.id !== action.id);
            return characters;
        case REMOVE_HERO:
            characters = [...state, createCharacter(action.id)];
            return characters;
        default:
            return state;
    }
}

export default characters;