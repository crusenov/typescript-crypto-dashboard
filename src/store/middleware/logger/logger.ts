import { take, select } from 'redux-saga/effects';

export default function* logger(): any {
  while (true) {
    const action = yield take('*');
    const state = yield select();
    console.log('====================================');
    console.log('LOGGER ACTION ::', action);
    console.log('LOGGER STATE ::', state);
    console.log('====================================');
  }
}