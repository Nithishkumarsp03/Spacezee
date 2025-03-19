import React from "react";
import Header from "../../Components/header";
import { IoIosArrowForward } from "react-icons/io";
import { IoHelpCircleSharp } from "react-icons/io5";
import Tick from "../../Assets/tickicon.png";
import "./dashboard.css";

export default function Dashboard() {
  return (
    <div>
      <div style={{ height: "100%", width: "100%", overflowX: "hidden" }}>
        <div className="header">
          <Header />
        </div>
        <div className="page3-body">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              height: "100%",
            }}
          >
            <div className="page3-content">
              <div className="page1-navigation">
                <p>Dashboard</p>
                <IoIosArrowForward
                  style={{ marginTop: "0.2%", marginRight: "-0.5%" }}
                />
                <p>Returns</p>
                <IoIosArrowForward
                  style={{ marginTop: "0.2%", marginRight: "-0.5%" }}
                />
                <p>GSTR-1/IFF</p>
              </div>
              <div className="paymentoftax" style={{ marginBottom: "0" }}>
                <div className="paymentoftax-header">
                  <div
                    className="paymentoftaxheader-left"
                    style={{ maxWidth: "70%" }}
                  >
                    <p>
                      GSTR-1 - Details of outward supplies of goods or services
                    </p>
                  </div>
                  <div className="paymentoftaxheader-right">
                    <p>Help</p>
                    <IoHelpCircleSharp style={{ marginTop: "3px" }} />
                  </div>
                </div>
                <div
                  className="page1-content-body-card1"
                  style={{ height: "80px", width: "90%" }}
                >
                  <div>
                    <div className="first3">GSTIN -32BACXM3031K1Z5</div>
                    <div className="first3">Legal Name - Ramanadhan V</div>
                    <div className="first3">Trade Name - KR BAKERS</div>
                    <div className="first6">FY - 2022-2023</div>
                    <div className="first6">Return period - September</div>
                    <div className="first6">Status - Not Filed</div>
                  </div>
                </div>
              </div>
              <div className="dashboard-checkbox">
                <input type="checkbox" />
                <div>File Nil GSTR-1</div>
              </div>
              <div
                className="dashboard-checkbox"
                style={{
                  backgroundColor: "#2c4e86",
                  fontSize: "17px",
                  padding: "10px",
                  color: "white",
                  marginTop: "30px",
                  marginBottom: "15px",
                }}
              >
                <div
                  className="paymentoftaxheader-left"
                  style={{ maxWidth: "70%" }}
                >
                  <p>ADD RECORD DETAILS</p>
                </div>
              </div>
              <div className="add-box-container">
                <div className="add-boxes">
                  <div className="add-boxes-upper-part">
                    4A, 4B, 6B, ec - 82B, SEZ, DE Invoices
                  </div>
                  <div className="add-boxes-lower-part">
                    <img src={Tick} alt="" />
                    <div>0</div>
                  </div>
                </div>
                <div className="add-boxes">
                  <div className="add-boxes-upper-part">
                    5A - B2C (Large) Invoices
                  </div>
                  <div className="add-boxes-lower-part">
                    <img src={Tick} alt="" />
                    <div>0</div>
                  </div>
                </div>
                <div className="add-boxes">
                  <div className="add-boxes-upper-part">
                    GA - Exports Invoices
                  </div>
                  <div className="add-boxes-lower-part">
                    <img src={Tick} alt="" />
                    <div>0</div>
                  </div>
                </div>
                <div className="add-boxes">
                  <div className="add-boxes-upper-part">7 - B2C (Others)</div>
                  <div className="add-boxes-lower-part">
                    <img src={Tick} alt="" />
                    <div>0</div>
                  </div>
                </div>
                <div className="add-boxes">
                  <div className="add-boxes-upper-part">
                    8A, 8B, 8C, 80 - Nil Rated Supplies
                  </div>
                  <div className="add-boxes-lower-part">
                    <img src={Tick} alt="" />
                    <div>0</div>
                  </div>
                </div>
                <div className="add-boxes">
                  <div className="add-boxes-upper-part">
                    9B - Credit 1 Debit Notes (Registered)
                  </div>
                  <div className="add-boxes-lower-part">
                    <img src={Tick} alt="" />
                    <div>0</div>
                  </div>
                </div>
                <div className="add-boxes">
                  <div className="add-boxes-upper-part">
                    9B - Credit I Debit Notes (Unregistered)
                  </div>
                  <div className="add-boxes-lower-part">
                    <img src={Tick} alt="" />
                    <div>0</div>
                  </div>
                </div>
                <div className="add-boxes">
                  <div className="add-boxes-upper-part">
                    IIA(I), 1 IA(2) - Tax Liability (Advance Received)
                  </div>
                  <div className="add-boxes-lower-part">
                    <img src={Tick} alt="" />
                    <div>0</div>
                  </div>
                </div>
                <div className="add-boxes">
                  <div className="add-boxes-upper-part">
                    IIB(I), 11B(2) - Adjustment of Advances
                  </div>
                  <div className="add-boxes-lower-part">
                    <img src={Tick} alt="" />
                    <div>0</div>
                  </div>
                </div>
                <div className="add-boxes">
                  <div className="add-boxes-upper-part">
                    12 - HSN-wise summary of outward supplies
                  </div>
                  <div className="add-boxes-lower-part">
                    <img src={Tick} alt="" />
                    <div>0</div>
                  </div>
                </div>
                <div className="add-boxes">
                  <div className="add-boxes-upper-part">
                    13 - Documents Issued
                  </div>
                  <div className="add-boxes-lower-part">
                    <img src={Tick} alt="" />
                    <div>0</div>
                  </div>
                </div>
              </div>
              <div
                className="dashboard-checkbox"
                style={{
                  backgroundColor: "#2c4e86",
                  fontSize: "17px",
                  padding: "10px",
                  color: "white",
                  marginTop: "30px",
                  marginBottom: "15px",
                }}
              >
                <div
                  className="paymentoftaxheader-left"
                  style={{ maxWidth: "70%" }}
                >
                  <p>AMEND RECORD DETAILS</p>
                </div>
              </div>
              <div className="paymentoftax-subheader">
                <p>
                  The taxpayers for whom e-invoicing is not applicable may
                  ignore the sections/options related to e-invoice download. The
                  downloaded file would be blank in case taxpayer is not
                  e-invoicing or when e-invoices reported to IRP are yet to be
                  processed by GST system
                </p>
              </div>
              <div
                className="dashboard-checkbox"
                style={{
                  backgroundColor: "#2c4e86",
                  fontSize: "17px",
                  padding: "10px",
                  color: "white",
                  marginTop: "30px",
                  marginBottom: "15px",
                }}
              >
                <div
                  className="paymentoftaxheader-left"
                  style={{ maxWidth: "70%" }}
                >
                  <p>E-INVOICE DOWNLOAD HISTORY</p>
                </div>
              </div>
              <div
                className="page4-card2-outside-div-buttons-1"
                style={{ gap: "5px", marginBottom: "4rem" }}
              >
                <button
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    border: "1px solid black",
                  }}
                >
                  BACK
                </button>
                <button
                  style={{
                    backgroundColor: "rgba(64, 64, 198, 0.586)",
                    fontWeight: "400",
                    width: "35%",
                  }}
                >
                  DOWNLOAD DETAILS FROM E-INVOICES (EXCEL).
                </button>
                <button
                  style={{
                    backgroundColor: "rgba(64, 64, 198, 0.586)",
                    fontWeight: "400",
                  }}
                >
                  PREVIEW
                </button>
                <button
                  style={{ backgroundColor: "#14315d", fontWeight: "400" }}
                >
                  RESET
                </button>
                <button
                  style={{
                    backgroundColor: "#14315d",
                    fontWeight: "400",
                    width: "16%",
                  }}
                >
                  GENERATE SUMMARY
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="page4-footer"></div>
      </div>
    </div>
  );
}
