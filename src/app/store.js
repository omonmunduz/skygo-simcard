import { configureStore } from "@reduxjs/toolkit";
import packagesReducer from "../features/packages/packagesSlice";

export default configureStore({
  reducer: {
    packages: packagesReducer,
  },
});
