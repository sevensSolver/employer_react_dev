import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../utils";
import axios from "axios";

const initialState = {
  loading: false,
  data: null,
  creditDebitNotes: null,
  financeStats: null,
};

export const getPolicy = createAsyncThunk("policy/get", async (data) => {
  try {
    let token = localStorage.getItem("hr-auth-token");
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/policy/info`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getFinanceStats = createAsyncThunk(
  "policy/getFinanceStats",
  async (data) => {
    let token = localStorage.getItem("hr-auth-token");
    try {
      const response = await axios({
        method: "GET",
        url: `${baseUrl}/finance/stats`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getAllCreditDebitNotes = createAsyncThunk(
  "policy/credit-debit-note",
  async () => {
    try {
      let token = localStorage.getItem("hr-auth-token");
      const response = await axios({
        method: "GET",
        url: `${baseUrl}/finance/credit-debit-note`,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const PaymentSlice = createSlice({
  name: "support",
  initialState: initialState,
  reducers: {
    logOut: (state) => {
      state.loading = false;
      state.isAuthenticated = false;
      state.token = null;
      localStorage.clear();
    },
  },
  extraReducers(builder) {
    builder.addCase(getPolicy.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getPolicy.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.result;
    });
    builder.addCase(getPolicy.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getAllCreditDebitNotes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getAllCreditDebitNotes.fulfilled, (state, action) => {
      state.loading = false;
      state.creditDebitNotes = action.payload.result;
    });
    builder.addCase(getAllCreditDebitNotes.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(getFinanceStats.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getFinanceStats.fulfilled, (state, action) => {
      state.loading = false;
      state.financeStats = action.payload.result;
    });
    builder.addCase(getFinanceStats.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export default PaymentSlice.reducer;
