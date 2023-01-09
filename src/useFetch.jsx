import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => setData(data));
  }, [url]);

  return [data];
};

export default useFetch;
