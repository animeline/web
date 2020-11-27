import useSWR from "swr";

import apiAnime from "../services/anime";

function useFetch<Data = any, Error = any>(url: string, options = {}) {
  const { data, error } = useSWR<Data, Error>(url, async (url) => {
    const response = await apiAnime.get(url, options);

    return response.data;
  });

  return { data, error };
}

export default useFetch;
