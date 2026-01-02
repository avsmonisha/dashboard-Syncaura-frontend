import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isDark:
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("isDark")) || false
      : false,
};

const themeSlice=createSlice({
    name: "theme",
    initialState,
    reducers:{
        toggleThemeMethod: (state)=>{
            state.isDark=!state.isDark;
            localStorage.setItem("isDark", JSON.stringify(state.isDark))
        }
    }
})

export const {toggleThemeMethod}=themeSlice.actions
export default themeSlice.reducer;