import React from "react";
import Header from "../../Components/header";
import { IoIosArrowForward } from "react-icons/io";
import { IoHelpCircleSharp } from "react-icons/io5";
import SelectBox from "../../Components/SelectBox/SelectBox";
import InputBox from "../../Components/InputBox/InputBox";

export default function B2bc() {
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
                <p style={{ color: "#2c4e86" }}>GSTR-1/IFF</p>
                <IoIosArrowForward
                  style={{ marginTop: "0.2%", marginRight: "-0.5%" }}
                />
                <p>B2CS</p>
              </div>
              <div className="paymentoftax" style={{ marginBottom: "0" }}>
                <div
                  className="paymentoftax-header"
                  style={{
                    flexDirection: "column",
                    gap: "15px",
                    paddingBottom: "0px",
                  }}
                >
                  <div className="b2b-shadow-box">
                    <div className="paymentoftaxheader-left">
                      <p>7- B2C(Others)</p>
                    </div>
                    <div className="paymentoftaxheader-right">
                      <p>Help</p>
                      <IoHelpCircleSharp style={{ marginTop: "3px" }} />
                    </div>
                  </div>
                  <div className="recepient-wise-count">
                  Other than E-Commerce
                  </div>
                </div>
                <div className="paymentoftax-subheader">
                  <p>There are no invoices to be displayed.</p>
                </div>
                <br/>
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
                      backgroundColor: "#14315d",
                      fontWeight: "400",
                      width: "13%"
                    }}
                  >
                    ADD RECORD
                  </button>
                  <button
                    style={{
                      backgroundColor: "#6d7d97",
                      fontWeight: "400",
                      marginRight: "45px",
                      width: "15%"
                    }}
                  >
                    IMPORT EWB DATA
                  </button>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
              </div>
            </div>
          </div>
          <div className="page4-footer"></div>
        </div>
      </div>
    </div>
  );
}
