import axios, { AxiosResponse } from "axios"
import { call, put } from "redux-saga/effects"
import { CryptoDto } from "../../../models/crypto"
import * as cryptoActions from "../../actions/cryptoActions"

const getGryptoData = () =>
  axios.get<CryptoDto>("https://api.coincap.io/v2/exchanges")

export function* fetchCryptoSaga() {
  yield put(cryptoActions.startLoading(true))

  try {
    const response: AxiosResponse<CryptoDto> = yield call(getGryptoData);
    yield put(cryptoActions.fetchCryptoSuccess(response.data))
    yield put(cryptoActions.fetchedCryptoSucces(true))
    yield put(cryptoActions.endLoading(false))
  } catch(e) {
    if (e instanceof Error) {
      yield put(cryptoActions.fetchCryptoFailure({
        error: e.message
      }))
      yield put(cryptoActions.fetchedCryptoSucces(false))
      yield put(cryptoActions.endLoading(false))
    }    
  }
}
