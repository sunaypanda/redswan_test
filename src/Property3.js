import React from 'react';
import './Property.css';

function Property3() {
  return (
    <div className="property-detail">
      <div className="property-detail-left">
        <img
          src="https://via.placeholder.com/400?text=Property+3+Image"
          alt="Property 3"
          className="property-detail-image"
        />
        <div className="property-detail-text">
          <h2>Suburban Family Home with Large Yard</h2>
          <p>
            A spacious home perfect for families, featuring a large backyard, modern
            kitchen, and plenty of living space.
          </p>
          <h3>Investment Amount: $450,000</h3>
          <h3>Price per Square Foot: $220</h3>
          <h3>Location: Suburb</h3>
          <h3>Square Footage: 2,000 sqft</h3>
          <p>Additional Features:</p>
          <ul>
            <li>4 Bedrooms</li>
            <li>2.5 Bathrooms</li>
            <li>Attached Garage</li>
            <li>Nearby Parks and Schools</li>
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

export default Property3;
