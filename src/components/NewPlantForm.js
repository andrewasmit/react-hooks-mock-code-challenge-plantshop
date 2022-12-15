import React, {useState} from "react";

function NewPlantForm({ onSubmitForm }) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState("")


  function handleFormSubmit(e){
    e.preventDefault()
    const newPlant= {
      name: name,
      image: image,
      price: price
    }
    console.log(newPlant);
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(newPlant)
    })
    .then(r=>r.json())
    .then(data=>onSubmitForm(data))
    setName("")
    setImage("")
    setPrice("")
  }

  function handleNameChange(e){
    setName(e.target.value);
  }
  function handlePriceChange(e){
    setPrice(e.target.value);
  }
  function handleImageChange(e){
    setImage(e.target.value);
  }


  // Return of JSX
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={name} name={name} placeholder="Plant name" onChange={handleNameChange}/>
        <input type="text" value={image} name={image} placeholder="Image URL" onChange={handleImageChange}/>
        <input type="number" value={price} name={price} step="0.01" placeholder="Price" onChange={handlePriceChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
