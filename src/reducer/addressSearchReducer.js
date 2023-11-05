import { GET_SEARCH_TRIES_SHOW, SET_SEARCH_TRIES_SHOW } from "./../services/constants"

export const addressSearch = (state = [], action) => {
    switch (action.type) {
      case SET_SEARCH_TRIES_SHOW:
        console.log('reducer called SET_SEARCH_TRIES reducer', action, state);
        return [{title: action.data}];

      case GET_SEARCH_TRIES_SHOW:
          console.log('reducer called GET_SEARCH_TRIES_SHOW reducer', action, state);
          return action.data;
      default:
        return 0;
    }
}