import { AnyAction } from "redux";
import { cryptoTypes } from "../../actionTypes/actionTypes";
import { CryptoState } from "../../interfaces/crypto.type";
import { updateObject } from "../../../utilities/utilities";
import { initCryptoState } from "../../../utilities/initStates/cryptoState";

const initialState = {
  ...initCryptoState,
};

const startLoading = (state: CryptoState, action: AnyAction) => {
  return updateObject(state, {
    loading: action.payload
  })
}

const endLoading = (state: CryptoState, action: AnyAction) => {
  return updateObject(state, {
    loading: action.payload
  })
}

const fetchDataSuccess = (state: CryptoState, action: AnyAction) => {
  return updateObject(state, {
    data: action.payload.data,
    error: null
  })
}

const setWatchListData = (state: CryptoState, action: AnyAction) => {
  return updateObject(state, {
    watchlistData: action.payload,
  })
}

const fetchedCryptoSucces = (state: CryptoState, action: AnyAction) => {
  return updateObject(state, {
    isCryptoDataSuccess: action.payload
  })
}

const fetchDataFailure = (state: CryptoState, action: AnyAction) => {
  return updateObject(state, {
    data: [],
    error: action.payload.error
  })
}

const cryptoReducer = (state = initialState, action: AnyAction) => {
  switch(action.type) {
    case cryptoTypes.START_CRYPTO_DATA_LOADING: 
      return startLoading(state, action)

    case cryptoTypes.END_CRYPTO_DATA_LOADING: 
      return endLoading(state, action)

    case cryptoTypes.FETCHED_CRYPTO_DATA_SUCCESS: 
      return fetchedCryptoSucces(state, action)

    case cryptoTypes.FETCH_CRYPTO_DATA_SUCCESS: 
      return fetchDataSuccess(state, action)

    case cryptoTypes.FETCH_CRYPTO_DATA_FAILURE: 
      return fetchDataFailure(state, action)

    case cryptoTypes.SET_WATCHLIST_DATA_SUCCESS: 
      return setWatchListData(state, action)

      default: 
        return state
  }
}

export default cryptoReducer