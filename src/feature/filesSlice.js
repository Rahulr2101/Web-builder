import { createSlice } from "@reduxjs/toolkit";

export const   filesSlice = createSlice({
    name:'files',
    initialState:{
        files:{}
    },

    reducers:{
        addPage: (state,action) =>{
            state.files[action.payload.id] = action.payload.name
            console.log(state.files)
           
        }
    }
})

export const {addPage} = filesSlice.actions
export default filesSlice.reducer