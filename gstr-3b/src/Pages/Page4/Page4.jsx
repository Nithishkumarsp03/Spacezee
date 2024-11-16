import React from 'react'
import Header from '../../Components/header'
import { IoIosArrowForward } from "react-icons/io";
import { IoHelpCircleSharp } from "react-icons/io5";
import './Page4.css';


export default function Page4() {
  return (
    <div style={{height: "100%", width: "100%", overflowX: "hidden"}}>
      <div className="header">
        <Header />
      </div>
      <div className="page3-body">
        <div style={{display: "flex",justifyContent: "center",width: "100%",height: "100%"}}>
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
                  <p>3.2 Of the supplies shown in 3.1 (a), details of inter-state supplies made to unregistered persons, 
                    composition taxable person and UIN holders</p>
                </div>
                <div className="paymentoftaxheader-right">
                  <p>Help</p>
                  <IoHelpCircleSharp style={{ marginTop: "3px" }} />
                </div>
              </div>
              <div className="page4-box1">
                <div className='page4-box1-content'>
                  <div className="page4-box1-header">
                    Supplies made to Unregistered Persons
                  </div>
                  <div className="page4-box1-body">
                    <div className="table-box1-content">
                      <table style={{borderCollapse : "collapse", width: "100%"}}>
                        <tr style={{backgroundColor: "#f5f5f5"}}>
                          <th style={{border: "1px solid #dddddd", width: "10%", padding: "15px"}}></th>
                          <th style={{border: "1px solid #dddddd", padding: "15px"}}>Place of Supply (State/UT)</th>
                          <th style={{border: "1px solid #dddddd", padding: "15px"}}>Total Taxable value (₹)</th>
                          <th style={{border: "1px solid #dddddd", padding: "15px"}}>Amount of Integrated Tax (₹)</th>
                        </tr>
                      </table>
                    </div>
                    <div className="page4-card2-outside-div-buttons-1" style={{gap: "8px"}}>
                      <button style={{backgroundColor: "rgba(64, 64, 198, 0.586)"}}>ADD</button>
                      <button style={{backgroundColor: "rgba(200, 56, 56, 0.708)"}}>REMOVE</button>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className="page4-box2-header">
              Supplies made to Composition Taxable Persons
              </div>
              <div className="page4-box2-header">
              Supplies made to UIN holders
              </div>
              <div className="page4-card2-outside-div-buttons-1" style={{gap: "5px", marginBottom: "4rem"}}>
                <button style={{backgroundColor: "#14315d", fontWeight: "400"}}>CANCEL</button>
                <button style={{backgroundColor: "rgba(64, 64, 198, 0.586)", fontWeight: "400", marginRight: "45px"}}>CONFIRM</button>
              </div>
            </div>
          </div>
        </div>
        <div className="page4-footer"></div>
      </div>
    </div>
  )
}
