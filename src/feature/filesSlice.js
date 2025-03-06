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
      const newElement =  {
        ...element  ,
        extraAttributes:{
          ...element.extraAttributes,
          parent:id
        }
      }
      const file = state.files.find(file => file.path === filePath);
      if (file) {
        if (!file.designer.flexCol[id]) {
          file.designer.flexCol[id] = [];
        }
        file.designer.flexCol[id].splice(index, 0, newElement);
      }
    },

    addElement: (state, action) => {
      const { filePath, element, index } = action.payload;
      const file = state.files.find(file => file.path === filePath);
      if (file) {
      if(element.extraAttributes.parent !== '0'){
          const newElement = {
            ...element,
            extraAttributes:{
              ...element.extraAttributes,
              parent:'0'
            }
          }
          file.designer.elementCol.splice(index,0,newElement)
      }else{
       
          file.designer.elementCol.splice(index, 0, element);
        
      }
    }
     
    },

    removeElement: (state, action) => {
      const { filePath, id } = action.payload;
      const file = state.files.find(file => file.path === filePath);
      if (file) {
        file.designer.elementCol = file.designer.elementCol.filter(el => el.id !== id);
      }
    },

    updateElement: (state, action) => {
      const {  id, element } = action.payload;
      const   filePath = "home"
      const file = state.files.find(file => file.path === filePath);
      if (file) {
        const index = file.designer.elementCol.findIndex(el => el.id === id);
        if (index !== -1) {
          file.designer.elementCol[index] = element;
        }
      }
    },

    removeElementCol: (state, action) => {
      const { filePath, parentId,childId } = action.payload;
      const file = state.files.find(file => file.path === filePath);
      if (file && file.designer.flexCol[parentId]) {
        file.designer.flexCol[parentId] = file.designer.flexCol[parentId].filter(
          (element) => element.id !== childId
        );
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
