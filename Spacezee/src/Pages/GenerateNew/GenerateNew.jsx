import React from "react";
import { IoHomeSharp } from "react-icons/io5";
import { FaGlobeAmericas } from "react-icons/fa";
import { BsQuestionCircleFill } from "react-icons/bs";
import { PiSignOutBold } from "react-icons/pi";
import { RiAddBoxFill } from "react-icons/ri";
import { RiDeleteBinFill } from "react-icons/ri";
import Subheader from "../../Components/Subheader/Subheader";
import "../../Styles/global.css";

export default function GenerateNew() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflowX: "hidden",
        padding: "0",
      }}
    >
      <div className="generate-new">
        <div className="generate-header">
          <div className="dashboard-header">
            <Subheader />
          </div>
          <div className="dashboard-middle">
            <div className="left-section">
              <IoHomeSharp
                fontSize={"23px"}
                color="white"
                style={{
                  margin: "3px",
                  marginLeft: "10px",
                  marginRight: "10px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  fontWeight: "600",
                  height: "100%",
                  backgroundColor: "#1fade0",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                }}
              >
                <div style={{ marginTop: "5px" }}>
                  <FaGlobeAmericas />
                </div>
                <p>e-Invoice portal</p>
              </div>
            </div>

            <div className="center-section">
              <p>GSTIN: 29AFDXJ5246J1Z2 - Name: Iron World - User: Tax Payer</p>
            </div>

            <div className="right-section">
              <div>
                <BsQuestionCircleFill />
              </div>
              <div>
                <PiSignOutBold />
              </div>
            </div>
          </div>
        </div>
        <div className="generate-body" style={{ backgroundColor: "white" }}>
          <div className="form-header">
            <div className="form-name">E-WAYBILL ENTRY FORM</div>
            <div className="disclaimer">
              [<span style={{ color: "red" }}>*</span>Indicates mandatory fields
              for E-Way Bill]
            </div>
          </div>
          <div className="generate-middle" style={{ backgroundColor: "white" }}>
            <div className="input-groups">
              <div className="transaction">Transaction Details</div>
              <div className="transaction-details">
                <div>
                  Supply type <span style={{ color: "red" }}>*</span>
                </div>
                <div className="sub-type">
                  <input type="radio" name="Supply type" id="Inward" />
                  <label htmlFor="Inward">Inward</label>

                  <input type="radio" name="Supply type" id="Outward" />
                  <label htmlFor="Outward">Outward</label>
                </div>
                <div>Sub type</div>
                <div className="sub-type">
                  <input type="radio" name="subtype" id="Supply" />
                  <label htmlFor="Supply">Supply</label>

                  <input type="radio" name="subtype" id="Export" />
                  <label htmlFor="Export">Export</label>

                  <input type="radio" name="subtype" id="Job work" />
                  <label htmlFor="Job work">Job work</label>

                  <input type="radio" name="subtype" id="SKD/CKD/Lots" />
                  <label htmlFor="SKD/CKD/Lots">SKD/CKD/Lots</label>

                  <input type="radio" name="subtype" id="Recipient Not Known" />
                  <label htmlFor="Recipient Not Known">
                    Recipient Not Known
                  </label>

                  <input type="radio" name="subtype" id="For Own Use" />
                  <label htmlFor="For Own Use">For Own Use</label>

                  <input type="radio" name="subtype" id="Exhibit" />
                  <label htmlFor="Exhibit">Exhibit</label>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    Document type <span style={{ color: "red" }}>*</span>
                  </div>
                  <div>
                    <select name="Document" id="">
                      <option value="Tax invoice">Tax invoice</option>
                      <option value="Bill of Supply">Bill of Supply</option>
                    </select>
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    Document No <span style={{ color: "red" }}>*</span>
                  </div>
                  <div>
                    <input type="text" />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    Document Date <span style={{ color: "red" }}>*</span>
                  </div>
                  <div>
                    <input type="date" />
                  </div>
                </div>
                <div style={{ display: "flex" }}>
                  <div>
                    Transaction type <span style={{ color: "red" }}>*</span>
                  </div>
                  <select name="transaction type" id="">
                    <option value="Regular">Regular</option>
                    <option value="Bill to - Ship to">Bill to - Ship to</option>
                    <option value="Bill from - Dispatch from">
                      Bill from - Dispatch from
                    </option>
                    <option value="Combination of 2 & 3">
                      Combination of 2 & 3
                    </option>
                  </select>
                </div>
              </div>
              <div className="double-container">
                <div className="bill-form">
                  <div className="transaction">Bill From</div>
                  <div style={{ marginTop: "5px" }}>
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="" />
                  </div>
                  <hr />
                  <div>
                    <label htmlFor="">
                      GSTIN<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      style={{ marginLeft: "10px" }}
                    />
                  </div>
                  <hr />
                  <div style={{ marginBottom: "5px" }}>
                    <label htmlFor="">
                      State<span style={{ color: "red" }}>*</span>
                    </label>
                    <select name="state" id="state">
                      <option value="">Select State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Andaman and Nicobar Islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Dadra and Nagar Haveli and Daman and Diu">
                        Dadra and Nagar Haveli and Daman and Diu
                      </option>
                      <option value="Delhi">Delhi</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
                    </select>
                  </div>
                </div>
                <div className="dispatch-form">
                  <div className="transaction">Dispatch From</div>
                  <div className="bill-form">
                    <div style={{ marginTop: "5px" }}>
                      <label htmlFor="">
                        Address<span style={{ color: "red" }}>*</span>
                      </label>
                      <div style={{ display: "flex", width: "100%" }}>
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                      </div>
                    </div>
                    <hr />
                    <div style={{ marginLeft: "2%" }}>
                      <label htmlFor="">
                        Place<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{ marginLeft: "0" }}
                      />
                    </div>
                    <hr />
                    <div style={{ marginTop: "5px" }}>
                      <label htmlFor="">
                        Pincode<span style={{ color: "red" }}>*</span>
                      </label>
                      <div style={{ display: "flex", width: "100%" }}>
                        <input type="text" name="" id="" />
                        <select name="state" id="state">
                          <option value="">Select State</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Arunachal Pradesh">
                            Arunachal Pradesh
                          </option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">
                            Himachal Pradesh
                          </option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                          <option value="Andaman and Nicobar Islands">
                            Andaman and Nicobar Islands
                          </option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Dadra and Nagar Haveli and Daman and Diu">
                            Dadra and Nagar Haveli and Daman and Diu
                          </option>
                          <option value="Delhi">Delhi</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Puducherry">Puducherry</option>
                          <option value="Ladakh">Ladakh</option>
                          <option value="Jammu and Kashmir">
                            Jammu and Kashmir
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="double-container">
                <div className="bill-form">
                  <div className="transaction">Bill To</div>
                  <div style={{ marginTop: "5px" }}>
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="" />
                  </div>
                  <hr />
                  <div>
                    <label htmlFor="">
                      GSTIN<span style={{ color: "red" }}>*</span>
                    </label>
                    <input
                      type="text"
                      name=""
                      id=""
                      style={{ marginLeft: "10px" }}
                    />
                  </div>
                  <hr />
                  <div style={{ marginBottom: "5px" }}>
                    <label htmlFor="">
                      State<span style={{ color: "red" }}>*</span>
                    </label>
                    <select name="state" id="state">
                      <option value="">Select State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Arunachal Pradesh">
                        Arunachal Pradesh
                      </option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madhya Pradesh">Madhya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Odisha">Odisha</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Uttarakhand">Uttarakhand</option>
                      <option value="West Bengal">West Bengal</option>
                      <option value="Andaman and Nicobar Islands">
                        Andaman and Nicobar Islands
                      </option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Dadra and Nagar Haveli and Daman and Diu">
                        Dadra and Nagar Haveli and Daman and Diu
                      </option>
                      <option value="Delhi">Delhi</option>
                      <option value="Lakshadweep">Lakshadweep</option>
                      <option value="Puducherry">Puducherry</option>
                      <option value="Ladakh">Ladakh</option>
                      <option value="Jammu and Kashmir">
                        Jammu and Kashmir
                      </option>
                    </select>
                  </div>
                </div>
                <div className="dispatch-form">
                  <div className="transaction">Ship to</div>
                  <div className="bill-form">
                    <div style={{ marginTop: "5px" }}>
                      <label htmlFor="">
                        Address<span style={{ color: "red" }}>*</span>
                      </label>
                      <div style={{ display: "flex", width: "100%" }}>
                        <input type="text" name="" id="" />
                        <input type="text" name="" id="" />
                      </div>
                    </div>
                    <hr />
                    <div style={{ marginLeft: "2%" }}>
                      <label htmlFor="">
                        Place<span style={{ color: "red" }}>*</span>
                      </label>
                      <input
                        type="text"
                        name=""
                        id=""
                        style={{ marginLeft: "0" }}
                      />
                    </div>
                    <hr />
                    <div style={{ marginTop: "5px" }}>
                      <label htmlFor="">
                        Pincode<span style={{ color: "red" }}>*</span>
                      </label>
                      <div style={{ display: "flex", width: "100%" }}>
                        <input type="text" name="" id="" />
                        <select name="state" id="state">
                          <option value="">Select State</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Arunachal Pradesh">
                            Arunachal Pradesh
                          </option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">
                            Himachal Pradesh
                          </option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="West Bengal">West Bengal</option>
                          <option value="Andaman and Nicobar Islands">
                            Andaman and Nicobar Islands
                          </option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Dadra and Nagar Haveli and Daman and Diu">
                            Dadra and Nagar Haveli and Daman and Diu
                          </option>
                          <option value="Delhi">Delhi</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Puducherry">Puducherry</option>
                          <option value="Ladakh">Ladakh</option>
                          <option value="Jammu and Kashmir">
                            Jammu and Kashmir
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item-details">
                <div className="transaction" style={{ marginTop: "1.5%" }}>
                  Item Details
                </div>
                <div className="item-details-input">
                  <div>Product name</div>
                  <div>Description</div>
                  <div>HSN</div>
                  <div>Quantity</div>
                  <div>Unit</div>
                  <div>Value/Taxable Value (Rs)</div>
                  <div>CGST - SGST Rate(%)</div>
                  <div>IGST Rate (%)</div>
                  <div>CESS Advol Rate (%)</div>
                  <div>CESS non Advil Rate</div>
                  <div>
                    <RiAddBoxFill fontSize={"28px"} color="#967ac9" />
                  </div>
                  <div>
                    <input type="text" className="input-item"/>
                  </div>
                  <div>
                    <input type="text" className="input-item"/>
                  </div>
                  <div>
                    <input type="text" className="input-item"/>
                  </div>
                  <div>
                    <input type="text" className="input-item"/>
                  </div>
                  <div>
                    <input type="text" className="input-item"/>
                  </div>
                  <div>
                    <input type="text" className="input-item"/>
                  </div>
                  <div>
                    <select name="CGST" id="" className="input-item">
                      <option value="0.5+0.5">0.5+0.5</option>
                      <option value="0.75+0.75">0.75+0.75</option>
                      <option value="3.75+3.75">3.75+3.75</option>
                      <option value="0+0">0+0</option>
                      <option value="2.5+2.5">2.5+2.5</option>
                      <option value="6+6">6+6</option>
                      <option value="9+9">9+9</option>
                      <option value="14+14">14+14</option>
                      <option value="1.5+1.5">1.5+1.5</option>
                      <option value="0.05+0.05">0.05+0.05</option>
                      <option value="0.125+0.125">0.125+0.125</option>
                      <option value="3+3">3+3</option>
                    </select>
                  </div>
                  <div>
                    <select name="IGST" id="" className="input-item">
                      <option value="1">1</option>
                      <option value="1.5">1.5</option>
                      <option value="7.5">7.5</option>
                      <option value="0">0</option>
                      <option value="5">5</option>
                      <option value="12">12</option>
                      <option value="18">18</option>
                      <option value="28">28</option>
                      <option value="3">3</option>
                      <option value="0.1">0.1</option>
                      <option value="0.25">0.25</option>
                      <option value="6">6</option>
                    </select>
                  </div>
                  <div>
                    <select name="CESS" id="" className="input-item">
                      <option value="1">0</option>
                    </select>
                  </div>
                  <div>
                    <select name="CESS" id="" className="input-item">
                      <option value="1">0</option>
                    </select>
                  </div>
                  <div>
                    <RiDeleteBinFill fontSize={"24px"} color="red" />
                  </div>
                </div>
              </div>
              <div
                className="item-details"
                style={{ marginTop: "1.5%", backgroundColor: "white" }}
              >
                <div className="item-details-2-input">
                  <div>Total Taxable Amount</div>
                  <div>CGST Amount</div>
                  <div>SGST Amount</div>
                  <div>IGST Amount</div>
                  <div>CESS Advol Amount</div>
                  <div>CESS Non Advol Amount</div>
                  <div>Other Amount (+/-)</div>
                  <div>Total Inv Amount</div>
                  <div>
                    <input type="text" name="" id="" className="input-item"/>
                  </div>
                  <div>
                    <input type="text" name="" id="" className="input-item"/>
                  </div>
                  <div>
                    <input type="text" name="" id="" className="input-item"/>
                  </div>
                  <div>
                    <input type="text" name="" id="" className="input-item"/>
                  </div>
                  <div>
                    <input type="text" name="" id="" className="input-item"/>
                  </div>
                  <div>
                    <input type="text" name="" id="" className="input-item"/>
                  </div>
                  <div>
                    <input type="text" name="" id="" className="input-item"/>
                  </div>
                  <div>
                    <input type="text" name="" id="" className="input-item"/>
                  </div>
                </div>
              </div>
              <div
                className="transportation-details"
                style={{ marginTop: "1.5%", backgroundColor: "white" }}
              >
                <div className="transaction" style={{ marginTop: "1.5%" }}>
                  Transportation Details
                </div>
                <div style={{ display: "flex" }}>
                  <div className="transportation-flex">
                    <div>Transported ID</div>
                    <div>
                      <input type="text" className="input-item"/>
                    </div>
                  </div>
                  <div className="transportation-flex">
                    <div>Transporter Name</div>
                    <div>
                      <input type="text" className="input-item"/>
                    </div>
                  </div>
                  <div className="transportation-flex">
                    <div>Auto Calculated PIN to PIN (in KM)</div>
                  </div>
                  <div className="transportation-flex">
                    <div>Approximate distance (in Km)</div>
                    <div>
                      <input type="text" className="input-item"/>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="part-b"
                style={{ marginTop: "1.5%", backgroundColor: "white" }}
              >
                <div className="transaction" style={{ marginTop: "1.5%" }}>
                  PART-B
                </div>
                <div className="part-b-details">
                  <div className="part-b-details-div">
                    <p>Mode</p> 
                    <div>
                      <input type="radio" name="mode" className="input-item"/>
                      <label htmlFor="">Road</label>

                      <input type="radio" name="mode" style={{marginLeft: "5px"}}/>
                      <label htmlFor="">Rail</label>

                      <input type="radio" name="mode" style={{marginLeft: "5px"}}/>
                      <label htmlFor="">Air</label>

                      <input type="radio" name="mode" style={{marginLeft: "5px"}}/>
                      <label htmlFor="">Ship or Ship Cum Road</label>
                    </div>
                  </div>
                  <div className="part-b-details-div">
                  <p>Vehicle</p> 
                    <div>
                      <input type="radio" name="vehicle" className="input-item"/>
                      <label htmlFor="">Regular</label>

                      <input type="radio" name="vehicle" style={{marginLeft: "5px"}} className="input-item"/>
                      <label htmlFor="">Over Dimentional Cargo</label>

                    </div>
                  </div>
                  <div className="part-b-details-div">
                    <p>Vehicle no</p>
                    <input type="text" name="" id="" className="input-item"/>
                  </div>
                  <div className="part-b-details-div">
                    <p>Transporter Doc No & Date</p>
                    <div>
                      <input type="text" name="" id="" className="input-item"/>
                    </div>
                    <div>
                      <input type="date" name="" id="" className="input-item"/>
                    </div>
                  </div>
                </div>
              </div>
              <div className="action-buttons">
                <button style={{backgroundColor: "#c28b3e"}}>Preview</button>
                <button style={{backgroundColor: "#4b479a"}}>Submit</button>
                <button style={{backgroundColor: "#d26a62"}}>Exit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
