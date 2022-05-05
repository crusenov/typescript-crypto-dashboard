import createSagaMiddleware from 'redux-saga';
import { all, takeLatest } from "redux-saga/effects"
import logger from "./logger/logger"

import { fetchCryptoSaga } from "./cryptoSaga/cryproSaga"
import { cryptoTypes } from "../actionTypes/actionTypes"

export const sagaMiddleware = createSagaMiddleware();

let sagasArray = [
  takeLatest(cryptoTypes.FETCH_CRYPTO_DATA_REQUEST, fetchCryptoSaga)
]

sagasArray.splice(0, 0, logger())

export function* combineSagas() {
  yield all(sagasArray)
}