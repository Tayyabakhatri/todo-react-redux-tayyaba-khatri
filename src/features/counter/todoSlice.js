import { createSlice } from "@reduxjs/toolkit";
// import Tasks from "../../Components/Tasks";
 const inputFieldSlice =createSlice({
    name:'todo',
    initialState:{
        tasks:[],
        colors:["#c7eaef","#ffdad1","#ffd49f","#f6f2af"],
        colorIndex:0
    },
    reducers:{
        addTask: (state, action) => {
            const color=state.colors[state.colorIndex]//store the color based on index
            state.tasks.push({text:action.payload,color}); // Add new task to tasks array
            state.colorIndex = (state.colorIndex + 1) % state.colors.length; // Move to next color
          },
          delTask:(state,action )=>{
            state.tasks.splice(action.payload,1)
        },
        editTask:(state,action)=>{
const{index,newText}=action.payload
        }
    }
})
export const {addTask}=inputFieldSlice.actions;
export const {delTask}=inputFieldSlice.actions;
export default inputFieldSlice.reducer;
export const selectTasks = (state) => state.todo.tasks;
// const initialState = {
//     value: 0,
//   }
  
//   export const counterSlice = createSlice({
//     name: 'counter',
//     initialState,
//     reducers: {
//       increment: (state) => {
//         // Redux Toolkit allows us to write "mutating" logic in reducers. It
//         // doesn't actually mutate the state because it uses the Immer library,
//         // which detects changes to a "draft state" and produces a brand new
//         // immutable state based off those changes
//         state.value += 1
//       },
//       decrement: (state) => {
//         state.value -= 1
//       },
//       incrementByAmount: (state, action) => {
//         state.value += action.payload
//       },
//     },
//   })
  
//   // Action creators are generated for each case reducer function
//   export const { increment, decrement, incrementByAmount } = counterSlice.actions
  
//   export default counterSlice.reducer