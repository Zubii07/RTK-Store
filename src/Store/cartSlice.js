// Main function of Slice is that we can organise our store data in small pieces. Also reduce Complexity
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    // reducers mutate the state directly. Reducers are like functions which is used to mutate our states. It is also a pure function(which have no side effect)
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
