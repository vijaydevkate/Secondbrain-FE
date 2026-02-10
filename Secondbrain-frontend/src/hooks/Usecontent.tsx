import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../Config";

export function Usecontent() {
  const [content, setContent] = useState([]);

  useEffect(() => {
   
      axios.get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          "Authorization": localStorage.getItem("token"),
        },
      })
      .then((response) => {

      setContent(response.data.content);
      })
    
  }, []);

  return content;
}
