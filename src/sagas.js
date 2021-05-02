import { all, put, takeEvery } from 'redux-saga/effects'
import {
  ADD_ITEM,
  ADD_ITEM_SAGA,
  HIDE,
  HIDE_SAGA,
  REMOVE_ITEM,
  REMOVE_ITEM_SAGA,
  SHOW,
  SHOW_SAGA,
} from './redux/actionTypes'

const delay = ms => new Promise(res => setTimeout(res, ms))

// saga logic and push to redux
export function* addItem() {
  yield delay(1000)
  const payload = Math.floor(Math.random() * 1000)
  yield put({ type: ADD_ITEM, payload })
}

// saga watcher
export function* watchAddItem() {
  yield takeEvery(ADD_ITEM_SAGA, addItem)
}

export function* removeItem() {
  yield put({ type: REMOVE_ITEM })
}
export function* watchRemoveItem() {
  yield takeEvery(REMOVE_ITEM_SAGA, removeItem)
}

export function* show() {
  yield put({ type: SHOW })
}
export function* watchShow() {
  yield takeEvery(SHOW_SAGA, show)
}

export function* hide() {
  yield put({ type: HIDE })
}
export function* watchHide() {
  yield takeEvery(HIDE_SAGA, hide)
}

// root saga
export default function* rootSaga() {
  yield all([watchAddItem(), watchRemoveItem(), watchShow(), watchHide()])
}
