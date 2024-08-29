import React from 'react';
import './Property.css';

function Property8() {
  return (
    <div className="property-detail">
      <div className="property-detail-left">
        <img
          src="https://via.placeholder.com/400?text=Property+8+Image"
          alt="Property 8"
          className="property-detail-image"
        />
        <div className="property-detail-text">
          <h2>Mountain Cabin with Scenic Views</h2>
          <p>
            A rustic yet luxurious cabin nestled in the mountains, offering stunning
            views and a peaceful retreat.
          </p>
          <h3>Investment Amount: $540,000</h3>
          <h3>Price per Square Foot: $350</h3>
          <h3>Location: Mountain Range</h3>
          <h3>Square Footage: 1,543 sqft</h3>
          <p>Additional Features:</p>
          <ul>
            <li>4 Bedrooms</li>
            <li>3 Bathrooms</li>
            <li>Stone Fireplace</li>
            <li>Large Deck with Hot Tub</li>
            <li>Hiking Trails Nearby</li>
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

export default Property8;
