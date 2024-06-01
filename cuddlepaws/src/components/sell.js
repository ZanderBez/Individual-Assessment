import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../stylesheet/sell.css'

function Sell() {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    price: '',
    description: ''
  });
  const [productList, setProductList] = useState([]);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/petItems', formData);
      const savedItem = response.data;
      setProductList(prevList => [...prevList, savedItem]);
      setFormData({
        image: '',
        name: '',
        price: '',
        description: ''
      });
      alert("Your item was successfully added ")
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div className='sell-back'>
      <div className='sell-text'>
        <h1>Sell Your items</h1>
        <p>Here You can Add your own Item and we will sell it for you:</p>
      </div>
      <form onSubmit={handleSubmit} className="sell-form">
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={formData.image}
          onChange={handleChange}
          required
        />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default Sell;
