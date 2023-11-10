import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [newTasks, setNewTasks] = useState(TASKS)
  const [clickedCat, setClickedCat] = useState("All")

  function handleClick(e) {
    setClickedCat(e.target.textContent)
    const updatedTasks = TASKS.filter((task) => e.target.textContent === "All" ? true : e.target.textContent === task.category);
    setNewTasks(updatedTasks)
  }


  function deleteTask(id) {
    const updatedTasks = newTasks.filter(task => task.text !== id)
    setNewTasks(updatedTasks)
  }

  function onTaskFormSubmit(dataObj) {
    const updatedTasks = [...newTasks, dataObj]
    setNewTasks(updatedTasks)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} handleClick={handleClick} clickedCat={clickedCat} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={newTasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
