import React, {useState} from "react";

function PlantCard({ plant, onDeleteClick }) {
  const [inStock, setInStock]= useState(true)

  function handleStockClick(){
    setInStock(!inStock)
  }

  function handleDelete(){
    onDeleteClick(plant);
    fetch(`http://localhost:6001/plants/${plant.id}`, {
      method: "DELETE"
    })
    .then(res=>res.json())
    .then(data=>console.log(data));
  }

  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {inStock ? (
        <button onClick={handleStockClick} className="primary">In Stock</button>
      ) : (
        <button onClick={handleStockClick} >Out of Stock</button>
      )}
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default PlantCard;
