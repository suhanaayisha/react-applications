export const ADD_CHARACTER = 'ADD_CHARACTER';
export const REMOVE_HERO = 'REMOVE_HERO';

export function addCharacterById(id) {
    const action = {
        type: ADD_CHARACTER,
        id
    }
    return action;
} 

export function removeHeroById(id) {
    const action = {
        type: REMOVE_HERO,
        id
    }
    return action;
} 

