import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Property1 from "./Property1";
import Property2 from "./Property2";
import Property3 from "./Property3";
import Property4 from "./Property4";
import Property5 from "./Property5";
import Property6 from "./Property6";
import Property7 from "./Property7";
import Property8 from "./Property8";
import Property9 from "./Property9";
import ConversationModal from './ConversationModal';

function App() {
  const [userActivity, setUserActivity] = useState({
    city: 0,
    luxury: 0,
    family: 0,
    rural: 0,
    beach: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const [topCategory, setTopCategory] = useState("");
  const [isConversationCompleted, setIsConversationCompleted] = useState(false);

  const properties = [
    {
      id: 1,
      name: "Modern Apartment in City Center",
      image: "https://via.placeholder.com/300?text=City+Apartment",
      description:
        "A cozy apartment located in the heart of the city, close to all amenities.",
      link: "/property1",
      category: "city",
    },
    {
      id: 2,
      name: "Luxury Villa with Private Pool",
      image: "https://via.placeholder.com/300?text=Luxury+Villa",
      description:
        "Enjoy a luxurious stay in this spacious villa with a private pool and garden.",
      link: "/property2",
      category: "luxury",
    },
    {
      id: 3,
      name: "Suburban Family Home with Large Yard",
      image: "https://via.placeholder.com/300?text=Family+Home",
      description:
        "A spacious home perfect for families, featuring a large backyard.",
      link: "/property3",
      category: "family",
    },
    {
      id: 4,
      name: "Urban Loft with Industrial Design",
      image: "https://via.placeholder.com/300?text=Urban+Loft",
      description:
        "A chic urban loft featuring exposed brick walls and high ceilings.",
      link: "/property4",
      category: "city",
    },
    {
      id: 5,
      name: "Country Cottage with Garden",
      image: "https://via.placeholder.com/300?text=Country+Cottage",
      description:
        "A charming cottage in the countryside, surrounded by lush gardens.",
      link: "/property5",
      category: "rural",
    },
    {
      id: 6,
      name: "Contemporary Condo in Gated Community",
      image: "https://via.placeholder.com/300?text=Contemporary+Condo",
      description:
        "A modern condo in a secure gated community, offering luxury and convenience.",
      link: "/property6",
      category: "city",
    },
    {
      id: 7,
      name: "Historic Townhouse with Modern Upgrades",
      image: "https://via.placeholder.com/300?text=Historic+Townhouse",
      description: "A beautiful historic townhouse featuring modern upgrades.",
      link: "/property7",
      category: "city",
    },
    {
      id: 8,
      name: "Mountain Cabin with Scenic Views",
      image: "https://via.placeholder.com/300?text=Mountain+Cabin",
      description: "A rustic yet luxurious cabin nestled in the mountains.",
      link: "/property8",
      category: "rural",
    },
    {
      id: 9,
      name: "Beachfront Villa with Private Pool",
      image: "https://via.placeholder.com/300?text=Beachfront+Villa",
      description:
        "A luxurious villa located right on the beach, offering exclusive amenities.",
      link: "/property9",
      category: "beach",
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const maxCategory = Object.keys(userActivity).reduce((a, b) =>
        userActivity[a] > userActivity[b] ? a : b
      );
      setTopCategory(maxCategory);
      setShowModal(true);
    }, 30000); // Detect user activity after 30 seconds

    return () => clearTimeout(timer);
  }, [userActivity]);

  useEffect(() => {
    if (!isConversationCompleted) {
      const reopenTimer = setTimeout(() => {
        const maxCategory = Object.keys(userActivity).reduce((a, b) =>
          userActivity[a] > userActivity[b] ? a : b
        );
        setTopCategory(maxCategory);
        setShowModal(true);
      }, 60000); // 60 seconds = 1 minute

      return () => clearTimeout(reopenTimer);
    }
  }, [showModal, isConversationCompleted, userActivity]);

  const handlePropertyClick = (category) => {
    setUserActivity((prev) => ({
      ...prev,
      [category]: prev[category] + 1,
    }));
  };

  const handleSaveResponse = (responses) => {
    console.log("Responses:", responses);
    setIsConversationCompleted(true); // Mark conversation as completed
    localStorage.removeItem('currentStep'); // Clear localStorage after completion
    localStorage.removeItem('responses');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (isConversationCompleted) {
      setIsConversationCompleted(false); // Reset for the next session
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo">Logo</div>
        </header>
        <Routes>
          <Route
            path="/"
            element={
              <div className="property-grid">
                {properties.map((property) => (
                  <div
                    key={property.id}
                    className="property-card"
                    onClick={() => handlePropertyClick(property.category)}
                  >
                    <img
                      src={property.image}
                      alt={property.name}
                      className="property-image"
                    />
                    <div className="property-info">
                      <h3>{property.name}</h3>
                      <p>{property.description}</p>
                      <Link to={property.link}>
                        <button className="details-button">See Details</button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            }
          />
          {/* Define other property routes */}
          <Route path="/property1" element={<Property1 />} />
          <Route path="/property2" element={<Property2 />} />
          <Route path="/property3" element={<Property3 />} />
          <Route path="/property4" element={<Property4 />} />
          <Route path="/property5" element={<Property5 />} />
          <Route path="/property6" element={<Property6 />} />
          <Route path="/property7" element={<Property7 />} />
          <Route path="/property8" element={<Property8 />} />
          <Route path="/property9" element={<Property9 />} />
        </Routes>

        {showModal && (
          <ConversationModal
            onClose={handleCloseModal} // Updated onClose handler
            topCategory={topCategory}
            saveResponse={handleSaveResponse}
          />
        )}

        <footer className="App-footer">
          <p>&copy; 2024 Real Estate Demo. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
