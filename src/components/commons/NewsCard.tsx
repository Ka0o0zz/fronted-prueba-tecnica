/* eslint-disable @next/next/no-img-element */
import { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { INewsCard } from "./NewsContainer";
import { saveNews } from "@/services/news.services";
import { changeState } from "@/redux/states/news";

export const NewsCard = ({
  description,
  urlToImage,
  title,
  url,
  isSaved,
}: INewsCard) => {
  const dispatch = useDispatch();

  const handleSaveNotice = async (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const news = {
      description,
      urlToImage,
      title,
      url,
      isSaved,
    };
    try {
      dispatch(changeState({ urlToImage, isSaved: !isSaved }));
      await saveNews(news);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <a
      href={url}
      className="relative group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={urlToImage} alt="" className="mb-3" />
      <h2 className={`mb-3 text-2xl font-semibold`}>
        {title}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p className={`m-0 text-sm opacity-50`}>{description}</p>
      <div className="absolute top-3 right-4 p-2">
        <button onClick={(e) => handleSaveNotice(e)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className={`w-7 heart-icon ${isSaved ? "active" : ""}`}
          >
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
          </svg>
        </button>
      </div>
    </a>
  );
};
