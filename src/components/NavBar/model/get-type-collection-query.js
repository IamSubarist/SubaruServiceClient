import { BASE_URL } from "@/src/constants";
import axios from "axios";
import { useEffect, useState } from "react";

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    // Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  },
});

export const useGetTypeCollectionQuery = () => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await instance.get("/api/type", {
        method: "GET",
      });

      setResponse(data.data);
    };

    fetchData();
  }, []);

  return { response };
};
