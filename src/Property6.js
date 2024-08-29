import React from 'react';
import './Property.css';

function Property6() {
  return (
    <div className="property-detail">
      <div className="property-detail-left">
        <img
          src="https://via.placeholder.com/400?text=Property+6+Image"
          alt="Property 6"
          className="property-detail-image"
        />
        <div className="property-detail-text">
          <h2>Contemporary Condo in Gated Community</h2>
          <p>
            A sleek, modern condo situated in a secure gated community, offering a 
            blend of luxury and convenience.
          </p>
          <h3>Investment Amount: $380,000</h3>
          <h3>Price per Square Foot: $300</h3>
          <h3>Location: Uptown</h3>
          <h3>Square Footage: 1,267 sqft</h3>
          <p>Additional Features:</p>
          <ul>
            <li>2 Bedrooms</li>
            <li>2 Bathrooms</li>
            <li>Private Balcony</li>
            <li>Community Pool and Gym</li>
            <li>24/7 Security</li>
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

export default Property6;
