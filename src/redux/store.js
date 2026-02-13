import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import meetingReducer from "./slices/meetingSlice";
import notificationReducer from "./slices/notificationSlice";
import documentReducer from "./slices/documentSlice";
import reportReducer from "./slices/reportSlice"; // ← Did you add this?

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    meeting: meetingReducer,
    notification: notificationReducer,
    documents: documentReducer,
    reports: reportReducer, // ← And this?
  },
});