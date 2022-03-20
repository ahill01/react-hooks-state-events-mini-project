import React, {useState} from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {
const categoryNames = [...categories].slice(1);
const [newCategory, setNewCategory] = useState("Code")
const [newTaskText, setNewTaskText] = useState("")
const [newTask,setNewTask] = useState({
  category:"All",
  text:""
})
function handleDetails(e){
  setNewTaskText(() => e.target.value);
  makeNewTask();
}

function handleCategory(e){
    setNewCategory(e.target.value)
    makeNewTask()
  }

  function makeNewTask(){
    setNewTask({text:newTaskText,
    category:newCategory})
    }
  return (
    <form className="new-task-form" onSubmit={(e) => {e.preventDefault()
      onTaskFormSubmit(newTask)}}>
      <label>
        Details
        <input type="text" name="text" onChange = {handleDetails}/>
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => handleCategory(e)}>
        {categoryNames.map(categoryName => {
       return <option key ={categoryName} value = {categoryName}>{categoryName}</option>
      })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;