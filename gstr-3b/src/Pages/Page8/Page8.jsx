import React from 'react'
import Header from "../../Components/header";
import { IoIosArrowForward } from "react-icons/io";
import { IoHelpCircleSharp } from "react-icons/io5";
import InputBox from "../../Components/InputBox/InputBox";
import './page8.css'

export default function Page8() {
  return (
    <div style={{height :"100%", width :"100%", overflowX: "hidden"}}>
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
              <p>Eligible ITC</p>
            </div>
              <div className="paymentoftax" style={{marginBottom: "0"}}>
                <div className="paymentoftax-header">
                    <div className="paymentoftaxheader-left" style={{maxWidth: "70%"}}>
                    <p>4. Eligible ITC</p>
                    </div>
                    <div className="paymentoftaxheader-right">
                    <p>Help</p>
                    <IoHelpCircleSharp style={{ marginTop: "3px" }} />
                    </div>
                </div>
                <div className="paymentoftax-subheader" style={{marginTop: "40px", marginBottom: "0"}}>
                  <p>
                    Tables 4(A)(1), (3), (4), (5) and 4(B)(2) are auto-drafted based on the values in GSTR-2B.
                  </p>
                </div>
                <div className="page8-table">
                  <table className='page8-table-content'>
                    <tr>
                      <th style={{width: "45%", backgroundColor: "#f4f4f6"}}>Details</th>
                      <th style={{backgroundColor: "#f4f4f6"}}>Integrated Tax (₹)</th>
                      <th style={{backgroundColor: "#f4f4f6"}}>Central tax (₹)</th>
                      <th style={{backgroundColor: "#f4f4f6"}}>State/UT Tax (₹)</th>
                      <th style={{backgroundColor: "#f4f4f6"}}>Cess (₹)</th>
                    </tr>
                    <tr>
                      <th>(A) ITC Available (whether in full or part)</th>
                    </tr>
                    <tr>
                      <td>(1) Import of goods</td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td style={{backgroundColor: "#f4f4f6"}}></td>
                      <td style={{backgroundColor: "#f4f4f6"}}></td>
                      <td><InputBox defaultValue="0.00"/></td>
                    </tr>
                    <tr>
                      <td>(2) Import of services</td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td style={{backgroundColor: "#f4f4f6"}}></td>
                      <td style={{backgroundColor: "#f4f4f6"}}></td>
                      <td><InputBox defaultValue="0.00"/></td>
                    </tr>
                    <tr>
                      <td>(3) Inward supplies liable to reverse charge (other than 1 & 2 above)</td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                    </tr>
                    <tr>
                      <td>(4) Inward supplies from ISD</td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                    </tr>
                    <tr>
                      <td>(5) All other ITC</td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                    </tr>
                    <tr>
                      <th>(B) ITC Reversed</th>
                    </tr>
                    <tr>
                      <td>(1) As per rules 38,42 & 43 of CGST Rules and section 17(5) </td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                    </tr>
                    <tr>
                      <td>(2) Others </td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                    </tr>
                    <tr>
                      <th>(C) Net ITC Available (A) - (B)</th>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                    </tr>
                    <tr>
                      <th>(D) Other Details</th>
                    </tr>
                    <tr>
                      <td>(1) ITC reclaimed which was reversed under Table 4(B)(2) in earlier tax period</td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                    </tr>
                    <tr>
                      <td>(2) Ineligible ITC under section 16(4) & ITC restricted due to PoS rules</td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                      <td><InputBox defaultValue="0.00"/></td>
                    </tr>
                  </table>
                </div>
                <div className="page4-card2-outside-div-buttons-1" style={{gap: "5px", marginBottom: "5rem", marginTop: "0"}}>
                    <button style={{backgroundColor: "#14315d", fontWeight: "400"}}>CANCEL</button>
                    <button style={{backgroundColor: "#14315d", fontWeight: "400", marginRight: "45px"}}>CONFIRM</button>
                </div>
              </div>
          </div>
        </div>
        <div className="page4-footer"></div>
      </div>
    </div>
  )
}
