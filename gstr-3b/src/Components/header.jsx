import React from "react";
import Logo from "../Assets/nergy_logo.svg";
import { FaUser } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import "../Styles/components.css";

export default function Header() {
  return (
    <div className="header-page">
      <div className="top">
        <div style={{ width: "25%" }}>
          <img src={Logo} alt="" width={65} height={65} />
        </div>
        <div className="center-text">
          Simulated website - For Educational purpose only
        </div>
        <div className="right-text">Question No: LIN_001AA</div>
      </div>
      <div className="top-2">
        <div className="top-2-content">
          <span>Skip to Main Content</span> A
          <sup style={{ marginRight: "8px" }}>+</sup> A<sup>-</sup>
        </div>
      </div>
      <div className="top-3">
        <div className="top-3-content1">
          <span>Goods and Services Tax</span> <br /> 
          Government of India, States and Union Territories
        </div>
        <div className="top-3-content2">
          <div><FaUser/> RAMANADHAN V</div>
          <div>32BACXM3031K1Z5</div>
        </div>
      </div>
      <div className="top-4">
        <p>Dashboard</p>
        <p>Services <IoMdArrowDropdown/></p>
      </div>
    </div>
  );
}
