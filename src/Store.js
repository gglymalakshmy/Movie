import { configureStore } from '@reduxjs/toolkit'
import newSlice  from './NewSlice';
import counterSlice from './Slice'
const store = configureStore({
  reducer: {
    counter1: counterSlice,
    example: newSlice,
  },
})
export default store;