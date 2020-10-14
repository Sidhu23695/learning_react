import { put, takeLatest } from 'redux-saga/effects';

function* fetchUsers(action) {
    const json = yield fetch('http://localhost:2311/userDetails')
        .then(response => response.json(), );    
    yield put({ type: "USERS_RECEIVED", response: json.Result, });
}

function* saveUser(action) {
    console.log("action", action)
    // const json = yield fetch('http://localhost:2311/userDetails')
    //     .then(response => response.json(), );    
    // yield put({ type: "USER_SAVED", response: json.Success, });
}

export function* actionWatcher() {
    yield takeLatest('GET_USERS', fetchUsers)
    yield takeLatest('SAVE_USER', saveUser)
}