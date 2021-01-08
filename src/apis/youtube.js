import axios from "axios";

const KEY = "AIzaSyAOE1rDLIG7TljB3bZFEbvHnGNnfjeAnSA";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: "5",
    key: KEY,
  },
});
