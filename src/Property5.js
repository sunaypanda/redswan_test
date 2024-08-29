import React from 'react';
import './Property.css';

function Property5() {
  return (
    <div className="property-detail">
      <div className="property-detail-left">
        <img
          src="https://via.placeholder.com/400?text=Property+5+Image"
          alt="Property 5"
          className="property-detail-image"
        />
        <div className="property-detail-text">
          <h2>Country Cottage with Garden</h2>
          <p>
            A charming cottage in the countryside, surrounded by lush gardens and
            offering a peaceful retreat from the city.
          </p>
          <h3>Investment Amount: $320,000</h3>
          <h3>Price per Square Foot: $150</h3>
          <h3>Location: Rural Area</h3>
          <h3>Square Footage: 2,133 sqft</h3>
          <p>Additional Features:</p>
          <ul>
            <li>3 Bedrooms</li>
            <li>2 Bathrooms</li>
            <li>Fireplace in Living Room</li>
            <li>Fruit Orchard on Property</li>
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

export default Property5;
