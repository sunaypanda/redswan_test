import React from 'react';
import './Property.css';

function Property7() {
  return (
    <div className="property-detail">
      <div className="property-detail-left">
        <img
          src="https://via.placeholder.com/400?text=Property+7+Image"
          alt="Property 7"
          className="property-detail-image"
        />
        <div className="property-detail-text">
          <h2>Historic Townhouse with Modern Upgrades</h2>
          <p>
            A beautiful historic townhouse featuring modern upgrades, located in a
            vibrant and sought-after neighborhood.
          </p>
          <h3>Investment Amount: $750,000</h3>
          <h3>Price per Square Foot: $550</h3>
          <h3>Location: Historic District</h3>
          <h3>Square Footage: 1,364 sqft</h3>
          <p>Additional Features:</p>
          <ul>
            <li>3 Bedrooms</li>
            <li>2.5 Bathrooms</li>
            <li>Renovated Kitchen</li>
            <li>Original Hardwood Floors</li>
            <li>Private Garden</li>
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

export default Property7;
