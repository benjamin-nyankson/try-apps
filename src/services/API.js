import { baseURL } from "../Constants/url";
import axios from "axios";
export const API = axios.create({
  baseURL: baseURL,
  // withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept-Language": "en-US,en;q=0.9",
  },
  auth: "",
});
