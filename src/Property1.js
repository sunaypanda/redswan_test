import React from 'react';
import './Property.css';

function Property1() {
  return (
    <div className="property-detail">
      <div className="property-detail-left">
        <img
          src="https://via.placeholder.com/400?text=Property+1+Image"
          alt="Property 1"
          className="property-detail-image"
        />
        <div className="property-detail-text">
          <h2>Modern Apartment in City Center</h2>
          <p>
            A cozy apartment located in the heart of the city, close to all amenities.
            The apartment features modern furnishings, a fully equipped kitchen, and a
            spacious living area.
          </p>
          <h3>Investment Amount: $250,000</h3>
          <h3>Price per Square Foot: $400</h3>
          <h3>Location: Downtown</h3>
          <h3>Square Footage: 625 sqft</h3>
          <p>Additional Features:</p>
          <ul>
            <li>1 Bedroom</li>
            <li>1 Bathroom</li>
            <li>Balcony with City View</li>
            <li>Access to Gym and Pool</li>
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

export default Property1;
