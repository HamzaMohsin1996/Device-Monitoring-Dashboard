import axios from "axios";

export const fetchDevices = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return response.data.slice(0, 6);
};