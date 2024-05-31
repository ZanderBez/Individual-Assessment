import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchPetStoreItems } from './API';
import Spinner from 'react-bootstrap/Spinner';
import '../stylesheet/details.css';
import { BsArrowLeft } from 'react-icons/bs';

function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetchPetStoreItems()
      .then(data => {
        const product = data.find(p => p.id === parseInt(id, 10));
        setItem(product);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [id]);

  if (!item) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="sr-only"></span>
        </Spinner>
      </div>
    );
  }

  return (
    <div>
      <div className='container-fluid'>
        <div className='details-text'><h1>{item.name}</h1>
          <div className="back-button-container">
            <Link to="/" className="back-button">
              <BsArrowLeft className="mr-2" />
            </Link>
      </div>
      </div>
        <div className="details-container">
          <div className="image-container">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="info-container">
            <div className='item-name'>
              <h1>{item.name}</h1>
            </div>
            <div className='item-description'>
              <p>{item.description}</p>
            </div>
            <div className='item-price'>
              <h3>Price: ${item.price.toFixed(2)}</h3>
            </div>
            <button className="detail-button">Buy Now</button>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Pet Store. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Details;
