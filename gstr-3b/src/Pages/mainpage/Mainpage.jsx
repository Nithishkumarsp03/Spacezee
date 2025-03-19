import React from "react";
import Header from "../../Components/header";
import { IoIosArrowForward } from "react-icons/io";
import SelectBox from "../../Components/SelectBox/SelectBox";

export default function Mainpage() {
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
              </div>
              <div
                className="paymentoftax"
                style={{ marginBottom: "0", padding: "20px 15px" }}
              >
                <div style={{ fontSize: "1.2rem" }}>File Returns</div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    marginTop: "10px",
                    backgroundColor: "#fcf8e3",
                    padding: "10px",
                    color: "#14385d",
                  }}
                >
                  GSTR-2A can now be downloaded in excel/CSV format for your
                  reference and further use. Nil return for GSTR-1, GSTR-3B and
                  CMP-08 can now be filed through SMS.
                </div>
                <div className="main-page-search">
                  <div>
                    <div>Financial Year</div>
                    <div>
                      <SelectBox />
                    </div>
                  </div>
                  <div>
                    <div>Quarter</div>
                    <div>
                      <SelectBox />
                    </div>
                  </div>
                  <div>
                    <div>Period</div>
                    <div>
                      <SelectBox />
                    </div>
                  </div>
                  <div className="search-button-mainpage">
                    <button>Search</button>
                  </div>
                </div>
              </div>
              <div
                className="paymentoftax-subheader"
                style={{ margin: "0 0 0 10px", width: "100%" }}
              >
                You have selected to file the return on monthly frequency,
                GSTR-1 and GSTR-3B shall be required to be filled for each month
                of the quarter.
              </div>
              <div className="add-box-container">
                <div
                  className="add-boxes"
                  style={{ borderRadius: "0", width: "calc(31% - 10px)", height: "170px" }}
                >
                  <div
                    className="add-boxes-upper-part"
                    style={{ backgroundColor: "#14385d" }}
                  >
                    Details of outward supplies of goods or services <br />{" "}
                    GSTR1
                  </div>
                  <div className="add-boxes-lower-part" style={{flexDirection: "column", gap: "10px"}}>
                    <div className="highlighted-table-header">Due date - 21/10/2022</div>
                    <div className="lower-box-buttons">
                      <button style={{backgroundColor: "#2c4e86"}}>PREPARE ONLINE</button>
                      <button style={{backgroundColor: "#6d7d97"}}>PREPARE OFFLINE</button>
                    </div>
                  </div>
                </div>
                <div
                  className="add-boxes"
                  style={{ borderRadius: "0", width: "calc(31% - 10px)", height: "170px" }}
                >
                  <div
                    className="add-boxes-upper-part"
                    style={{ backgroundColor: "#14385d" }}
                  >
                    Auto Drafted details (For view only) <br /> GSTR2A
                  </div>
                  <div className="add-boxes-lower-part">
                    <div className="lower-box-buttons">
                      <button style={{backgroundColor: "#2c4e86"}}>VIEW</button>
                      <button style={{backgroundColor: "#6d7d97"}}>DOWNLOAD</button>
                    </div>
                  </div>
                </div>
                <div
                  className="add-boxes"
                  style={{ borderRadius: "0", width: "calc(31% - 10px)", height: "170px" }}
                >
                  <div
                    className="add-boxes-upper-part"
                    style={{ backgroundColor: "#14385d" }}
                  >
                    Auto - drafted ITC Statement <br /> GSTR2B
                  </div>
                  <div className="add-boxes-lower-part">
                    <div className="lower-box-buttons">
                      <button style={{backgroundColor: "#2c4e86"}}>VIEW</button>
                      <button style={{backgroundColor: "#6d7d97"}}>DOWNLOAD</button>
                    </div>
                  </div>
                </div>
                <div
                  className="add-boxes"
                  style={{ borderRadius: "0", width: "calc(31% - 10px)", height: "170px" }}
                >
                  <div
                    className="add-boxes-upper-part"
                    style={{ backgroundColor: "#14385d" }}
                  >
                    Auto - drafted ITC Statement for the quarter <br /> GSTR-2B
                  </div>
                  <div className="add-boxes-lower-part">
                    <div className="lower-box-buttons">
                      <button style={{backgroundColor: "#2c4e86"}}>VIEW</button>
                      <button style={{backgroundColor: "#6d7d97"}}>DOWNLOAD</button>
                    </div>
                  </div>
                </div>
                <div
                  className="add-boxes"
                  style={{ borderRadius: "0", width: "calc(31% - 10px)", height: "170px" }}
                >
                  <div
                    className="add-boxes-upper-part"
                    style={{ backgroundColor: "#14385d" }}
                  >
                    Monthly Return <br /> GSTR3B
                  </div>
                  <div className="add-boxes-lower-part" style={{flexDirection: "column", gap: "10px"}}>
                    <div className="highlighted-table-header">Due date - 21/10/2022</div>
                    <div className="lower-box-buttons">
                      <button style={{backgroundColor: "#2c4e86"}}>PREPARE ONLINE</button>
                      <button style={{backgroundColor: "#6d7d97"}}>PREPARE OFFLINE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="page4-footer"></div>
    </div>
  );
}
