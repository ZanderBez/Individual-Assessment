import React, { useEffect, useState } from 'react';
import '../stylesheet/home.css';
import { fetchPetStoreItems } from './API';
import { Link } from 'react-router-dom';

function Home() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPetStoreItems()
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredItems = items.filter(item =>
    item.id >= 4 && item.id <= 10 &&
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="hero-section">
        <div className='overlay'>
          <div className='welcome-text'>
            <h1>Welcome to Pet Paradise!</h1>
            <p>Your one-stop shop for all your pet's needs. Quality products at great prices.</p>
            <input className='search-bar'
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
        </div>
      </div>
      <div className='card-text'>
        <h1>List of our best products</h1>
      </div>
      <div className="product-list">
        {filteredItems.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h2>{item.name}</h2>
            <p>Price: R{item.price.toFixed(2)}</p>
            <button className="product-button">
              <Link to={`/details/${item.id}`}>
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

export default Home;
