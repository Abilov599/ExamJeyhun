import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  data: [],
  error: undefined,
};

export const fetchData = createAsyncThunk("fetchData", async (value) => {
  const res = await axios("http://localhost:3000/blogs");
  if (value === 1) {
    return res.data.sort((a, b) => a.price - b.price);
  } else if (value) {
    return res.data.filter((el) => {
      return el.name.toLowerCase().includes(value.toLowerCase());
    });
  } else {
    return res.data;
  }
});

export const deleteDataById = createAsyncThunk("deleteDataById", async (id) => {
  await axios.delete(`http://localhost:3000/blogs/${id}`);
});

export const postData = createAsyncThunk("postData", async (value) => {
  await axios.post("http://localhost:3000/blogs", value);
});

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default dataSlice.reducer;
