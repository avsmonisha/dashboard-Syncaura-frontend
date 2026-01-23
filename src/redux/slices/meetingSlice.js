
import { createSlice } from "@reduxjs/toolkit";
import {
  createMeeting,
  getMeetings,
  getMeetingById,
  updateMeetingById,
  deleteMeetingById,
} from "../features/meetingThunks.js";

const initialState = {
  meetings: [],
  meeting: null,
  isLoading: false,
  error: null,
};

const meetingSlice = createSlice({
  name: "meeting",
  initialState,
  reducers: {
    clearMeeting(state) {
      state.meeting = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createMeeting.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createMeeting.fulfilled, (state, action) => {
        state.isLoading = false;
        state.meetings.unshift(action.payload.meeting);
      })
      .addCase(createMeeting.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

     
      .addCase(getMeetings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMeetings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.meetings = action.payload;
      })
      .addCase(getMeetings.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getMeetingById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMeetingById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.meeting = action.payload;
      })
      .addCase(getMeetingById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(updateMeetingById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateMeetingById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.meeting = action.payload;

        // update list also
        state.meetings = state.meetings.map((m) =>
          m._id === action.payload._id ? action.payload : m
        );
      })
      .addCase(updateMeetingById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(deleteMeetingById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteMeetingById.fulfilled, (state, action) => {
        state.isLoading = false;

        state.meetings = state.meetings.filter(
          (m) => m._id !== action.meta.arg
        );

        if (state.meeting?._id === action.meta.arg) {
          state.meeting = null;
        }
      })
      .addCase(deleteMeetingById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearMeeting } = meetingSlice.actions;
export default meetingSlice.reducer;
