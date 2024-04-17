import axios, { AxiosResponse } from 'axios';
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
const axiosInstance = axios.create({
    baseURL: 'https://www.alphavantage.co/',
});

export const fetchMarketStatus = (): Promise<AxiosResponse<MarketData>> => {
    return axiosInstance.get('query?function=MARKET_STATUS&apikey=EGE9ODG4XG0ATFV8');
};

export const fetchStockData = (): Promise<AxiosResponse<any>> => {
    return axiosInstance.get('query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=MSFT&apikey=EGE9ODG4XG0ATFV8');
};
