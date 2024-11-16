import React from 'react'
import Header from '../../Components/header'
import { IoIosArrowForward } from "react-icons/io";
import { IoHelpCircleSharp } from "react-icons/io5";
import InputBox from "../../Components/InputBox/InputBox";
import './page7.css'

export default function Page7() {
  return (
    <div style={{height: "100%", width: "100%", overflowX: "hidden"}}>
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
              <p>Interest and Late Fee</p>
            </div>
            <div className="paymentoftax" style={{marginBottom: "0"}}>
            <div className="paymentoftax-header">
                <div className="paymentoftaxheader-left" style={{maxWidth: "70%"}}>
                    <p>5.1 Interest & late fee payable                    </p>
                </div>
                <div className="paymentoftaxheader-right">
                    <p>Help</p>
                    <IoHelpCircleSharp style={{ marginTop: "3px" }} />
                </div>
              </div>
              <div className="paymentoftax-subheader" style={{marginTop: "40px"}}>
                <p>
                    Declare interest payable on tax liabilities on supplies attracting reverse charge as well as other than reverse charge  
                </p>
              </div>
              <div className="paymentoftax-subheader" style={{marginTop: "15px", backgroundColor: "#f2dede", color: "red"}}>
                <p>
                    Late fee for the month includes late fee charged due to delay in filing of GSTR-1, GSTR-4 
                    (Taxpayers who have opted out from Composition and late fee was not paid fully in the GSTR-4 of that tax period) 
                    and previous month's late fee charged due to delay in filing of GSTR-3B. The computation is based on the formula: 
                    [Date of Filing – Due date of Filing] * ₹25/day (in case of any liability) or ₹10/day (in case of nil liability)] 
                    per Act (CGST/SGST). To view details of late fee click on 'Late Fees'.</p>
              </div>
              <div className="paymentoftax-checkbox">
                <input type="checkbox" style={{accentColor: "forestgreen", marginRight: "10px"}}/>
                <label htmlFor="checkbox">
                Please select the check box if you wish to declare any Interest liabilities. Please note Interest amounts declared here under respective heads need to be paid in cash in
                addition to tax liabilities for the month. GSTR 3B can be filed only after complete payment of all liabilities.
                </label>
              </div>
              <div className="page7-table">
                <div className="page7-table-content">
                    <table style={{borderCollapse: "collapse", width: "100%"}}>
                        <tr>
                            <th>Description</th>
                            <th>Integrated Tax (₹)</th>
                            <th>Central tax (₹)</th>
                            <th>State/UT Tax (₹)</th>
                            <th>Cess (₹)</th>
                        </tr>
                        <tr>
                            <th style={{backgroundColor: "white"}}>Interest</th>
                            <td><InputBox defaultValue="0.00"/></td>
                            <td><InputBox defaultValue="0.00"/></td>
                            <td><InputBox defaultValue="0.00"/></td>
                            <td><InputBox defaultValue="0.00"/></td>
                        </tr>
                        <tr>
                            <th style={{backgroundColor: "white"}}>Late Fees</th>
                            <td style={{backgroundColor: "#f4f4f6"}}></td>
                            <td><InputBox defaultValue="0.00"/></td>
                            <td><InputBox defaultValue="0.00"/></td>
                            <td style={{backgroundColor: "#f4f4f6"}}></td>
                        </tr>
                    </table>
                </div>
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
