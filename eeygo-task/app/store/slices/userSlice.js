"use client";
import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "../../api/users";

const initialState = {
  users: [],
  status: "idle",
  error: null,
  currentPage: 1,
  usersPerPage: 1,
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    onNavigateNext: (state) => {
      state.currentPage++;
    },
    onNavigatePrev: (state) => {
      state.currentPage--;
    },
    onChangeUsersPerPage: (state, action) => {
      state.usersPerPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users = action.payload.data;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default userSlice.reducer;
