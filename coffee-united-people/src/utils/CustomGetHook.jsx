import { useEffect, useState } from "react";
import axios from "axios";

const CustomGetHook = (endpoint) => {
  const [dataState, setDataState] = useState(null);

  useEffect(() => {
    const response = async () => {
      try {
        const { data } = await axios.get(endpoint);
        setDataState(data);
      } catch (err) {
        console.log(err);
      }
    };
    response();
  }, [endpoint]);

  return { dataState };
};

export default CustomGetHook;
