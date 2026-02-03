import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../config/axios";

// CREATE
export const createItem = createAsyncThunk(
  "example/createItem",
  async (data, { rejectWithValue }) => {
    try {
      const res = await api.post("/items", data);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to create item"
      );
    }
  }
);

// READ
export const fetchItems = createAsyncThunk(
  "example/fetchItems",
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get("/items");
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch items"
      );
    }
  }
);

// UPDATE
export const updateItem = createAsyncThunk(
  "example/updateItem",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await api.put(`/items/${id}`, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to update item"
      );
    }
  }
);

// DELETE
export const deleteItem = createAsyncThunk(
  "example/deleteItem",
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/items/${id}`);
      return id;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to delete item"
      );
    }
  }
);
