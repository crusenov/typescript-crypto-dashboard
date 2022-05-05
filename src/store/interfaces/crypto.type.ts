import { Crypto } from "../../models/crypto"
import { cryptoTypes } from "../actionTypes/actionTypes"

export interface FetchCryptoSuccessPayload {
  data: Crypto[]
}

export interface FetchCryptoFailurePayload {
  error: string
}

export interface FetchCryptoRequest {
  type: typeof cryptoTypes.FETCH_CRYPTO_DATA_REQUEST
}

export interface FetchedCryptoSuccess { 
  type: typeof cryptoTypes.FETCHED_CRYPTO_DATA_SUCCESS;
  payload: boolean;
}

export interface FetchCryptoSuccess { 
  type: typeof cryptoTypes.FETCH_CRYPTO_DATA_SUCCESS;
  payload: FetchCryptoSuccessPayload;
}

export interface FetchCryptoFailure { 
  type: typeof cryptoTypes.FETCH_CRYPTO_DATA_FAILURE;
  payload: FetchCryptoFailurePayload;
}

export interface SetWatchListData { 
  type: typeof cryptoTypes.SET_WATCHLIST_DATA_SUCCESS;
  payload: string[];
}

export interface StartLoading { 
  type: typeof cryptoTypes.START_CRYPTO_DATA_LOADING;
  payload: boolean;
}

export interface EndLoading { 
  type: typeof cryptoTypes.END_CRYPTO_DATA_LOADING;
  payload: boolean;
}

// reducer
export interface CryptoState {
  loading: boolean;
  data: Crypto[];
  watchlistData: string[];
  error: string | null;
  isCryptoDataSuccess: boolean; 
}


