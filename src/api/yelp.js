import axios from "axios";
import getEnvVars from "../../environment";
const { yelpApiKey } = getEnvVars();

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${yelpApiKey}`,
  },
});
