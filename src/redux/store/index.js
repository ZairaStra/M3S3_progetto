import { configureStore } from "@reduxjs/toolkit";
import musicReducer from "../reducers";

const store = configureStore({
  reducer: {
    music: musicReducer, //più legggibile
  },
});

export default store;
