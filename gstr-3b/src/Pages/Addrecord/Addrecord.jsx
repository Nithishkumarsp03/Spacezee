import React from "react";
import Header from "../../Components/header";
import { IoIosArrowForward } from "react-icons/io";
import { IoHelpCircleSharp } from "react-icons/io5";
import SelectBox from "../../Components/SelectBox/SelectBox";
import InputBox from "../../Components/InputBox/InputBox";
import "./addrecord.css";

export default function Addrecord() {
  const indianStates = [
    { value: "01", label: "01-Jammu & Kashmir" },
    { value: "02", label: "02-Himachal Pradesh" },
    { value: "03", label: "03-Punjab" },
    { value: "04", label: "04-Chandigarh" },
    { value: "05", label: "05-Uttarakhand" },
    { value: "06", label: "06-Haryana" },
    { value: "07", label: "07-Delhi" },
    { value: "08", label: "08-Rajasthan" },
    { value: "09", label: "09-Uttar Pradesh" },
    { value: "10", label: "10-Bihar" },
    { value: "11", label: "11-Sikkim" },
    { value: "12", label: "12-Arunachal Pradesh" },
    { value: "13", label: "13-Nagaland" },
    { value: "14", label: "14-Manipur" },
    { value: "15", label: "15-Mizoram" },
    { value: "16", label: "16-Tripura" },
    { value: "17", label: "17-Meghalaya" },
    { value: "18", label: "18-Assam" },
    { value: "19", label: "19-West Bengal" },
    { value: "20", label: "20-Jharkhand" },
    { value: "21", label: "21-Odisha" },
    { value: "22", label: "22-Chhattisgarh" },
    { value: "23", label: "23-Madhya Pradesh" },
    { value: "24", label: "24-Gujarat" },
    { value: "25", label: "25-Daman & Diu" },
    { value: "26", label: "26-Dadra & Nagar Haveli" },
    { value: "27", label: "27-Maharashtra" },
    { value: "28", label: "28-Andhra Pradesh" },
    { value: "29", label: "29-Karnataka" },
    { value: "30", label: "30-Goa" },
    { value: "31", label: "31-Lakshadweep" },
    { value: "32", label: "32-Kerala" },
    { value: "33", label: "33-Tamil Nadu" },
    { value: "34", label: "34-Puducherry" },
    { value: "35", label: "35-Andaman & Nicobar Islands" },
    { value: "36", label: "36-Telangana" },
    { value: "37", label: "37-Ladakh" },
  ];

  const rate = [
    { value: "0", label: "0" },
    { value: "0.1", label: "0.1" },
    { value: "0.25", label: "0.25" },
    { value: "1", label: "1" },
    { value: "1.5", label: "1.5" },
    { value: "3", label: "3" },
    { value: "5", label: "5" },
    { value: "6", label: "6" },
    { value: "7.5", label: "7.5" },
    { value: "12", label: "12" },
    { value: "18", label: "18" },
    { value: "28", label: "28" },
  ];

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
                <p style={{color: "#2c4e86"}}>GSTR-1/IFF</p>
                <IoIosArrowForward
                  style={{ marginTop: "0.2%", marginRight: "-0.5%" }}
                />
                <p>B2CS</p>
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
                <div className="payment-of-tax-body">
                  <div className="mandatory-field-indicator">
                    <div>
                      <span style={{ color: "red" }}>*</span>Indicates Mandatory
                      field
                    </div>
                  </div>
                </div>
                <div className="add-record-input-boxes">
                  <div>
                    <p>POS</p>
                    <SelectBox options={indianStates} />
                  </div>
                  <div>
                    <p>Taxable Value (₹)</p>
                    <InputBox />
                  </div>
                  <div>
                    <p>Supply type</p>
                    <InputBox />
                  </div>
                </div>
                <div
                  className="paymentoftax-checkbox"
                  style={{ padding: "20px 3.7%" }}
                >
                  <input
                    type="checkbox"
                    style={{ accentColor: "forestgreen", marginRight: "10px" }}
                  />
                  Is the supply eligible to taxed at a differential percentage
                  (%) of the existing rate of tax, as notified by the
                  Government?
                </div>
                <div
                  className="add-record-input-boxes"
                  style={{ width: "41.3%" }}
                >
                  <div className="rate-select-input">
                    <p>Rate</p>
                    <SelectBox options={rate} />
                  </div>
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
                      backgroundColor: "#14315d",
                      fontWeight: "400",
                      marginRight: "45px",
                    }}
                  >
                    SAVE
                  </button>
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
