export const SET_ANIMES = 'SET_ANIMES';
export const FAVORITE_ANIME = 'FAVORITE_ANIME';

export function setAnimes(items){
    return {
        type: SET_ANIMES,
        items
    }
}

export function favoriteAnime(anime){
    return {
        type: FAVORITE_ANIME,
        anime
    }
}
