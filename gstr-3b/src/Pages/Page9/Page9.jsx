import React from 'react'
import Header from '../../Components/header'
import { IoIosArrowForward } from "react-icons/io";
import InputBox from '../../Components/InputBox/InputBox';
import { MdOutlinePayment } from "react-icons/md";
import { CiBank } from "react-icons/ci";
import { BsCash } from "react-icons/bs";
import './page9.css';

export default function Page9() {
  return (
    <div style={{height: "100%", width: "100%", overflowY: 'scroll'}}>
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
              <p>Create Challan</p>
            </div>
            <div className="paymentoftax" style={{backgroundColor: "white", marginBottom: "0"}}>
                <p style={{padding: "30px 20px", paddingBottom: "10px"}}>Reason for Challan</p>
                <div className="reason-box">
                  Reason<br/>
                  <b>Any other payment</b>
                </div>
                <p style={{padding: "0px 20px", paddingBottom: "10px"}}>Details of Deposit</p>
                <div className="table-page9">
                  <table>
                    <tr>
                      <th style={{backgroundColor: "#f4f4f6"}}></th>
                      <th style={{backgroundColor: "#f4f4f6"}}>Tax (₹)</th>
                      <th style={{backgroundColor: "#f4f4f6"}}>Interest (₹)</th>
                      <th style={{backgroundColor: "#f4f4f6"}}>Penalty (₹)</th>
                      <th style={{backgroundColor: "#f4f4f6"}}>Fees (₹)</th>
                      <th style={{backgroundColor: "#f4f4f6"}}>Other (₹)</th>
                      <th style={{backgroundColor: "#f4f4f6"}}>Total (₹)</th>
                    </tr>
                    <tr>
                      <th>CGST(0005)</th>
                      <th><InputBox defaultValue={"9450"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"9450"}/></th>
                    </tr>
                    <tr>
                      <th>IGST(0008)</th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                    </tr>
                    <tr>
                      <th>CESS(0009)</th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                    </tr>
                    <tr>
                      <th>Kerala SGST(0006)</th>
                      <th><InputBox defaultValue={"9450"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"0.00"}/></th>
                      <th><InputBox defaultValue={"9450"}/></th>
                    </tr>
                    <tr>
                      <th colSpan={2}>Total Challan Amount:</th>
                      <th colSpan={5}>₹ 18900</th>
                    </tr>
                    <tr>
                      <th colSpan={2}>Total Challan Amount (In Words):</th>
                      <th colSpan={5}>Rupees Eighteen Thousand, Nine Hundred Only</th>
                    </tr>
                  </table>
                </div>
                <p style={{padding: "30px 23px", paddingBottom: "5px", fontSize: "20px"}}>Payment Modes</p>
                <div className='payment-details'>
                  <p><MdOutlinePayment/> E-Payment</p>
                  <p><CiBank/> Over the Counter</p>
                  <p><BsCash/> NEFT/RTGS</p>
                </div>
                <div className="page4-card2-outside-div-buttons-1" style={{ marginBottom: "5rem", marginTop: "0", paddingRight: "20px"}}>
                    <button style={{ backgroundColor: "rgba(76, 48, 255, 0.500)",fontWeight: "400", width: "17%"}}>GENERATE CHALLAN</button>
                </div>
            </div>
          </div>
        </div>
        <div className="page4-footer"></div>
      </div>
    </div>
  )
}
