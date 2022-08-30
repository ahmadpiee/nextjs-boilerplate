import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import ProxyServices, { endPoint } from "@redux/ProxyServices";

export const getTotalDeparture = createAsyncThunk(
  "dataJamaah/getTotalDeparture",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await ProxyServices.get(endPoint.getDataByDeparture);
      return fulfillWithValue(response.data);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const getGroupData = createAsyncThunk(
  "dataJamaah/getGroupData",
  async (body, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await ProxyServices.post(endPoint.getDataGroup, body);
      return fulfillWithValue(response.data);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

export const deleteGroupUser = createAsyncThunk(
  "dataJamaah/deleteGroupUser",
  async (body, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await ProxyServices.post(
        endPoint.deleteUserbyDate,
        body
      );
      return fulfillWithValue(response.data);
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);

const departureListSlice = createSlice({
  name: "departureList",
  initialState: {
    totalDeparture: [],
    isLoading: false,
    error: null,
    dataGroup: [],
  },
  reducers: {},
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.users,
      };
    },
    [getTotalDeparture.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getTotalDeparture.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.totalDeparture = action.payload.results;
      state.error = null;
    },
    [getTotalDeparture.rejected]: (state, action) => {
      state.isLoading = false;
      state.totalDeparture = [];
      state.error = action.payload;
    },
    [getGroupData.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getGroupData.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.dataGroup = action.payload.results;
      state.error = null;
    },
    [getGroupData.rejected]: (state, action) => {
      state.isLoading = false;
      state.dataGroup = [];
      state.error = action.payload;
    },
    [deleteGroupUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [deleteGroupUser.fulfilled]: (state) => {
      state.isLoading = false;
      state.error = null;
    },
    [deleteGroupUser.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default departureListSlice;
