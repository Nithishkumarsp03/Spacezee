import React from "react";
import Header from "../../Components/header";
import { IoIosArrowForward } from "react-icons/io";
import { IoHelpCircleSharp } from "react-icons/io5";
import InputBox from "../../Components/InputBox/InputBox";
import './page6.css'

export default function Page6() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
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
              <p>Inter-state Supplies</p>
            </div>
            <div className="paymentoftax" style={{marginBottom: "0"}}>
                <div className="paymentoftax-header">
                    <div className="paymentoftaxheader-left" style={{maxWidth: "70%"}}>
                    <p>5. Values of exempt, nil-rated and non-GST inward supplies</p>
                    </div>
                    <div className="paymentoftaxheader-right">
                    <p>Help</p>
                    <IoHelpCircleSharp style={{ marginTop: "3px" }} />
                    </div>
                </div>
                <div className="page6-table">
                    <table className="page6-table-content">
                        <tr>
                            <th style={{width: "60%", backgroundColor: "#f4f4f6"}}>Nature of Supplies</th>
                            <th style={{backgroundColor: "#f4f4f6"}}>Inter-State Supplies (₹)</th>
                            <th style={{backgroundColor: "#f4f4f6"}}>Intra-State Supplies (₹)</th>
                        </tr>
                        <tr>
                            <th>From a supplier under composition scheme, Exempt and Nil rated supply</th>
                            <td><InputBox defaultValue="0.00"/></td>
                            <td><InputBox defaultValue="0.00"/></td>
                        </tr>
                        <tr>
                            <th>Non GST supply</th>
                            <td><InputBox defaultValue="0.00"/></td>
                            <td><InputBox defaultValue="0.00"/></td>
                        </tr>
                    </table>
                </div>
                <div className="page4-card2-outside-div-buttons-1" style={{gap: "5px", marginBottom: "9rem"}}>
                    <button style={{backgroundColor: "#14315d", fontWeight: "400"}}>CANCEL</button>
                    <button style={{backgroundColor: "#14315d", fontWeight: "400", marginRight: "45px"}}>CONFIRM</button>
                </div>
            </div>
          </div>
        </div>
        <div className="page4-footer"></div>
      </div>
      
    </div>
  );
}
