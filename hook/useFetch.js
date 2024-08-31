import { useState, useEffect } from "react";
import axios from "axios";
import { isLoading } from "expo-font";

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading,setIsLoading] = useState(false)
  const [error,setError]= useState(null)
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "x-rapidapi-key":"771b39d4f6msh6e4e5744d6b42c2p151c2cjsn965bcf07e74c",
      "x-rapidapi-host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);

      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("error");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData()
  },[])

  const refetch = () => {
    setIsLoading(true)
    fetchData()
  }

  return {data,isLoading,error,refetch}
};

export default useFetch;