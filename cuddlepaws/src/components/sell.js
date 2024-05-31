import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../stylesheet/sell.css'

function Sell() {
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    price: '',
    description: ''
  });
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/petItems');
        setProductList(response.data);
      } catch (error) {
        console.error('Error fetching items:', error);
      }
    };

    fetchItems();
  }, []); 

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
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/petItems/${id}`);
      setProductList(prevList => prevList.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  return (
    <div>
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

      <div className="product-list">
        {productList.map(item => (
          <div key={item._id} className="product-card">
            <button className="delete-button" onClick={() => handleDelete(item._id)}>✕</button>
            <img src={item.image} alt={item.name} className="product-image" />
            <h2>{item.name}</h2>
            <p>Price: R{item.price.toFixed(2)}</p>
            <button className="product-button">
              <Link to={`/details/${item._id}`}>
                Buy Now
              </Link>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sell;
