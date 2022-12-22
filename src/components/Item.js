import React,{ useState } from "react";

function Item({ name, category }) {
  
  const [added, setAdded] = useState(false)

  function handleClick(){

    setAdded(!added)

  }

  const itemClass = added? "in-cart" :""
  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add"> { added? "Remove from cart" :"Add to Cart"}</button>
    </li>
  );
}

export default Item;
