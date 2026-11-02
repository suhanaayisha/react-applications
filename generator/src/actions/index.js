export const RECEIVE_MEMES = "RECEIVE_MEMES";
export const NEW_MEME = "NEW_MEME";
export const MEME_ERROR = "MEME_ERROR";

const username = import.meta.env.VITE_IMGFLIP_USERNAME;
const password = import.meta.env.VITE_IMGFLIP_PASSWORD;

function receiveMemes(json){
    const { memes } = json.data;
    return{
        type: RECEIVE_MEMES,
        memes
    }
}

function fetchMemesJson(){
    return fetch("https://api.imgflip.com/get_memes")  
        .then(response => response.json())
}

export function fetchMemes() {
    return function (dispatch){
        return fetchMemesJson()
            .then(json => dispatch(receiveMemes(json)))
            .catch(() => dispatch(memeError('Could not load meme templates.')))
    }
}

export function newMeme(meme){
    return{
        type: NEW_MEME,
        meme
    }
}

export function memeError(message){
    return{
        type: MEME_ERROR,
        message
    }
}

function postMemeJson(params){
    const bodyParams = new URLSearchParams({ ...params, username, password });

    return fetch('https://api.imgflip.com/caption_image', {
        method: "POST",
        body: bodyParams
    }).then(response => response.json());
}

export function createMeme(new_meme_object){
    return function(dispatch){
        if (!username || !password) {
            return dispatch(memeError('Add your imgflip login to .env.local (see .env.example) to create memes.'));
        }
        return postMemeJson(new_meme_object)
            .then(response => response.success
                ? dispatch(newMeme(response))
                : dispatch(memeError(response.error_message)))
            .catch(() => dispatch(memeError('Could not reach imgflip.')))
    }
}
