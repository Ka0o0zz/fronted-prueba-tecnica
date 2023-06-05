import { getNews, getSaveNews } from "@/services/news.services";
import { useQuery } from "react-query";

const DEFAULT_SEARCH = "politica";

export const useFetch = (saved?: boolean) => {
  const { data, isLoading } = useQuery({
    queryFn: async () => {
      if (saved) {
        const news = await getSaveNews();
        return news;
      }

      const news = await getNews(DEFAULT_SEARCH);
      return news;
    },
  });

  return { data, isLoading };
};
