import React from "react";
import Header from "../../Components/header";
import { IoIosArrowForward } from "react-icons/io";
import { IoHelpCircleSharp } from "react-icons/io5";
import "./summary.css";

export default function Summary() {
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
                <p style={{ color: "#2c4e86" }}>GSTR-1/IFF</p>
                <IoIosArrowForward
                  style={{ marginTop: "0.2%", marginRight: "-0.5%" }}
                />
                <p>B2CS</p>
              </div>
              <div
                className="page1-content-body-card1"
                style={{ height: "80px" }}
              >
                <div>
                  <div className="first3">GSTIN -32BACXM3031K1Z5</div>
                  <div className="first3">Legal Name - Ramanadhan V</div>
                  <div className="first3">Return Type - GSTR1</div>
                  <div className="first6">FY - 2022-2023</div>
                  <div className="first6">Return period - September</div>
                  <div className="first6">Status - Ready to File</div>
                </div>
              </div>

              <div className="summary-content">
                <div className="summary-header">CONSOLIDATED SUMMARY</div>

                <table className="summary-table">
                  <tr>
                    <th>Description [Expand All v]</th>
                    <th>No. of records</th>
                    <th>Document Type</th>
                    <th>Value (₹)</th>
                    <th>Integrated Tax(₹)</th>
                    <th>Central Tax(₹)</th>
                    <th>State/UT Tax(₹)</th>
                    <th>Cess(₹)</th>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      4A - Taxable outward supplies made to registered persons
                      (other than reverse charge supplies) - B2B Regular
                    </td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>1</td>
                    <td>Invoice</td>
                    <td>100000</td>
                    <td>0</td>
                    <td>9000</td>
                    <td>9000</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      4B- Taxable outward supplies made to registered persons
                      attracting tax on reverse charge - B2B Reverse charge
                    </td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>1</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      5A- Taxable outward inter-state supplies made to
                      unregistered persons (where invoice value is more than 2.5
                      lakh)- B2CL (Large)
                    </td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>1</td>
                    <td>Invoice</td>
                    <td>0</td>
                    <td>0</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      6B-Supplies made to SEZ unit or SEZ developer -
                      SEZWP/SEZWOP
                    </td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>EXPWP</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>EXPWOP</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">6A- Exports</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>SEZWP</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>SEZWOPP</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">6C - Deemed Exports - DE</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      7 - Taxable supplies (Net of debit notes and credit notes)
                      to unregistered persons other than the supplies covered in
                      Table 5 - B2CS (Others)
                    </td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>1</td>
                    <td>Net Value</td>
                    <td>10000</td>
                    <td>0</td>
                    <td>900</td>
                    <td>900</td>
                    <td>0</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      8- Nil rated,exempted and non GST outward supplies
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>Total</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                  </tr>
                  <tr>
                    <td colSpan={3}>Nil</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                  </tr>
                  <tr>
                    <td colSpan={3}>Exempted</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                  </tr>
                  <tr>
                    <td colSpan={3}>Non-GST</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      9A - Amendment to taxable outward supplies made to
                      registered person in returns of earlier tax periods in
                      table 4 - B2B Regular
                    </td>
                  </tr>
                  <tr>
                    <td>Amended amount - Total</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>Net differential amount(Amended - Original)</td>
                    <td></td>
                    <td></td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      9A - Amendment to taxable outward supplies made to
                      registered person in returns of earlier tax periods in
                      table 4 - B2B Reverse charge
                    </td>
                  </tr>
                  <tr>
                    <td>Amended amount - Total</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>Net differential amount(Amended - Original)</td>
                    <td></td>
                    <td></td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      9A - Amendment to Inter-State supplies made to
                      unregistered person (where invoice value is more than
                      Rs.2.5 lakh) in returns of earlier tax periods in table 5
                      - B2CL (Large)
                    </td>
                  </tr>
                  <tr>
                    <td>Amended amount - Total</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>Net differential amount(Amended - Original)</td>
                    <td></td>
                    <td></td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      6B-Supplies made to SEZ unit or SEZ developer -
                      SEZWP/SEZWOP
                    </td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>EXPWP</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>EXPWOP</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      6B-Supplies made to SEZ unit or SEZ developer -
                      SEZWP/SEZWOP
                    </td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>EXPWP</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>EXPWOP</td>
                    <td>0</td>
                    <td>Invoice</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      9B - Credit/Debit Notes (Registered) - CDNR
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Total - Net off debit/credit notes (Debit notes - Credit
                      notes) v
                    </td>
                    <td>0</td>
                    <td>Note</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      9B - Credit/Debit Notes (Unregistered) - CDNUR
                    </td>
                  </tr>
                  <tr>
                    <td>
                      Total - Net off debit/credit notes (Debit notes - Credit
                      notes)
                    </td>
                    <td>0</td>
                    <td>Note</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">Unregistered Type V</td>
                  </tr>
                  <tr>
                    <td colSpan={8}>
                      9C - Amended Credit/Debit Notes (Registered) - CDNRA
                    </td>
                  </tr>
                  <tr>
                    <td>Amended amount- Total</td>
                    <td>0</td>
                    <td>Note</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>
                      Net Differential amount (Net Amended Debit notes - Net
                      Amended Credit notes) - Total v
                    </td>
                    <td></td>
                    <td></td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      9C - Amended Credit/Debit Notes (Unregistered) - CDNURA
                    </td>
                  </tr>
                  <tr>
                    <td>Amended amount- Total</td>
                    <td>0</td>
                    <td>Note</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>
                      Net Differential amount (Net Amended Debit notes - Net
                      Amended Credit notes) - Total
                    </td>
                    <td></td>
                    <td></td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td style={{backgroundColor: "#cccccc"}}></td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={8}>Unregistered Type V</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      10 - Amendment to taxable outward supplies to unregistered
                      person in returns for earlier tax periods in table 7 - B2C
                      (Others)
                    </td>
                  </tr>
                  <tr>
                    <td>Amended amount- Total</td>
                    <td>0</td>
                    <td>Net Value</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>Net differential amount(Amended - Original)</td>
                    <td></td>
                    <td></td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      11A(1), 11A(2) - Advances received for which invoice has
                      not been issued (tax amount to be added to the output tax
                      liability) (Net of Refund Vouchers)
                    </td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>0</td>
                    <td>Net Value</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      11B(1), 11B(2) - Advance amount received in earlier tax
                      period and adjusted against the supplies being shown in
                      this tax period in Table Nos. 4, 5, 6 and 7F
                    </td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>0</td>
                    <td>Net Value</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      11A - Amendment to advances received in returns for
                      earlier tax periods in table 11A(1), 11A(2)
                    </td>
                  </tr>
                  <tr>
                    <td>Amended amount- Total</td>
                    <td>0</td>
                    <td>Net value</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>Net differential</td>
                    <td></td>
                    <td></td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">
                      11B - Amendment to advances adjusted in returns for
                      earlier tax periods in table 11B(1),11B(2)
                    </td>
                  </tr>
                  <tr>
                    <td>Amended amount- Total</td>
                    <td>0</td>
                    <td>Net value</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td>Net differential</td>
                    <td></td>
                    <td></td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">12 - HSN-wise summary of outward supplies</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td>0</td>
                    <td>NA</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                    <td>0.00</td>
                  </tr>
                  <tr>
                    <td colSpan={8} className="highlighted-table-header">13 - Document Issued</td>
                  </tr>
                  <tr>
                    <td>Net issued documents v</td>
                    <td>2</td>
                    <td>All Documents</td>
                    <td colSpan={5}></td>
                  </tr>
                  <tr style={{backgroundColor:"#d9edf7", fontWeight: '600'}}>
                    <td colSpan={3}>Total Liability (Outward supplies other than Reverse charge)</td>
                    <td>110000</td>
                    <td>0</td>
                    <td>9900</td>
                    <td>9900</td>
                    <td>0</td>
                  </tr>
                </table>
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
                      backgroundColor: "#286090",
                      fontWeight: "400",
                      width: "25%"
                    }}
                  >
                    DOWNLOAD SUMMARY (PDF)
                  </button>
                  <button
                    style={{
                      backgroundColor: "#286090",
                      fontWeight: "400",
                      marginRight: "40px",
                      width: "15%"
                    }}
                  >
                    FILE STATEMENT
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
