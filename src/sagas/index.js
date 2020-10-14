import { put, takeLatest } from 'redux-saga/effects';

function* fetchUsers(action) {
    const json = yield fetch('http://localhost:2311/userDetails')
        .then(response => response.json(), );    
    yield put({ type: "USERS_RECEIVED", response: json.Result, });
}

export function* actionWatcher() {
    yield takeLatest('GET_USERS', fetchUsers)
}