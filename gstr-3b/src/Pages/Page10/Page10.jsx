import React from 'react'
import Header from '../../Components/header'
import './page10.css';

export default function Page10() {
  return (
    <div style={{height: "100vh", width: "100vw", overflowX: "hidden"}}>
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
          <div className="paymentoftax" style={{backgroundColor: "white", margin: "0", padding: "30px 20px"}}>
            <p style={{color: "#0b1e59"}}>Payment Summary</p>
            <div className="payment-container">
                <p>Your Payment is successfully completed.</p>
            </div>
            <p style={{marginTop: "2%"}}>Tax Remittance of <span style={{fontWeight: "bold"}}>18900</span> via Bank Transaction ID<span style={{fontWeight: "bold"}}>220128320001380</span> successfully completed.<span style={{color: "#337ab7"}}>View Receipt</span></p>
            <p style={{marginTop: "1%"}}>Thank you!</p>
            <p style={{marginTop: "1%", color: "#337ab7"}}>Click here to view your Cash Ledger</p>
            <div className="page4-card2-outside-div-buttons-1" style={{gap: "5px", marginBottom: "3rem", marginTop: "7%"}}>
                    <button style={{backgroundColor: "#14315d", fontWeight: "400", width: "10%"}}>CONTINUE</button>
                </div>
          </div>
          </div>
        </div>
        <div className="page4-footer"></div>
      </div>
    </div>
  )
}
