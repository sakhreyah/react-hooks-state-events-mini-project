import React from "react";

function CategoryFilter({ categories, handleClick, clickedCat }) {


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => <button key={category} className={category === clickedCat ? "selected" : ""} onClick={handleClick}>{category}</button>)}
    </div>
  );
}

export default CategoryFilter;
