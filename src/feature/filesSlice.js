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
          flexCol: {},
          elementCol: [],
        },
      });
    },

    removeElementFlex: (state, action) => {
      const { filePath, elementId, parentId } = action.payload;
      const file = state.files.find(file => file.path === filePath);
      if (file && file.designer.flexCol[parentId]) {
        file.designer.flexCol[parentId] = file.designer.flexCol[parentId].filter(
          (element) => element.id !== elementId
        );
      }
    },

    addFlexColElement: (state, action) => {
      const { filePath, element, index, id } = action.payload;
      console.log("FilePath",filePath,"Element",element,"index",index,"ParentId",id)
      const file = state.files.find(file => file.path === filePath);
      if (file) {
        if (!file.designer.flexCol[id]) {
          file.designer.flexCol[id] = [];
        }
        file.designer.flexCol[id].splice(index, 0, element);
      }
    },

    addElement: (state, action) => {
      const { filePath, element, index } = action.payload;
      const file = state.files.find(file => file.path === filePath);
      if (file) {
        file.designer.elementCol.splice(index, 0, element);
      }
    },

    removeElement: (state, action) => {
      const { filePath, elementId } = action.payload;
      const file = state.files.find(file => file.path === filePath);
      if (file) {
        file.designer.elementCol = file.designer.elementCol.filter(el => el.id !== elementId);
      }
    },

    updateElement: (state, action) => {
      const { filePath, id, element } = action.payload;
      const file = state.files.find(file => file.path === filePath);
      if (file) {
        const index = file.designer.elementCol.findIndex(el => el.id === id);
        if (index !== -1) {
          file.designer.elementCol[index] = element;
        }
      }
    },

    removeElementCol: (state, action) => {
      const { filePath, parentId } = action.payload;
      const file = state.files.find(file => file.path === filePath);
      if (file && file.designer.flexCol[parentId]) {
        delete file.designer.flexCol[parentId];
      }
    },
  },
});

export const { 
  addPage, 
  removeElementFlex, 
  addFlexColElement, 
  addElement, 
  updateElement, 
  removeElement, 
  removeElementCol 
} = filesSlice.actions;

export default filesSlice.reducer;
