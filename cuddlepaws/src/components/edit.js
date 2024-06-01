import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../stylesheet/edit.css';

function Edit() { 
  const [productList, setProductList] = useState([]);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    image: '',
    name: '',
    price: '',
    description: ''
  });

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/petItems/${id}`);
      setProductList(prevList => prevList.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const handleEdit = (item) => {
    setEditingItem(item._id);
    setFormData(item);
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`http://localhost:5000/api/petItems/${editingItem}`, formData);
      setProductList(prevList => prevList.map(item => item._id === editingItem ? response.data : item));
      setEditingItem(null);
      setFormData({
        image: '',
        name: '',
        price: '',
        description: ''
      });
    } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  return (
    <div className='edit-back'>
      <div className='edit-item-text'>
        Your items you have listed:
      </div>
      <div className="product-list">
        {productList.map(item => (
          <div key={item._id} className="product-card">
            <button className="delete-button" onClick={() => handleDelete(item._id)}>✕</button>
            <button className="edit-button" onClick={() => handleEdit(item)}>Edit</button>
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
      {editingItem && (
        <div className='edit-title-text'>
          <h4>Edit your chosen item </h4>
        <form onSubmit={handleUpdate} className="edit-form">
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
          <button type="submit">Update Item</button>
          <button className="product-button" onClick={() => setEditingItem(null)}>Cancel</button>
        </form>
        </div>
      )}
    </div>
  );
}

export default Edit;
