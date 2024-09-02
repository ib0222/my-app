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
      "x-rapidapi-key":"8362b6d5e1msh7f2eff308e9f278p19c9acjsne6767deadc78",
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