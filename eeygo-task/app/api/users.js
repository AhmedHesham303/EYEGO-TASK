import { supabase } from "./client";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async ({ pageNumber = 1, limit = 2 }) => {
    const start = (pageNumber - 1) * limit;
    const end = start + limit - 1;

    const { data, error, count } = await supabase
      .from("users")
      .select("*", { count: "exact" })
      .range(start, end);

    if (error) throw new Error(error.message);

    return { data, count };
  }
);
