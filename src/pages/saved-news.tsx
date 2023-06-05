import { Header, MainLayout, NewsContainer } from "@/components";
import { ITEMS } from "@/helpers/ItemsHeader";
import { useFetch } from "@/hooks/useFetch";
import { setNews } from "@/redux/states/news";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  const { data, isLoading } = useFetch(true);

  useEffect(() => {
    dispatch(setNews(data));
  }, [data, dispatch]);

  return (
    <MainLayout>
      <Header items={ITEMS} />
      <h3>Saved News</h3>
      <NewsContainer isLoading={isLoading} />
    </MainLayout>
  );
}
