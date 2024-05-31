import React, { useEffect, useState } from 'react';
import '../stylesheet/items.css';
import { fetchPetStoreItems } from '../components/API';
import { Link } from 'react-router-dom';
import Pagination from 'react-bootstrap/Pagination';
import '../stylesheet/items.css'

function Items() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    fetchPetStoreItems()
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const itemsPerPage = 6; // Number of items per page
  const indexOfLastItem = activePage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  const renderPaginationItems = () => {
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const paginationItems = [];
    for (let number = 1; number <= totalPages; number++) {
      paginationItems.push(
        <Pagination.Item
          key={number}
          active={number === activePage}
          onClick={() => handlePageChange(number)}
          className="pagination-item"
        >
          {number}
        </Pagination.Item>
      );
    }
    return paginationItems;
  };

  return (
    <div>
      <div className="hero-section">
        <div className='overlay'>
          <div className='welcome-text'>
            <h1>List of Our Products!</h1>
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
        {currentItems.map(item => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} className="product-image" />
            <h2>{item.name}</h2>
            <p>Price: ${item.price.toFixed(2)}</p>
            <button className="product-button">
              <Link to={`/details/${item.id}`}>Buy Now</Link>
            </button>
          </div>
        ))}
      </div>
      <div className="pagination-container">
        <Pagination>{renderPaginationItems()}</Pagination>
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
