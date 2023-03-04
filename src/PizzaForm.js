import React, { useState, useEffect } from 'react';
import * as yup from "yup"
import axios from 'axios';

const schema = yup.object().shape({
  name: yup.string().min(2, "name must be at least 2 characters"),
  size: yup.string().oneOf(['small', 'medium', 'large'], 'you must choose a size'),
  topping1: yup.boolean().oneOf([true, false]),
  topping2: yup.boolean().oneOf([true, false]),
  topping3: yup.boolean().oneOf([true, false]),
  topping4: yup.boolean().oneOf([true, false]),
  special: yup.string()


})

const PizzaForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    size: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    special: '',
  });
  const [disabled, setDisabled] = useState(true)
  const [errors, setErrors] = useState({
    name: '',
    size: '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
    special: '',
  })



  const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
  }

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setFormErrors(name, value)
    setFormData({
      ...formData,
      [name]: value,
    });


  };

  useEffect(() => {
    schema.isValid(formData).then(valid => setDisabled(!valid))
  }, [formData])

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('https://reqres.in/api/orders', formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <h1>Order Pizza</h1>
      <form id='pizza-form' onSubmit={handleSubmit}>
        <label htmlFor="name-input">Name:</label>
        <input

          type="text"
          id="name-input"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        { errors.name && errors.name   }
        <label htmlFor="size">Size:</label>
        <select
          id="size-dropdown"
          name="size"
          value={formData.size}
          onChange={handleInputChange}
          required
        >
          <option value="">-- Select size --</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <label htmlFor="topping1">Topping 1:</label>
        <input
          type="checkbox"
          id="topping1"
          name="topping1"
          checked={formData.topping1}
          onChange={handleInputChange}
        />

        <label htmlFor="topping2">Topping 2:</label>
        <input
          type="checkbox"
          id="topping2"
          name="topping2"
          checked={formData.topping2}
          onChange={handleInputChange}
        />
        <label htmlFor="topping3">Topping 3:</label>
        <input
          type="checkbox"
          id="topping3"
          name="topping3"
          checked={formData.topping3}
          onChange={handleInputChange}
        />

        <label htmlFor="topping4">Topping 4:</label>
        <input
          type="checkbox"
          id="topping4"
          name="topping4"
          checked={formData.topping2}
          onChange={handleInputChange}
        />

        <label htmlFor="special">Special Instructions:</label>
        <textarea
          id="special-text"
          name="special"
          value={formData.special}
          onChange={handleInputChange}
        ></textarea>

        <button id='order-button' onClick={handleSubmit} type="submit">Order Now</button>
      </form>


    </div>
  );
};

export default PizzaForm;