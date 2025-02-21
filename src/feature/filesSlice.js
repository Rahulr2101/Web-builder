import { createSlice } from "@reduxjs/toolkit";

export const filesSlice = createSlice({
  name: "files",
  initialState: {
    files: [],
  },

  reducers: {
    addPage: (state, action) => {
      state.files.push({
        name: action.payload.name,
        path: action.payload.path,
        designer: {
          flexCol: [],
          elementCol: [],
        },
      });  
    },
  },
});

export const { addPage } = filesSlice.actions;
export default filesSlice.reducer;
