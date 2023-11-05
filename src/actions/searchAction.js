import { GET_SEARCH_TRIES, SET_SEARCH_TRIES } from "./../services/constants"

export const addressStore = (data) => {
    console.log('action called SET_SEARCH_TRIES Action', data);
    return {
        type: SET_SEARCH_TRIES,
        data
    }
}

export const addressGetAll = () => {
    // console.log('action called GET_SEARCH_TRIES Action');
    return {
        type: GET_SEARCH_TRIES
    }
}