import { configureStore } from "@reduxjs/toolkit";
import { NewsStore, newsSlice } from "./states/news";

export interface AppStore {
  news: NewsStore;
}

export default configureStore<AppStore>({
  reducer: {
    news: newsSlice.reducer,
  },
});
