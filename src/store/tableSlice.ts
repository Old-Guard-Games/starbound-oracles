import { createSlice } from '@reduxjs/toolkit'
import { RollTable } from '../utility/rolltable';

export interface TableState {
  selected?: RollTable
}

interface TableAction {
  payload: RollTable
}

const initialState: TableState = {}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    selectTable: (state: TableState, action: TableAction) => {
      state.selected = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { selectTable } = tableSlice.actions

export default tableSlice.reducer