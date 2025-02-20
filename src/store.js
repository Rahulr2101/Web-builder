import { configureStore } from '@reduxjs/toolkit'
import filesSlice from './feature/filesSlice'
export default configureStore({
  reducer: {
    files: filesSlice
  }
})