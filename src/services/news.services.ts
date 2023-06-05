import { INewsCard } from "@/components";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const options = (body: any) => ({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ ...body }),
});

export const getNews = async (keyword: string) => {
  try {
    const response = await fetch(`${API_URL}news?keyword=${keyword}`);

    if (!response.ok) {
      throw new Error("Error Server");
    }

    const data = await response.json();
    return data.news;
  } catch (error) {
    console.error({ error });
  }
};

export const getSaveNews = async () => {
  try {
    const response = await fetch(`${API_URL}news/save-news`);

    if (!response.ok) {
      throw new Error("Error Server");
    }

    const data = await response.json();
    return data.news;
  } catch (error) {
    console.error({ error });
  }
};

export const saveNews = async (newsToSave: INewsCard) => {
  try {
    const response = await fetch(
      `${API_URL}news/save-and-change`,
      options({ news: newsToSave })
    );

    if (!response.ok) {
      throw new Error("Error Server");
    }

    const data = await response.json();
    return data.news;
  } catch (error) {
    console.error(error);
  }
};
