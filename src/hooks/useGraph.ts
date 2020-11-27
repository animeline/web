import useSWR from "swr";

function useGraph<Data = any, Error = any>(
  url: string,
  args = {},
  options = {}
) {
  return useSWR<Data, Error>(
    url,
    async (url) => {
      const response = await fetch(url, args);
      const data = await response.json();

      return data.data;
    },
    options
  );
}

export default useGraph;
