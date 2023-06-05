import { createSlice } from "@reduxjs/toolkit";

interface INews {
  content: string;
  description: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
    url: string;
  };
  title: string;
  url: string;
  isSaved: boolean;
}

export interface NewsStore {
  listNews: INews[];
}

export const NewsEmptyState: NewsStore = {
  listNews: [],
};

export const newsSlice = createSlice({
  name: "news",
  initialState: NewsEmptyState,
  reducers: {
    setNews: (state, action) => ({ ...state, listNews: action.payload }),
    changeState: (state, action) => {
      const { urlToImage, isSaved } = action.payload;

      const listNewsUpdate = state.listNews.map((articles: INews) => ({
        ...articles,
        isSaved:
          urlToImage === articles.urlToImage ? isSaved : articles.isSaved,
      }));

      return {
        ...state,
        listNews: listNewsUpdate,
      };
    },
    resetNews: () => NewsEmptyState,
  },
});

export const { setNews, resetNews, changeState } = newsSlice.actions;

export default newsSlice.reducer;
