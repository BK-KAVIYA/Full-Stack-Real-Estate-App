import React from "react";
import { useQuery } from "react-query";
import data from "../utils/slider.json";

const useProperties = () => {
  const { isLoading, isError, refetch } = useQuery(
    "allProperties",
    () => Promise.resolve({ data }), // Simulate async data fetching
    { refetchOnWindowFocus: false }
  );

  return {
    data,
    isError,
    isLoading,
    refetch,
  };
};

export default useProperties;
