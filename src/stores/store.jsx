import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/stores/counterSlice";
import themesReducer from "@/stores/themesSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    thema: themesReducer,
  },
});
