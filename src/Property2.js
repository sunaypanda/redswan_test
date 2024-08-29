import React from 'react';
import './Property.css';

function Property2() {
  return (
    <div className="property-detail">
      <div className="property-detail-left">
        <img
          src="https://via.placeholder.com/400?text=Property+2+Image"
          alt="Property 2"
          className="property-detail-image"
        />
        <div className="property-detail-text">
          <h2>Luxury Penthouse with Ocean View</h2>
          <p>
            A stunning penthouse offering panoramic ocean views, state-of-the-art
            amenities, and exclusive access to a private beach.
          </p>
          <h3>Investment Amount: $1,500,000</h3>
          <h3>Price per Square Foot: $1,000</h3>
          <h3>Location: Oceanfront</h3>
          <h3>Square Footage: 1,500 sqft</h3>
          <p>Additional Features:</p>
          <ul>
            <li>3 Bedrooms</li>
            <li>3 Bathrooms</li>
            <li>Private Rooftop Terrace</li>
            <li>24/7 Concierge Service</li>
          </ul>
        </div>
      </div>
      <div className="property-detail-right">
        <form className="interest-form">
          <h3>Express Your Interest</h3>
          <label>
            How much would you like to invest?
            <input type="text" name="investment" placeholder="$" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Property2;
