import { configureStore } from '@reduxjs/toolkit'

import resultReducer, {ResultState} from './resultSlice';
import sidebarReducer, {SidebarState} from './sidebarSlice';
import tableReducer, {TableState} from './tableSlice';

export interface AppState {
  results: ResultState,
  table: TableState,
  sidebar: SidebarState
}

export default configureStore({
  reducer: {
    table: tableReducer,
    results: resultReducer,
    sidebar: sidebarReducer
  },
})