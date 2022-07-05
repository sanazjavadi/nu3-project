import axios from "axios";

// Set config defaults when creating the instance
export const instance = axios.create({
  baseURL:
    process.env.NODE_ENV !== "production"
      ? "http://localhost:3000"
      : "https://nu3-project.vercel.app/",
});

// Now all requests using this instance will wait 2.5 seconds before timing out
instance.defaults.timeout = 2500;
