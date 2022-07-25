import { createSlice } from '@reduxjs/toolkit'

export interface ResultState {
  history: ResultEntry[]
}

export interface ResultEntry {
  timestamp: number;
  result: string;
}

export interface AddResultAction {
  payload: ResultEntry;
}

function trimArray<Type>(arr: Type[], max: number): Type[] {
  return arr.slice(Math.max(arr.length - 1 - max, 0));
}

export const resultSlice = createSlice({
  name: 'result',
  initialState: {
    history: [],
  },
  reducers: {
    addResult: (state: ResultState, action: AddResultAction) => {
      state.history = trimArray([...state.history, action.payload],100);
    },
  },
})

// Action creators are generated for each case reducer function
export const { addResult } = resultSlice.actions

export default resultSlice.reducer