import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import meetingReducer from "./slices/meetingSlice";

export const store=configureStore({
    reducer:{
        theme: themeReducer,
        meeting:meetingReducer
    }
})