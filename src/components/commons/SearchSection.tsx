import { FormEvent } from "react";
import { useDispatch } from "react-redux";
import { SearchInput } from "../ui/SearchInput";
import { setNews } from "@/redux/states/news";
import { getNews } from "@/services/news.services";

export const SearchSection = () => {
  const dispatch = useDispatch();
  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const inputElement = form.elements.namedItem("search") as HTMLInputElement;
    const inputValue = inputElement.value;

    if (!inputValue) return;

    try {
      const data = await getNews(inputValue);
      dispatch(setNews(data));
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <div className="relative flex place-items-center w-3/5 my-8">
      <form className="w-full" onSubmit={(e) => submit(e)}>
        <SearchInput />
      </form>
    </div>
  );
};
