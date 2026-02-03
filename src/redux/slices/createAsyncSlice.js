import { createSlice } from "@reduxjs/toolkit";
import {
  createItem,
  fetchItems,
  updateItem,
  deleteItem,
} from "../features/exampleThunks";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  success: false,
};

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    clearError(state) {
      state.error = null;
    },
    resetSuccess(state) {
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder

      // FETCH
      .addCase(fetchItems.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // CREATE
      .addCase(createItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
        state.success = true;
      })
      .addCase(createItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // UPDATE
      .addCase(updateItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateItem.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
        state.success = true;
      })
      .addCase(updateItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // DELETE
      .addCase(deleteItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (item) => item._id !== action.payload
        );
        state.success = true;
      })
      .addCase(deleteItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearError, resetSuccess } = exampleSlice.actions;
export default exampleSlice.reducer;
