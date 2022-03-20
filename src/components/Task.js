import React from "react";

function Task({category,text,removeFromList}) {

  function deleteTask(e,text){
    removeFromList(text)
  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick = {(e)=>deleteTask(e, {text})}>X</button>
    </div>
  );
}

export default Task;
