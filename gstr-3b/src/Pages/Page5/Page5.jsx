import React from "react";
import Header from "../../Components/header";
import { IoIosArrowForward } from "react-icons/io";
import { IoHelpCircleSharp } from "react-icons/io5";
import InputBox from "../../Components/InputBox/InputBox";
import './page5.css'

export default function Page5() {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div className="header">
        <Header />
      </div>
      <div className="page3-body">
        <div style={{ display: "flex", justifyContent: "center", width: "100%", height: "100%"}}>
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
              <p>Outward and Reverse Charge Inward</p>
            </div>
            <div className="paymentoftax" style={{marginBottom: "0"}}>
            <div className="paymentoftax-header">
                <div className="paymentoftaxheader-left" style={{maxWidth: "70%"}}>
                    <p>3.1 Details of Outward Supplies and inward supplies liable to reverse charge</p>
                </div>
                <div className="paymentoftaxheader-right">
                    <p>Help</p>
                    <IoHelpCircleSharp style={{ marginTop: "3px" }} />
                </div>
              </div>
              <div className="paymentoftax-subheader" style={{marginTop: "40px"}}>
                <p>
                    Table 3.1(a), (b), (c) and (e) are auto-drafted based on values provided in GSTR-1. 
                    Whereas Table 3.1(d) is auto-drafted based on GSTR-2B.  
                </p>
              </div>
              <div className="page5-table">
                <table className="page5-table-tag">
                    <tr>
                        <th style={{backgroundColor: "#f4f4f6"}}>Nature of Supplies</th>
                        <th style={{backgroundColor: "#f4f4f6"}}>Total Taxable Value(₹)</th>
                        <th style={{backgroundColor: "#f4f4f6"}}>Integrated Tax (₹)</th>
                        <th style={{backgroundColor: "#f4f4f6"}}>Central tax (₹)</th>
                        <th style={{backgroundColor: "#f4f4f6"}}>State/UT Tax (₹)</th>
                        <th style={{backgroundColor: "#f4f4f6"}}    >Cess (₹)</th>
                    </tr>
                    <tr>
                        <th>(a) Outward taxable supplies
    (other than zero rated, nil
    rated and exempted)</th>
                        <td><InputBox defaultValue="110000.00"/></td>
                        <td><InputBox defaultValue="0.00"/></td>
                        <td><InputBox defaultValue="9900.00"/></td>
                        <td><InputBox defaultValue="9900.00"/></td>
                        <td><InputBox defaultValue="0.00"/></td>
                    </tr>
                    <tr>
                        <th>(b) Outward taxable supplies
                        (zero rated )</th>
                        <td><InputBox defaultValue="0.00"/></td>
                        <td><InputBox defaultValue="0.00"/></td>
                        <td style={{backgroundColor: "#f4f4f6"}}></td>
                        <td style={{backgroundColor: "#f4f4f6"}}></td>
                        <td><InputBox defaultValue="0.00"/></td>
                    </tr>
                    <tr>
                        <th>(c) Other outward supplies
                        (Nil rated, exempted)</th>
                        <td><InputBox defaultValue="0.00"/></td>
                        <td style={{backgroundColor: "#f4f4f6"}}></td>
                        <td style={{backgroundColor: "#f4f4f6"}}></td>
                        <td style={{backgroundColor: "#f4f4f6"}}></td>
                        <td style={{backgroundColor: "#f4f4f6"}}></td>
                    </tr>
                    <tr>
                        <th>(d) Inward supplies (liable to
                            reverse charge)</th>
                        <td><InputBox defaultValue="0.00"/></td>
                        <td><InputBox defaultValue="0.00"/></td>
                        <td><InputBox defaultValue="0.00"/></td>
                        <td><InputBox defaultValue="0.00"/></td>
                        <td><InputBox defaultValue="0.00"/></td>
                    </tr>
                    <tr>
                        <th>(e) Non-GST outward
                        supplies</th>
                        <td><InputBox defaultValue="0.00"/></td>
                        <td style={{backgroundColor: "#f4f4f6"}}></td>
                        <td style={{backgroundColor: "#f4f4f6"}}></td>
                        <td style={{backgroundColor: "#f4f4f6"}}></td>
                        <td style={{backgroundColor: "#f4f4f6"}}></td>
                    </tr>
                </table>
              </div>
              <div className="page4-card2-outside-div-buttons-1" style={{gap: "5px", marginBottom: "4rem"}}>
                <button style={{backgroundColor: "#14315d", fontWeight: "400"}}>CANCEL</button>
                <button style={{backgroundColor: "#14315d", fontWeight: "400", marginRight: "45px"}}>CONFIRM</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page4-footer"></div>
    </div>
  );
}
