import { configureStore } from "@reduxjs/toolkit";
import ChartSlice from "./charts/ChartSlice";
const store = configureStore({
  reducer: { chart: ChartSlice.reducer },
});
export default store;
