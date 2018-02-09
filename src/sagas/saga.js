import { delay } from 'redux-saga'

export function* helloSaga() {
  yield delay(5000);
  console.log('Hello Sagas!');
}
