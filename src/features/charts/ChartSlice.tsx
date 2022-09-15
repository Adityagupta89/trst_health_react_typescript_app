import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const options = {
  method: "GET",
  url: "https://calories-burned-by-api-ninjas.p.rapidapi.com/v1/caloriesburned",
  params: { activity: "skiing" },
  headers: {
    "X-RapidAPI-Key": "9e8e1830ffmshf3126fe7a40156cp177d99jsnefe0fb85c2ab",
    "X-RapidAPI-Host": "calories-burned-by-api-ninjas.p.rapidapi.com",
  },
};

export const fetchChartData = createAsyncThunk<any[]>(
  "detail/fetchChartData",
  async () => {
    const response = await axios.request(options);
    return response.data;
  }
);

const initialState: {
  chartdata: any[];
} = {
  chartdata: [],
};
const ChartSlice = createSlice({
  name: "Chart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChartData.pending, (state) => {
      console.log("pending");
    });
    builder.addCase(fetchChartData.fulfilled, (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, chartdata: payload };
    });
    builder.addCase(fetchChartData.rejected, (state) => {
      console.log("pending");
    });
  },
});

export default ChartSlice;
