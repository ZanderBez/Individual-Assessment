import React, { useEffect, useState } from 'react';
import '../stylesheet/items.css';
import { fetchPetStoreItems } from '../components/API';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Items() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const formData = {};

  useEffect(() => {
    axios.post('/api/users/petItems', formData)  // Update to your backend endpoint
      .then(response => setItems(response.data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);
  
  useEffect(() => {
    fetchPetStoreItems()
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="hero-section">
        <div className='overlay'>
          <div className='welcome-text'>
            <h1>List of Our Products !</h1>
            <p>Explore our curated collection of top-quality products for your beloved pets</p>
            <input className='search-bar'
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className="product-list">
        {filteredItems.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h2>{item.name}</h2>
            <p>Price: ${item.price.toFixed(2)}</p>
            <button className="product-button"><Link to={`/details/${item.id}`}>
            Buy Now
              </Link>
              </button>
          </div>
        ))}
      </div>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Pet Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Items;
