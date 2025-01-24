import React, { useState } from "react";
import "tailwindcss";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../features/counter/todoSlice";
const Tasks = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  console.log(tasks);
  const dispatch = useDispatch();
  let [taskInput, setTaskInput] = useState("");
  const handlerButton = () => {
    if (taskInput.trim()) {
      dispatch(addTask(taskInput));
      setTaskInput("");
    }
  };

  return (
    <>
      <div className="bg-[white] p-2 rounded grid grid-flow-col grid-rows-2 gap-4">
        <div className="row-span-3 border bg-[#f4f4f4] p-3 rounded w-1/3">
          <p className="text-[#000]">Tasks</p>
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="border-1 text-[#000]"
            placeholder="enter your task"
          />
          <button onClick={handlerButton}>add task</button>
        </div>
        <div className="row-span-3 border w-2/3 border-amber-400">
          {tasks.map((task, index) => (
            <div key={index}className="text-[#000]">{task}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tasks;
