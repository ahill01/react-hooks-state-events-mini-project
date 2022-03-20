import React, {useState} from "react";


function CategoryFilter({categories,category,setCategory}) {
// const bttn = document.querySelector('button')
// const [selected,setSelected] = useState(bttn)

function handleClick(e){
  setCategory(e.target.textContent)
}
console.log(category)
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(categoryName => {
       return <button onClick={e => handleClick(e)} key ={categoryName} className={category === categoryName ? "selected":null}>{categoryName}</button>
      })}
      {/* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
