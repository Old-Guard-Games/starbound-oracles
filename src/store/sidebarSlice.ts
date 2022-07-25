import { createSlice } from '@reduxjs/toolkit'

export interface SidebarState {
  isOpen: boolean;
}

export const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggle: (state) => {
      state.isOpen = !state.isOpen;
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggle, open, close } = sidebarSlice.actions

export default sidebarSlice.reducer