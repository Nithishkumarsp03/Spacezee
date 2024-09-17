import React, { useState } from "react";
import Dashboard from "../dashboard/dashboard";
import "./home.css";

export default function Home() {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
    <div className="home-container">
      <div>
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <i className="fa-solid fa-bars"></i>
        </div>

        {/* Sidebar */}
        <div className={`side-bar ${sidebarVisible ? "active" : ""}`}>
          <h4 style={{ backgroundColor: "rgb(16, 120, 177)", color: "white" }}>
            <i className="fa-solid fa-house"></i> Dashboard
          </h4>
          <h4>
            <i className="fa-regular fa-clipboard"></i> Apply for new LIN
          </h4>
          <h4>
            <i className="fa-solid fa-gauge-simple-high"></i> LIN status
          </h4>
          <h4>
            <i className="fa-regular fa-clipboard"></i> Registration
          </h4>
          <h4>
            <i className="fa-solid fa-genderless"></i> License under CLRA/ISMW
          </h4>
          <h4>
            <i className="fa-regular fa-file"></i> Establishments
          </h4>
          <h4>
            <i className="fa-solid fa-plane-departure"></i> Annual return under Central Acts
          </h4>
          <h4>
            <i className="fa-solid fa-genderless"></i> License (Renewal/Amendment)
          </h4>
          <h4>
            <i className="fa-solid fa-shield"></i> Security Deposit Refund
          </h4>
          <h4>
            <i className="fa-solid fa-genderless"></i> Backlog Entry for License before SSP
          </h4>
        </div>
      </div>

      {/* Dashboard content */}
      <div className={`dashboard-content ${sidebarVisible ? "hidden" : ""}`}>
        <Dashboard />
      </div>
      </div>
      <div className='footer'>
          <div className='footer1'></div>
          <div className='footer2'></div>
      </div>
    </>
  );
}
