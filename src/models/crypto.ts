export interface Crypto {
  id?: string;
  exchangeId: string;
  exchangeUrl: string;
  name: string;
  percentTotalVolume: string;
  rank: string;
  socket: boolean;
  tradingPairs: string;
  updated: number;
  volumeUsd: string;
}

export interface CryptoDto {
  data: Crypto[];
}