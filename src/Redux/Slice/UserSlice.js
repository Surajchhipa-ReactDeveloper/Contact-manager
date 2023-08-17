import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "1",
    title: "Suraj",
  },
  reducers: {
    createUser: (state, action) => {},
    updateUser: (state, action) => {},
    deleteUser: (state, action) => {},
  },
});

export const { createUser, updateUser, deleteUser } = userSlice.actions; // Destructure and export actions

export default userSlice.reducer; // Export the reducer
