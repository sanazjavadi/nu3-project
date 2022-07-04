import axios from "axios";

// Set config defaults when creating the instance
export const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

// Now all requests using this instance will wait 2.5 seconds before timing out
instance.defaults.timeout = 2500;
