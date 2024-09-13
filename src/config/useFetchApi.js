import { useEffect, useState } from "react";
import { useDisplay } from "../contexts/DisplayContext";
import groupBy from "./groupBy";

export default function useFetchApi() {
  const { display } = useDisplay();
  const [data, setData] = useState(null);
  const [group, setGroup] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        return result;
      })
      .then((data) => setGroup(groupBy(data, display.group)))
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  }, [display]);

  return { data, loading, group };
}
