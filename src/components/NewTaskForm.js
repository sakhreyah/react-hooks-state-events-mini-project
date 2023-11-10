import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [Details, setDetails] = useState("")
  const [selectCat, setSelectCat] = useState("")
  const dataObj = { text: Details, category: selectCat }
  return (
    <form className="new-task-form" onSubmit={(e) => { e.preventDefault(); onTaskFormSubmit(dataObj) }}>
      <label>
        Details
        <input type="text" name="text" value={Details} onChange={(e) => setDetails(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" value={selectCat} onChange={e => setSelectCat(e.target.value)}>
          {categories.map(category => <option key={category} value={category} >{category === "All" ? null : category}</option>)}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
