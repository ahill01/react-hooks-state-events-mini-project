import React, {useState} from "react";
import Task from "./Task"
// import { v4 as uuid } from "uuid";

function TaskList({taskList,setTaskList}) {

function removeFromList(text){
  setTaskList(taskList.filter(task => task.text !== text.text))
}

  return (
    <div className="tasks">
      <ul>
        {taskList.map((task) => {return <Task key = {task.text} category ={task.category} text ={task.text} removeFromList = {removeFromList}/>})}
      </ul>
    </div>
  );
}

export default TaskList;
