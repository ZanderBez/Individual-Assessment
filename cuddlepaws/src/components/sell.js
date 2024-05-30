import React, { useState } from 'react';
import '../stylesheet/sell.css';

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

  const handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: Date.now(),
      image: formData.image,
      name: formData.name,
      price: parseFloat(formData.price),
      description: formData.description
    };
    setProductList(prevList => [...prevList, newItem]);
    setFormData({
      image: '',
      name: '',
      price: '',
      description: ''
    });
    
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
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h2>{item.name}</h2>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>{item.description}</p>
            <button className="product-button">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sell;
