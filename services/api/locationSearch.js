import axios from "axios";
import {
  API_ADDRESS_SEARCH,
  API_ADDRESS_SEARCH_API_KEY,
} from "../../utils/constants";

export const getLocation = ({ query }) => {
  // if (!query) return;

  const options = {
    method: "GET",
    url: `${API_ADDRESS_SEARCH}/geocode/autocomplete?`,
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
