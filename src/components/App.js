import React, {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [taskList,setTaskList] = useState(TASKS)
  const [category, setCategory] = useState("All")
  const filteredTasks = taskList.filter(filterFunction)
  
  function filterFunction(task){
    if(category === "All"){
      return true
    } 
    return task.category === category
  }

 

  function onTaskFormSubmit(newTask){
    setTaskList((taskList) => [...taskList,newTask])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories = {CATEGORIES} category = {category} setCategory = {setCategory}/>
      <NewTaskForm categories = {CATEGORIES} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList taskList = {filteredTasks} setTaskList = {setTaskList}/>
    </div>
  );
}

export default App;
