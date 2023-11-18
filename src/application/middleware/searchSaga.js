import { put, takeEvery } from 'redux-saga/effects';
import { SET_SEARCH_TRIES, GET_SEARCH_TRIES, GET_SEARCH_TRIES_SHOW } from '../selector/constants';
import services from '../../infrastructure/services';

/*
 * Save Select address
 */
function* setSearchTries (result) {

    const { api } = services;
    console.log('SET_SEARCH_TRIES', result);
    /*
        let data = yield api.postFindAddress({
            "postId": 1,
            "name": result.data,
            "email": "",
            "body": ""
        });
        if(data.status == 200) {
            console.log('Successfully Saved');
        }
    */
    yield getSearchTries();
}

/*
 * Gell All tries address
 */
function* getSearchTries () {
    const { api } = services;
    let data = yield api.getAllHistory();
    if(data.status == 200) {
        yield put({ type: GET_SEARCH_TRIES_SHOW, data: data['data']});
    }
}

function* posts () {
    yield takeEvery(SET_SEARCH_TRIES, setSearchTries);
    yield takeEvery(GET_SEARCH_TRIES, getSearchTries);
}

export default posts;