import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  cart: 10,
}

export const newSlice = createSlice({
  name: 'New',
  initialState,
//   reducers: {
//     increment: (state) => {
//       // Redux Toolkit allows us to write "mutating" logic in reducers. It
//       // doesn't actually mutate the state because it uses the Immer library,
//       // which detects changes to a "draft state" and produces a brand new
//       // immutable state based off those changes
//       state.value += 1
//     },
//     decrement: (state) => {
//       state.value -= 1
//     },
//   },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement } = newSlice.actions

export default newSlice.reducer