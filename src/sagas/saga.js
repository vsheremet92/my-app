import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'

function testEffect() {
  console.log('take every fired');
}

export function* helloSaga() {
  yield takeEvery('ADD_ITEM', testEffect);
}
