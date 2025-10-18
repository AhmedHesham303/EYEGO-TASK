import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { supabase } from "./../../api/client";

export const loginAdmin = createAsyncThunk(
  "admin/loginAdmin",
  async ({ email, password }) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(`Your credentials are wrong`);
    }
    return data;
  }
);

export const logoutAdmin = createAsyncThunk(
  "admin/logoutAdmin",
  async () => {
    let { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(`error while loggingout`);
    }
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: false,
    admin: null,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
        state.error = null;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.admin = null;
        state.error = action.error.message;
      })
      .addCase(logoutAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = null;
        state.error = null;
      });
  },
});

export default adminSlice.reducer;
