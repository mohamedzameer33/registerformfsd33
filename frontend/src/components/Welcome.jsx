import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import AllUsers from "./AllUsers"; // Make sure this exists
import "../App.css";

export default function Welcome() {
  const location = useLocation();
  const userName = location.state?.name || "User";
  const userEmail = location.state?.email || "";
  const userPhone = location.state?.phone || "Not provided";

  const [showUsers, setShowUsers] = useState(false);

  const handleLogout = () => {
    window.location.href = "/";
    alert("Logged out successfully!");
  };

  return (
    <div className="welcome-page">
      {/* Header */}
      <header className="welcome-header">
        <h1>Welcome, {userName}!</h1>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* Info Card */}
      <div className="user-info-card">
        <p>
          <strong>Email:</strong> {userEmail || "Not provided"}
        </p>
        <p>
          <strong>Phone:</strong> {userPhone}
        </p>
      </div>

      {/* Show Users Button */}
      {userEmail === "mohamedzameermpm123@gmail.com" && (
        <div className="all-users-section">
          <button
            className="toggle-users-btn"
            onClick={() => setShowUsers(!showUsers)}
          >
            {showUsers ? "Hide Users" : "Show All Users"}
          </button>

          {showUsers && <AllUsers />}
        </div>
      )}
    </div>
  );
}
