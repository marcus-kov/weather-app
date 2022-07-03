import axios from "axios";
import { API_KEY, API_URL } from "../../utils/constants";

// const API_URL = "http://localhost:8000";

export const getWeather = ({ lat, lon }) => {
  const options = {
    method: "GET",
    url: `${API_URL}/weather?`,
    params: {
      lat,
      lon,
      units: "metric",
      appid: API_KEY,
    },
    headers: {
      "X-RapidAPI-Key": "6c99b57b652c991f2e8efe771f5e1400",
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  return axios.request(options).then(function (response) {
    return response.data;
  });
};

export const getAirQuality = ({ lat, lon }) => {
  const options = {
    method: "GET",
    url: `${API_URL}/air_pollution?`,
    params: {
      lat,
      lon,
      units: "metric",
      appid: API_KEY,
    },
    headers: {
      "X-RapidAPI-Key": "6c99b57b652c991f2e8efe771f5e1400",
      "X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
    },
  };

  return axios.request(options).then(function (response) {
    return response.data;
  });
};
