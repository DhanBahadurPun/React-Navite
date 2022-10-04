import { configureStore } from "@reduxjs/toolkit";

import favoriteReducers from "./favorite";

const store = configureStore({
  reducer: {
    fav: favoriteReducers,
  },
});

export default store;
