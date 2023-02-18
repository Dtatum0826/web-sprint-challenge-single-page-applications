import React, { useState } from 'react';

const PizzaForm = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [size, setSize] = useState('');
  const [sizeError, setSizeError] = useState('');
  const [topping1, setTopping1] = useState(false);
  const [topping2, setTopping2] = useState(false);
  const [topping3, setTopping3] = useState(false);
  const [topping4, setTopping4] = useState(false);
  const [special, setSpecial] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length < 2) {
      setNameError('Name must be at least 2 characters');
    } else {
      setNameError('');
    }
    if (size === '') {
      setSizeError('Please select a size');
    } else {
      setSizeError('');
    }
    if (name.length >= 2 && size !== '') {
      const payload = {
        name: name,
        size: size,
        topping1: topping1,
        topping2: topping2,
        topping3: topping3,
        topping4: topping4,
        special: special,
      };
      console.log(payload);
    }
  }

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <label htmlFor="name-input">Name:</label>
      <input type="text" id="name-input" value={name} onChange={(event) => setName(event.target.value)} />
      {nameError !== '' && (
        <span>{nameError}</span>
      )}

      <label htmlFor="size-dropdown">Size:</label>
      <select id="size-dropdown" value={size} onChange={(event) => setSize(event.target.value)}>
        <option value="">Select size</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>
      {sizeError !== '' && (
        <span>{sizeError}</span>
      )}

      <label htmlFor="toppings">Toppings:</label>
      <div id="toppings">
        <input type="checkbox" id="topping1" checked={topping1} onChange={() => setTopping1(!topping1)} />
        <label htmlFor="topping1">Topping 1</label>

        <input type="checkbox" id="topping2" checked={topping2} onChange={() => setTopping2(!topping2)} />
        <label htmlFor="topping2">Topping 2</label>

        <input type="checkbox" id="topping3" checked={topping3} onChange={() => setTopping3(!topping3)} />
        <label htmlFor="topping3">Topping 3</label>

        <input type="checkbox" id="topping4" checked={topping4} onChange={() => setTopping4(!topping4)} />
        <label htmlFor="topping4">Topping 4</label>
      </div>

      <label htmlFor="special-text">Special Instructions:</label>
      <input type="text" id="special-text" value={special} onChange={(event) => setSpecial(event.target.value)} />

      <button type="submit" id="order-button">Add to Order</button>
    </form>
  );
}

export default PizzaForm;


