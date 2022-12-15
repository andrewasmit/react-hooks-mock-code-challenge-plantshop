import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ search, plants, onDeleteClick }) {
  
  const plantsToDisplay=plants.filter(plant=>{
    return search.toLowerCase() === "" ? plant
    : plant.name.toLowerCase().includes(search);
  })
  .map(plant=>{
    return <PlantCard 
                key = {plant.id} 
                plant={plant} 
                onDeleteClick={onDeleteClick}
            />
  })

  return (
    <ul className="cards">
      {plantsToDisplay}
    </ul>
  );
}

export default PlantList;
