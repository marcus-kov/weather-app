import axios from "axios";
import {
  GEO_LOCATION_API_URL,
  API_ADDRESS_SEARCH_API_KEY,
} from "../../utils/constants";

export const getLocation = ({ query }) => {
  // if (!query) return;

  const options = {
    method: "GET",
    url: `${GEO_LOCATION_API_URL}/geocode/autocomplete?`,
    params: {
      apiKey: API_ADDRESS_SEARCH_API_KEY,
      text: query,
      format: "json",
    },
  };

  return axios.request(options).then(function (response) {
    return response.data;
  });
};
