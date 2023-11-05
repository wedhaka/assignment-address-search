import { put, takeEvery } from 'redux-saga/effects';
import { SET_SEARCH_TRIES, GET_SEARCH_TRIES, GET_SEARCH_TRIES_SHOW, SET_SEARCH_TRIES_SHOW } from '../services/constants';
import instance from '../axios';


/*
 * Save Select address
 */
function* setSearchTries (result) {
    console.log('SET_SEARCH_TRIES', result);
    // let data = yield instance.post('https://jsonplaceholder.typicode.com/posts/1/comments', {
    //     "postId": 1,
    //     "name": result.data,
    //     "email": "",
    //     "body": ""
    // });
    // if(data.status == 200) {
    //     console.log('Successfully Saved');
    // }
    yield getSearchTries();
}

/*
 * Gell All tries address
 */
function* getSearchTries () {
    let data = yield instance.get('https://jsonplaceholder.typicode.com/posts/1/comments');
    if(data.status == 200) {
        yield put({ type: GET_SEARCH_TRIES_SHOW, data: data['data']});
    }
}

function* posts () {
    yield takeEvery(SET_SEARCH_TRIES, setSearchTries);
    yield takeEvery(GET_SEARCH_TRIES, getSearchTries);
}

export default posts;