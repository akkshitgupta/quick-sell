import { useEffect, useState } from "react";

/**
 * Fetches data from the Quicksell API and groups it by the `display.group` criteria.
 *
 * @returns {Object} An object with `data`, `loading`, and `group` properties.
 * `data` is the response from the API. `loading` is a boolean indicating if the data is being fetched.
 * `group` is the response grouped by the `display.group` criteria.
 */

export default function useFetchApi() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.quicksell.co/v1/internal/frontend-assignment", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setData(response);
      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
