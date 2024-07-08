import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import SnackOrBoozeApi from "./Api";

function NewItemForm({ addNewSnack, addNewDrink }) {
  const [formData, setFormData] = useState({
    type: "snack",
    name: "",
    description: "",
    recipe: "",
    serve: ""
  });

  const history = useHistory();

  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  };

  const handleSubmit = async evt => {
    evt.preventDefault();
    if (formData.type === "snack") {
      const newSnack = await SnackOrBoozeApi.addSnack(formData);
      addNewSnack(newSnack);
    } else {
      const newDrink = await SnackOrBoozeApi.addDrink(formData);
      addNewDrink(newDrink);
    }
    history.push("/");
  };

  return (
    <div>
      <h2>Add a New Item</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="type">Type</label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
          >
            <option value="snack">Snack</option>
            <option value="drink">Drink</option>
          </select>
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="recipe">Recipe</label>
          <input
            id="recipe"
            name="recipe"
            value={formData.recipe}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="serve">Serve</label>
          <input
            id="serve"
            name="serve"
            value={formData.serve}
            onChange={handleChange}
          />
        </div>
        <button>Add Item</button>
      </form>
    </div>
  );
}

export default NewItemForm;