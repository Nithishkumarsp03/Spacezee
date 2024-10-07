import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { PiSignOutBold } from "react-icons/pi";
import Dashboardbody from "./Dashboardbody";
import user from '../../assets/user.jpg'

export default function Dashboard() {
  return (
    <div style={{width:'100%', height:'100%'}}>
      <div className="dashboard-header">
        <div className="dashboard-header-name">
          <p>
            Goods and Services Tax
            <br />
            E-Waybill System
          </p>
        </div>
        <div className="dashboard-user">
          <img src={user} alt="" />
        </div>
      </div>
      <div className="dashboard-middle">
        <div className="left-section">
          <IoHomeSharp
            fontSize={"23px"}
            color="white"
            style={{ margin: "3px", marginLeft: "10px", marginRight: "10px" }}
          />
          <div
            style={{
              display: "flex",
              gap: "5px",
              fontWeight: "600",
              height: "100%",
              backgroundColor: "#1fade0",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <div style={{ marginTop: "5px" }}>
              <FaGlobeAmericas />
            </div>
            <p>e-Invoice portal</p>
          </div>
        </div>

        <div className="center-section">
          <p>GSTIN: 29AFDXJ5246J1Z2 - Name: Iron World - User: Tax Payer</p>
        </div>

        <div className="right-section">
          <div><BsQuestionCircleFill /></div>
          <div><PiSignOutBold /></div>
        </div>
      </div>
      <div className="dashboard-body">
        <Dashboardbody />
      </div>
    </div>
  );
}
