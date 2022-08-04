import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/stores/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
