import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../Config";

export function usecontent() {
  const [content, setContent] = useState<any[]>([]);

  useEffect(() => {
    async function fetchContent() {
      const res = await axios.get(`${BACKEND_URL}/api/v1/content`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      setContent(res.data.content);
    }

    fetchContent();
  }, []);

  return content;
}
