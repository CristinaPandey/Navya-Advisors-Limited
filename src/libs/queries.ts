import { useQuery } from "react-query";
import { fetchMarketStatus, fetchStockData } from "./api.ts";

export const useMarketStatus = () => {
  return useQuery("marketStatus", fetchMarketStatus);
};

export const useStockData = () => {
  return useQuery("stockData", fetchStockData);
};
