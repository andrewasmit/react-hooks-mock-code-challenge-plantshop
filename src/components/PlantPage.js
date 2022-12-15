import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("")

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(res=>res.json())
    .then(data=>setPlants(data))
  },[])

  function handleNewPlantSubmit(newPlant){
    setPlants([...plants, newPlant])
  }

  function handleDelete(deletedPlant){
    console.log("DELETED PLANT: ", deletedPlant)
    const newPlants = plants.filter(plant=>plant.id !== deletedPlant.id)
    setPlants(newPlants)
  }


  return (
    <main>
      <NewPlantForm onSubmitForm={handleNewPlantSubmit}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList 
          search={search} 
          plants={plants} 
          onDeleteClick={handleDelete}/>
    </main>
  );
}

export default PlantPage;
