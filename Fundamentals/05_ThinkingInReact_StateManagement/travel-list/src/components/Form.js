import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  /*
  If we place the state here inside the Form component, there is no way for the PackingList component to know the data about the packing items
  and since it is not the child component we also cannot pass the state via props. Its a sibling component. For this, we need to use a 
  techique which is to lift up state. So, we take this state here and we will move it to the closest common parent component. Well, its simply
  the app component. So, this component is both, a parent of the Form and the PackingList which are the two components which need this state. 

  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  */

  function handleSubmit(e) {
    // Preventing the page from reloading since its the normal HTML behaviour when we submit the form but in spa applications like React, we dont need this
    e.preventDefault();

    // If description is empty, return
    if (!description) return;

    const newItem = { id: Date.now(), packed: false, description, quantity };
    onAddItems(newItem);

    // Once the form is submitted and the values are taken out, set back the elements to its initial state
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your ❤️ trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {/* {Array.from({ length: 20 }, (_, i) => (
          <option key={i} value={i + 1}>
            {i + 1}
          </option>
        ))} - Also works fine but not preferred because array creation is coupled with options */}

        {/* Preferred because array creation and logic is decoupled and its more readable */}
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
