import axios, { AxiosResponse } from "axios";
interface MarketData {
  endpoint: string;
  markets: Market[];
}

interface Market {
  market_type: string;
  region: string;
  primary_exchanges: string;
  local_open: string;
  local_close: string;
  current_status: string;
  notes: string;
}

interface WeeklyAdjustedData {
  MetaData: {
    "1. Information": string;
    "2. Symbol": string;
    "3. Last Refreshed": string;
    "4. Time Zone": string;
  };
  "Weekly Adjusted Time Series": {
    [date: string]: {
      "1. open": string;
      "2. high": string;
      "3. low": string;
      "4. close": string;
      "5. adjusted close": string;
      "6. volume": string;
      "7. dividend amount": string;
    };
  };
}
const axiosInstance = axios.create({
  baseURL: "https://www.alphavantage.co/",
});

export const fetchMarketStatus = (): Promise<AxiosResponse<MarketData>> => {
  return axiosInstance.get(
    "query?function=MARKET_STATUS&apikey=EGE9ODG4XG0ATFV8"
  );
};

export const fetchStockData = (): Promise<
  AxiosResponse<WeeklyAdjustedData>
> => {
  return axiosInstance.get(
    "query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=EGE9ODG4XG0ATFV8"
  );
};
