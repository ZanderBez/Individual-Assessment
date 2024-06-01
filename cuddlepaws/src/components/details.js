import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from 'react-bootstrap/Spinner';
import '../stylesheet/details.css';
import { BsArrowLeft } from 'react-icons/bs';
import { fetchPetStoreItems } from '../components/API';

function Details() {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        let response;
        // Determine if the ID is from MongoDB or the other API
        if (id.length === 24) {
          // MongoDB ObjectID
          response = await axios.get(`http://localhost:5000/api/petItems/${id}`);
        } else {
          // Fallback to fetch from other API
          const data = await fetchPetStoreItems();
          response = { data: data.find(p => p.id === parseInt(id, 10)) };
        }
        setItem(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  const handleBuyNow = () => {
    alert('Thank you for your purchase! Your product will be sent to you in the next 2 business days.');
  };

  if (loading) {
    return (
      <div className="spinner-container">
        <Spinner animation="border" role="status">
          <span className="sr-only"></span>
        </Spinner>
      </div>
    );
  }

  if (!item) {
    return <div>Item not found.</div>;
  }

  return (
    <div>
      <div className='container-fluid'>
        <div className='details-text'><h1>{item.name}</h1>
          <div className="back-button-container">
            <Link to="/items" className="back-button">
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
              <h3>Price: R{item.price.toFixed(2)}</h3>
            </div>
            <button className="detail-button" onClick={handleBuyNow}>Buy Now</button>
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
