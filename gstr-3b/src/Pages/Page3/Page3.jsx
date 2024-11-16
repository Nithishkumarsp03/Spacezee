import React from "react";
import Header from "../../Components/header";
import "./page3.css";
import InputBox from "../../Components/InputBox/InputBox";
import { IoIosArrowForward } from "react-icons/io";
import { IoHelpCircleSharp } from "react-icons/io5";

export default function Page3() {
  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "#e4e8eb" }}>
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
              <p>Payment of tax</p>
            </div>
            <div className="paymentoftax">
              <div className="paymentoftax-header">
                <div className="paymentoftaxheader-left">
                  <p>6.1 Payment of Tax</p>
                </div>
                <div className="paymentoftaxheader-right">
                  <p>Help</p>
                  <IoHelpCircleSharp style={{ marginTop: "3px" }} />
                </div>
              </div>
              <div className="paymentoftax-subheader">
                <p>
                  The cash available as on date and ITC available (considering
                  ITC of current tax period) are shown in this table.
                </p>
              </div>
              <div className="paymentoftax-body">
                <div
                  style={{
                    width: "100%",
                    height: "320px",
                    overflowX: "scroll",
                    overflowY: "hidden",
                  }}
                >
                  <table
                    style={{
                      width: "100%",
                      borderCollapse: "collapse",
                      height: "93%",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          rowSpan="2"
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Description
                        </th>
                        <th
                          colSpan="5"
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Cash Ledger Balance
                        </th>
                        <th
                          colSpan="5"
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Credit Ledger Balance
                        </th>
                      </tr>
                      <tr>
                        {/* Subheaders under Cash Ledger Balance */}
                        <th
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Integrated Tax (₹)
                        </th>
                        <th
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Central Tax (₹)
                        </th>
                        <th
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          State/UT Tax (₹)
                        </th>
                        <th
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          CESS (₹)
                        </th>
                        <th
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Total (₹)
                        </th>
                        {/* Subheaders under Credit Ledger Balance */}
                        <th
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Integrated Tax (₹)
                        </th>
                        <th
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Central Tax (₹)
                        </th>
                        <th
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          State/UT Tax (₹)
                        </th>
                        <th
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          CESS (₹)
                        </th>
                        <th
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Total (₹)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          Tax
                        </td>
                        {/* Cash Ledger Balance Inputs */}
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>

                        {/* Credit Ledger Balance Inputs */}
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="450.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="450.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          Interest
                        </td>
                        {/* Cash Ledger Balance Inputs */}
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>

                        {/* Credit Ledger Balance Inputs */}
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        ></td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        ></td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        ></td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        ></td>
                      </tr>
                      <tr>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          Late Fees
                        </td>
                        {/* Cash Ledger Balance Inputs */}
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        ></td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        ></td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>

                        {/* Credit Ledger Balance Inputs */}
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                          }}
                        >
                          <InputBox defaultValue="0.00" />
                        </td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        ></td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        ></td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        ></td>
                        <td
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        ></td>
                      </tr>
                      {/* Add more rows as needed */}
                    </tbody>
                  </table>
                </div>
                <div className="paymentoftax-card1">
                  <p>
                    System has auto-populated “Tax to be paid through ITC”
                    fields with optimum utilization amounts based on provisions
                    of the law relating to credit utilization. However, you may
                    edit the ITC utilization. As you change ITC utilization, the
                    cash to be paid will also get changed. <br />
                    <br />
                    If available cash balance in Electronic cash ledger is not
                    sufficient to offset the liabilities, additional cash
                    required for paying liability is being reflected in the last
                    column of the Table (Addition cash required). You may create
                    challan for that amount directly by clicking on the “Create
                    Challan” button
                  </p>
                </div>
                <div className="paymentoftax-card1" style={{marginTop: "2%"}}>
                  <p>
                    The ITC and Cash utilization information entered will only
                    be available for 2 days. After expiry of 2 days, the
                    suggested utilization shall be reverted to original system
                    suggested utilization.
                  </p>
                </div>
                <div
                  style={{
                    height: "420px",
                    overflowX: "scroll",  // Enable horizontal scrolling
                    overflowY: "hidden",  // Prevent vertical scrolling
                    marginTop: '2%'
                  }}
                >
                  <table
                    style={{
                      height: "93%",
                      width: "1700px",         // This should be 100% of the container's width
                      borderCollapse: "collapse",
                      // height: "auto",
                    }}
                  >
                    <thead>
                      <tr>
                        <th
                          rowSpan="2"
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Description
                        </th>
                        <th
                          rowSpan="2"
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                            width: "10%"
                          }}
                        >
                          Other than reverse charge Tax payable (₹)
                        </th>
                        <th
                          colSpan="4"
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Paid through ITC
                        </th>
                        <th
                          rowSpan="2"
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                            width: "10%"
                          }}
                        >
                          Other than reverse charge Tax to be paid in Cash(₹)
                        </th>
                        <th
                          rowSpan="2"
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Reverse charge Tax payable(₹)
                        </th>
                        <th
                          rowSpan="2"
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Reverse charge Tax to be paid in cash(₹)
                        </th>
                        <th
                          rowSpan="2"
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Interest Payable (₹)
                        </th>
                        <th
                          rowSpan="2"
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Interest to be paid in cash (₹)
                        </th>
                        <th
                          rowSpan="2"
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Late Fee Payable (₹)
                        </th>
                        <th
                          rowSpan="2"
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Late Fee to be paid in cash (₹)
                        </th>
                        <th
                          rowSpan="2"
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          	Utilizable Cash balance (₹)
                        </th>
                        <th
                          rowSpan="2"
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          	Additional Cash required (₹)
                        </th>

                      </tr>
                      <tr>
                        <th
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Integrated Tax (₹)
                        </th>
                        <th
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          Central Tax (₹)
                        </th>
                        <th
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          State/UT Tax (₹)
                        </th>
                        <th
                          style={{
                            border: "1px solid #dddddd",
                            padding: "8px",
                            backgroundColor: "#f4f4f6",
                          }}
                        >
                          CESS (₹)
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="table-data">1</td>
                        <td className="table-data">2</td>
                        <td className="table-data">3</td>
                        <td className="table-data">4</td>
                        <td className="table-data">5</td>
                        <td className="table-data">6</td>
                        <td className="table-data">7(2 - 3 - 4 - 5 - 6)</td>
                        <td className="table-data">8</td>
                        <td className="table-data">9</td>
                        <td className="table-data">10</td>
                        <td className="table-data">11</td>
                        <td className="table-data">12</td>
                        <td className="table-data">13</td>
                        <td className="table-data">14</td>
                        <td className="table-data">15</td>
                      </tr>
                      <tr>
                        <td className="table-data">Integrated Tax</td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td style={{ border: "1px solid #dddddd", padding: "8px", backgroundColor: "#f4f4f6"}}></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td style={{ border: "1px solid #dddddd", padding: "8px", backgroundColor: "#f4f4f6"}}></td>
                        <td style={{ border: "1px solid #dddddd", padding: "8px", backgroundColor: "#f4f4f6"}}></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                      </tr>
                      <tr>
                        <td className="table-data">Central Tax</td>
                        <td className="table-data"><InputBox defaultValue="9900.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="450.00"/></td>
                        <td style={{ border: "1px solid #dddddd", padding: "8px", backgroundColor: "#f4f4f6"}}></td>
                        <td style={{ border: "1px solid #dddddd", padding: "8px", backgroundColor: "#f4f4f6"}}></td>
                        <td className="table-data"><InputBox defaultValue="9450.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="9450.00"/></td>
                      </tr>
                      <tr>
                        <td className="table-data">State/UT Tax</td>
                        <td className="table-data"><InputBox defaultValue="9900.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td style={{ border: "1px solid #dddddd", padding: "8px", backgroundColor: "#f4f4f6"}}></td>
                        <td className="table-data"><InputBox defaultValue="450.00"/></td>
                        <td style={{ border: "1px solid #dddddd", padding: "8px", backgroundColor: "#f4f4f6"}}></td>
                        <td className="table-data"><InputBox defaultValue="9450.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="9450.00"/></td>
                      </tr>
                      <tr>
                        <td className="table-data">CESS</td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td style={{ border: "1px solid #dddddd", padding: "8px", backgroundColor: "#f4f4f6"}}></td>
                        <td style={{ border: "1px solid #dddddd", padding: "8px", backgroundColor: "#f4f4f6"}}></td>
                        <td style={{ border: "1px solid #dddddd", padding: "8px", backgroundColor: "#f4f4f6"}}></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td style={{ border: "1px solid #dddddd", padding: "8px", backgroundColor: "#f4f4f6"}}></td>
                        <td style={{ border: "1px solid #dddddd", padding: "8px", backgroundColor: "#f4f4f6"}}></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                        <td className="table-data"><InputBox defaultValue="0.00"/></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="page3-card2-outside-div-buttons-1">
                  <div>BACK</div>
                  <div>CREATE CHALLAN</div>
                  <div>MAKE PAYMENT/POST CREDIT TO LEDGER</div>
                  <div style={{backgroundColor: "#31528f9d"}}>PROCEED TO FILE</div>
                </div>
                <div className="page3-card2-outside-div-buttons-2">
                  <div>TAX LIABILITY BREAKUP, AS APPLICABLE</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page3-footer"></div>
      </div>
    </div>
  );
}
