import { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from '@env';
import env from "react-native-dotenv";

const rapidApiKey = RAPID_API_KEY;
const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


const axios = require('axios');

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}

const options = {
    method: 'GET',
      url: `https://jsearch.p.rapidapi.com/${endpoint}`,
      headers: {
          'x-rapidapi-key': rapidApiKey,
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        },
    params: { ...query},
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert('There was an error fetching data');
    } finally {
      setIsLoading(false);
    }
  }

useEffect(() => { 
    fetchData();
}, [])
    
const refetch = () => {
    setIsLoading(true);
    fetchData();
}
    return { data, isLoading, error, refetch };
}

