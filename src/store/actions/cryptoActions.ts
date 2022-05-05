import { cryptoTypes } from "../actionTypes/actionTypes";
import * as cryptoInterfaces from "../interfaces/crypto.type";

export const fetchCryptoRequest = (): cryptoInterfaces.FetchCryptoRequest => ({
  type: cryptoTypes.FETCH_CRYPTO_DATA_REQUEST
})

export const fetchCryptoSuccess = (payload: cryptoInterfaces.FetchCryptoSuccessPayload): cryptoInterfaces.FetchCryptoSuccess => ({
  type: cryptoTypes.FETCH_CRYPTO_DATA_SUCCESS, 
  payload
})

export const startLoading = (payload: boolean): cryptoInterfaces.StartLoading => ({
  type: cryptoTypes.START_CRYPTO_DATA_LOADING, 
  payload
})

export const endLoading = (payload: boolean): cryptoInterfaces.EndLoading => ({
  type: cryptoTypes.END_CRYPTO_DATA_LOADING, 
  payload
})

export const fetchedCryptoSucces = (payload: boolean): cryptoInterfaces.FetchedCryptoSuccess => ({
  type: cryptoTypes.FETCHED_CRYPTO_DATA_SUCCESS, 
  payload
})

export const fetchCryptoFailure = (payload: cryptoInterfaces.FetchCryptoFailurePayload): cryptoInterfaces.FetchCryptoFailure => ({
  type: cryptoTypes.FETCH_CRYPTO_DATA_FAILURE, 
  payload
})

export const setCryptoData = (payload: boolean): cryptoInterfaces.FetchedCryptoSuccess => ({
  type: cryptoTypes.FETCHED_CRYPTO_DATA_SUCCESS, 
  payload
})

export const setWatchlistDataSucces = (payload: string[]): cryptoInterfaces.SetWatchListData => ({
  type: cryptoTypes.SET_WATCHLIST_DATA_SUCCESS, 
  payload
})