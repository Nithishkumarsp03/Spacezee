import React from "react";
import { useNavigate } from "react-router-dom";
import Subheader from "../../Components/Subheader/Subheader";
import { MdKeyboardArrowDown } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import Eway from "../../assets/eway.jpg";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div className="home-header">
        <Subheader />
      </div>
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li className="with-arrow">
            Laws{" "}
            <span>
              <MdKeyboardArrowDown style={{ margin: "4px" }} />
            </span>
            <div className="drop-down">
              <ul>
                <li>Rules</li>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#337b9b",
                    border: "none",
                    margin: 0,
                  }}
                />
                <li>Forms</li>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#337b9b",
                    border: "none",
                    margin: 0,
                  }}
                />
                <li>Notifications</li>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#337b9b",
                    border: "none",
                    margin: 0,
                  }}
                />
                <li>Circulars</li>
              </ul>
            </div>
          </li>
          <li className="with-arrow">
            Help{" "}
            <span>
              <MdKeyboardArrowDown style={{ margin: "4px" }} />
            </span>
            <div className="drop-down">
              <ul>
                <li>User Manual</li>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#337b9b",
                    border: "none",
                    margin: 0,
                  }}
                />
                <li>Computer Based Training</li>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#337b9b",
                    border: "none",
                    margin: 0,
                  }}
                />
                <li>FAQs</li>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#337b9b",
                    border: "none",
                    margin: 0,
                  }}
                />
                <li>Advertisement</li>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#337b9b",
                    border: "none",
                    margin: 0,
                  }}
                />
                <li>Tools</li>
              </ul>
            </div>
          </li>
          <li className="with-arrow">
            Search{" "}
            <span>
              <MdKeyboardArrowDown style={{ margin: "4px" }} />
            </span>
            <div className="drop-down">
              <ul>
                <li>Tax Payers</li>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#337b9b",
                    border: "none",
                    margin: 0,
                  }}
                />
                <li>Transporters</li>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#337b9b",
                    border: "none",
                    margin: 0,
                  }}
                />
                <li>Products & Services</li>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#337b9b",
                    border: "none",
                    margin: 0,
                  }}
                />
                <li>Pincode</li>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#337b9b",
                    border: "none",
                    margin: 0,
                  }}
                />
                <li>Pin To Pin Distance</li>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#337b9b",
                    border: "none",
                    margin: 0,
                  }}
                />
                <li>E-way Bill</li>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#337b9b",
                    border: "none",
                    margin: 0,
                  }}
                />
                <li>Update Block Status</li>
              </ul>
            </div>
          </li>
          <li className="with-arrow">
            Registration{" "}
            <span>
              <MdKeyboardArrowDown style={{ margin: "4px" }} />
            </span>
            <div className="drop-down">
              <ul>
                <li>E-Way Bill Registration</li>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#337b9b",
                    border: "none",
                    margin: 0,
                  }}
                />
                <li>Enrolment For Transporters</li>
                <hr
                  style={{
                    height: "1px",
                    backgroundColor: "#337b9b",
                    border: "none",
                    margin: 0,
                  }}
                />
                <li>E-Way Bill For Citizens</li>
              </ul>
            </div>
          </li>
          <li>Statistics</li>
          <li>Contact Us</li>
          <li className="with-arrow" style={{marginRight: "4%", marginLeft: "auto"}} onClick={()=>navigate('/login')}>
            Login{" "}
            <span>
              <CiLogin style={{margin: "4px"}}/>
            </span>
          </li>
        </ul>
      </div>
      <div className="main-home">
        <div className="main-home-body">
          <div className="home-photo">
            <div className="home-photo-img">
              <img src={Eway} alt="" />
            </div>
            <div className="bottom-content">
              E-Way bill system is for GST registered person / enrolled
              transporter for generating the way bill (a document to be carried
              by the person in charge of conveyance) electronically on
              commencement of movement of goods exceeding the value of Rs.
              50,000 in relation to supply or for reasons other than supply or
              due to inward supply from an unregistered person.
            </div>
          </div>
          <div className="home-content">
            <div className="home-content-header">Latest Updates</div>
            <div className="flex-box">
              <hr color="#eceff8" />
              <div className="home-content-flex-box">
                <div className="date" style={{ backgroundColor: "#ffe7e6" }}>
                  07 Oct 2022
                </div>
                <div className="notes">
                  <li>
                    single sign-on (SSO) for e-lnvoice and e-waybill enabled.
                  </li>
                </div>
              </div>
              <hr color="#eceff8" />
              <div className="home-content-flex-box">
                <div className="date" style={{ backgroundColor: "#f4ffd5" }}>
                  14 sept 2022
                </div>
                <div className="notes">
                  <li>
                    e-Waybill for Gold will be available only after the
                    notification issued by Government.
                  </li>
                </div>
              </div>
              <hr color="#eceff8" />
              <div className="home-content-flex-box">
                <div className="date" style={{ backgroundColor: "#e1fcff" }}>
                  11 Apr 2022
                </div>
                <div className="notes">
                  <li>2 Factor authentication enabled</li>
                  <li>Railway ReceiDt No. formats defined.</li>
                </div>
              </div>
              <hr color="#eceff8" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
