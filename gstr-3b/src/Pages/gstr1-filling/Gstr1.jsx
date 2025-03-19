import React from "react";
import Header from "../../Components/header";
import { IoIosArrowForward } from "react-icons/io";
import { IoHelpCircleSharp } from "react-icons/io5";
import "./gstr1.css"

export default function Gstr1() {
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
                <p style={{ color: "#2c4e86" }}>GSTR-3B</p>
                <IoIosArrowForward
                  style={{ marginTop: "0.2%", marginRight: "-0.5%" }}
                />
                <p style={{ color: "#2c4e86" }}>GSTR-1/IFF</p>
                <IoIosArrowForward
                  style={{ marginTop: "0.2%", marginRight: "-0.5%" }}
                />
                <p>B2CS</p>
              </div>
              <div
                className="page1-content-body-card1"
                style={{ height: "80px" }}
              >
                <div>
                  <div className="first3">GSTIN -32BACXM3031K1Z5</div>
                  <div className="first3">Legal Name - Ramanadhan V</div>
                  <div className="first3">Return Type - GSTR1</div>
                  <div className="first6">FY - 2022-2023</div>
                  <div className="first6">Return period - September</div>
                  <div className="first6">Status - Ready to File</div>
                </div>
              </div>
              <div className="paymentoftax" style={{ marginBottom: "0" }}>
                <div className="paymentoftax-header">
                  <div
                    className="paymentoftaxheader-left"
                    style={{ maxWidth: "70%" }}
                  >
                    <p>B2CS - Add Details</p>
                  </div>
                  <div className="paymentoftaxheader-right">
                    <p>Help</p>
                    <IoHelpCircleSharp style={{ marginTop: "3px" }} />
                  </div>
                </div>
                <div
                  className="paymentoftax-checkbox"
                  style={{ padding: "20px" }}
                >
                  <input
                    type="checkbox"
                    style={{ accentColor: "forestgreen", marginRight: "10px" }}
                  />
                  I hereby solemnly affirm and declare that the information
                  given herein above is true and correct to the best of my/our
                  knowledge and belief and nothing has been concealed therefrom.
                </div>
                <div
                  className="page4-card2-outside-div-buttons-1"
                  style={{ gap: "5px", marginBottom: "4rem" }}
                >
                  <button
                    style={{
                      fontWeight: "400",
                      color: "black",
                      border: "1px solid black",
                      backgroundColor: "white",
                    }}
                  >
                    BACK
                  </button>
                  <button
                    style={{
                      backgroundColor: "#6d7d97",
                      fontWeight: "400",
                      width: "15%"
                    }}
                  >
                    FILE WITH DSC
                  </button>
                  <button
                    style={{
                      backgroundColor: "#6d7d97",
                      fontWeight: "400",
                      marginRight: "40px",
                      width: "15%"
                    }}
                  >
                    FILE WITH EVC
                  </button>
                </div>
                <div className="gstr1-filling-usage-description">
                    <div>DSC USAGE STEPS</div>
                    <ul>
                        <li>Run the emsigner as Administrator.</li>
                        <li>open the portal,fill the appropriate Details got to till Update Register DSC</li>
                        <li>Open a seperate tab in same browser and type https://127.0.0.1:1585</li>
                        <li>Click on Advanced</li>
                        <li>Click proceed to 127.0.0.1(Unsafe)</li>
                        <li>Come back to GST portal, refresh the page</li>
                        <li>Click on register DSC</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="page4-footer"></div>
        </div>
      </div>
    </div>
  );
}
