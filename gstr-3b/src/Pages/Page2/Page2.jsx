import React from "react";
import Header from "../../Components/header";
import { IoIosArrowForward } from "react-icons/io";
import "../Page1/page1.css";

export default function Page2() {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <div className="header">
        <Header />
      </div>
      <div className="page1-content">
        <div className="page1-content-body">
          <div className="page1-content-div">
            <div className="page1-navigation">
              <p>Dashboard</p>
              <IoIosArrowForward
                style={{ marginTop: "0.2%", marginRight: "-0.5%" }}
              />
              <p>Returns</p>
              <IoIosArrowForward
                style={{ marginTop: "0.2%", marginRight: "-0.5%" }}
              />
              <p style={{ color: "#2c4e86" }}>GSTR-3B</p>
            </div>
            <div className="page1-content-body-header">
              <p>GSTR-3B - Monthly Return</p>
            </div>
            <div className="page1-content-body-right">
              <p>Facilitation in filing GSTR-3B</p>
            </div>
            <div className="page1-content-body-card1">
              <div>
                <div className="first3">GSTIN -32BACXM3031K1Z5</div>
                <div className="first3">Legal Name - Ramanadhan V</div>
                <div className="first3">Status - Not Filed</div>
                <div className="first6">FY - 2022-2023</div>
                <div className="first6">Return period - September</div>
                <div className="first6">Due Date - 21/10/2022</div>
              </div>
            </div>
            <div className="page2-content-body-card2">
              <p>Help</p>
              <p>
                Please click on a box (tile) and enter relevant details therein.
                Save and click on the next box to enter relevant details. Once
                you have filled up the information relating to a tile, you will
                see gross (summary) figures on the tiles. You can view the
                preview by clicking on Preview button. You can click on Back
                button to go to previous screen anytime. Data saved by you will
                not be deleted.
              </p>
            </div>
            <div className="summary-status">
              <p>
                <a href="https://nfiling.nergyindia.com/gst/gst/gstr3b/summary">
                  Click here
                </a>{" "}
                for system generated summary status for GSTR-3B.
              </p>
              <p>Help manual</p>
            </div>
            <div className="tax-card">
              <div className="tax-inner-card">
                <div className="tax-card-header">
                  <p>3.1 Tax on outward and reverse charge inward supplies</p>
                </div>
                <div className="tax-card-body">
                  <div className="flex-box">
                    <p>Integrated Tax</p>
                    <p>Central tax</p>
                  </div>
                  <div className="flex-box">
                    <p>₹0.00</p>
                    <p>₹9900.00</p>
                  </div>
                  <div className="flex-box">
                    <p>State/UT Tax</p>
                    <p>CESS</p>
                  </div>
                  <div className="flex-box">
                    <p>₹9900.00</p>
                    <p>₹0.00</p>
                  </div>
                </div>
              </div>
              <div className="tax-inner-card">
                <div className="tax-card-header">
                  <p>3.2 Interstate supplies</p>
                </div>
                <div className="tax-card-body">
                  <div className="flex-box">
                    <p>Taxable value</p>
                    <p>Integrated Tax</p>
                  </div>
                  <div className="flex-box">
                    <p>₹0.00</p>
                    <p>₹0.00</p>
                  </div>
                </div>
              </div>
              <div className="tax-inner-card">
                <div className="tax-card-header">
                  <p>4. Eligible ITC</p>
                </div>
                <div className="tax-card-body">
                  <div className="flex-box">
                    <p>Integrated Tax</p>
                    <p>Central tax</p>
                  </div>
                  <div className="flex-box">
                    <p>₹0.00</p>
                    <p>₹450.00</p>
                  </div>
                  <div className="flex-box">
                    <p>State/UT Tax</p>
                    <p>CESS</p>
                  </div>
                  <div className="flex-box">
                    <p>₹450.00</p>
                    <p>₹0.00</p>
                  </div>
                </div>
              </div>
              <div className="tax-inner-card">
                <div className="tax-card-header">
                  <p>5. Exempt, nil and Non GST inward supplies</p>
                </div>
                <div className="tax-card-body">
                  <div className="flex-box">
                    <p>Inter-state supplies</p>
                    <p>Intra-state supplies</p>
                  </div>
                  <div className="flex-box">
                    <p>₹0.00</p>
                    <p>₹0.00</p>
                  </div>
                </div>
              </div>
              <div className="tax-inner-card">
                <div className="tax-card-header">
                  <p>5.1 Interest and Late fee</p>
                </div>
                <div className="tax-card-body">
                  <div className="flex-box">
                    <p>Integrated Tax</p>
                    <p>Central tax</p>
                  </div>
                  <div className="flex-box">
                    <p>₹0.00</p>
                    <p>₹0.00</p>
                  </div>
                  <div className="flex-box">
                    <p>State/UT Tax</p>
                    <p>CESS</p>
                  </div>
                  <div className="flex-box">
                    <p>₹0.00</p>
                    <p>₹0.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="important-message">
              <div className="important-header">
                <p>Important Message</p>
              </div>
              <div className="important-body">
                <p>
                  Once you have filled the relevant tables, please follow the
                  following steps for filing:-
                </p>
                <ul>
                  <li>Please click on 'Save GSTR3B' on the summary page.</li>
                  <li>You may download and preview/save the draft GSTR-3B.</li>
                  <li>
                    Click on 'Proceed to payment' to offset your liabilities.
                  </li>
                  <li>
                    In case of insufficient cash balance to set off the
                    liabilities, challan creation facility has been provided on
                    the same screen.
                  </li>
                  <li>
                    After setting off liabilities, GSTR-3B can be filed by
                    attaching DSC/EVC.
                  </li>
                </ul>
              </div>
            </div>
            <div className="card2-outside-div-div2" style={{height: "10%"}}>
              <div className="card2-outside-div-buttons">
                <div className="back">BACK</div>
                <div className="button-page2-red" style={{backgroundColor:"rgba(255, 0, 0, 0.566)", border: "none"}}>SYSTEM GENERATED GSTR-3B</div>
                <div style={{ backgroundColor: "#286090", color: "white", border: "none" }}>
                SAVE GSTR3B
                </div>
                <div style={{backgroundColor: "rgba(116, 125, 219, 1.5)", color: "white", border: "none"}}>PREVIEW DRAFT GSTR-3B</div>
                <div style={{backgroundColor: "rgba(116, 125, 219, 1.5)", color: "white", border: "none"}}  >PROCEED TO PAYMENT</div>
              </div>
            </div>
            <div className="page1-content-footer" style={{background: "none"}}></div>
          </div>
          
        </div>

      </div>
      
    </div>
  );
}
