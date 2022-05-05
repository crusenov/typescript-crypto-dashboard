import { CryptoState } from "../../store/interfaces/crypto.type"

export const initCryptoState: CryptoState = {
  loading: false,
  data: [],
  watchlistData: [],
  error: null,
  isCryptoDataSuccess: false
}
