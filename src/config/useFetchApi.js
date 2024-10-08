import { useEffect, useState } from "react";
import { useDisplay } from "../contexts/DisplayContext";
import groupBy from "./groupBy";

/**
 * Fetches data from the Quicksell API and groups it by the `display.group` criteria.
 *
 * @returns {Object} An object with `data`, `loading`, and `group` properties.
 * `data` is the response from the API. `loading` is a boolean indicating if the data is being fetched.
 * `group` is the response grouped by the `display.group` criteria.
 */

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
