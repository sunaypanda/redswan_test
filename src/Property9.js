import React from 'react';
import './Property.css';

function Property9() {
  return (
    <div className="property-detail">
      <div className="property-detail-left">
        <img
          src="https://via.placeholder.com/400?text=Property+9+Image"
          alt="Property 9"
          className="property-detail-image"
        />
        <div className="property-detail-text">
          <h2>Beachfront Villa with Private Pool</h2>
          <p>
            A luxurious villa located right on the beach, offering exclusive amenities
            and a private pool for the ultimate getaway experience.
          </p>
          <h3>Investment Amount: $2,200,000</h3>
          <h3>Price per Square Foot: $1,200</h3>
          <h3>Location: Beachfront</h3>
          <h3>Square Footage: 1,833 sqft</h3>
          <p>Additional Features:</p>
          <ul>
            <li>5 Bedrooms</li>
            <li>4 Bathrooms</li>
            <li>Infinity Pool</li>
            <li>Outdoor Kitchen and Dining Area</li>
            <li>Private Beach Access</li>
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

export default Property9;
