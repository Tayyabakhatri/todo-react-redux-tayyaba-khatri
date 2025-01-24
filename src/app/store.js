import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/todoSlice'
import todoTasks from '../features/counter/todoSlice'

export const store = configureStore({
  reducer: {
    todo: todoTasks
    // counter:counterReducer
  },
})