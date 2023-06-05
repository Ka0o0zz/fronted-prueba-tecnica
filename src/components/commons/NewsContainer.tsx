import { NewsCard } from "./NewsCard";
import { useSelector } from "react-redux";

export interface INewsCard {
  url: string;
  title: string;
  urlToImage: string;
  description: string;
  isSaved: boolean;
}

export const NewsContainer = ({ isLoading }: { isLoading: boolean }) => {
  const { listNews } = useSelector((state: any) => state.news);
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      {isLoading && <>Loading...</>}
      {!isLoading &&
        listNews?.map(
          (
            { description, urlToImage, title, url, isSaved }: INewsCard,
            index: number
          ) => (
            <NewsCard
              key={`${title}-${index}-${urlToImage}`}
              description={description}
              urlToImage={urlToImage}
              title={title}
              url={url}
              isSaved={isSaved}
            />
          )
        )}
    </div>
  );
};
