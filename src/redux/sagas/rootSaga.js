import {takeEvery, put, call} from "redux-saga/effects";
// import { hideLoader, showLoader } from "../actions/loaderActions";

import { REQUEST_TODO, FETCH_POSTS } from "../types/types"; 

export default function* sagaWatcher() {
  yield takeEvery(REQUEST_TODO, sagaFetchTodo)
}

function* sagaFetchTodo() {
    // yield put(showLoader())
    const payload = yield call(FetchTodos)
    yield put({type: FETCH_POSTS, payload})
    // yield put(hideLoader())
  }

async function FetchTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
  return await response.json()
}