import { useFetch } from "@/hooks/useFetch";
import { useDispatch } from "react-redux";
import { Header, MainLayout, NewsContainer, SearchSection } from "@/components";
import { setNews } from "@/redux/states/news";
import { useEffect } from "react";
import { ITEMS } from "@/helpers/ItemsHeader";

export default function Home() {
  const dispatch = useDispatch();
  const { data, isLoading } = useFetch();

  useEffect(() => {
    dispatch(setNews(data));
  }, [data, dispatch]);

  return (
    <MainLayout>
      <Header items={ITEMS} />
      <SearchSection />
      <NewsContainer isLoading={isLoading} />
    </MainLayout>
  );
}
