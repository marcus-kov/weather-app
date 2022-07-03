import axios from "axios";
import { API_KEY, OPEN_WEATHER_API_UTL } from "../../utils/constants";

// const OPEN_WEATHER_API_UTL = "http://localhost:8000";

export const getWeather = ({ lat, lon }) => {
  const options = {
    method: "GET",
    url: `${OPEN_WEATHER_API_UTL}/weather?`,
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
    url: `${OPEN_WEATHER_API_UTL}/air_pollution?`,
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
