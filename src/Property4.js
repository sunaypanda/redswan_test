import React from 'react';
import './Property.css';

function Property4() {
  return (
    <div className="property-detail">
      <div className="property-detail-left">
        <img
          src="https://via.placeholder.com/400?text=Property+4+Image"
          alt="Property 4"
          className="property-detail-image"
        />
        <div className="property-detail-text">
          <h2>Urban Loft with Industrial Design</h2>
          <p>
            A chic urban loft featuring exposed brick walls, high ceilings, and large
            windows that flood the space with natural light.
          </p>
          <h3>Investment Amount: $600,000</h3>
          <h3>Price per Square Foot: $550</h3>
          <h3>Location: Downtown</h3>
          <h3>Square Footage: 1,090 sqft</h3>
          <p>Additional Features:</p>
          <ul>
            <li>2 Bedrooms</li>
            <li>2 Bathrooms</li>
            <li>Open Plan Living</li>
            <li>Pet-Friendly Building</li>
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

export default Property4;
