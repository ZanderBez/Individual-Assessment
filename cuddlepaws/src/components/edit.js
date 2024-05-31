import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../stylesheet/edit.css'

function Edit() { 
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
      <div className="product-list">
        {productList.map(item => (
          <div key={item._id} className="product-card">
            <button className="delete-button" onClick={() => handleDelete(item._id)}>✕</button>
            <img src={item.image} alt={item.name} className="product-image" />
            <h2>{item.name}</h2>
            <p>Price: ${item.price.toFixed(2)}</p>
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

export default Edit;
