import React from "react";
import Header from "../../Components/header";
import { IoIosArrowForward } from "react-icons/io";
import { IoHelpCircleSharp } from "react-icons/io5";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import InputBox from "../../Components/InputBox/InputBox";
import "./documentissued.css";

export default function Documentissued() {
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
                <p style={{color: "#2c4e86"}}>GSTR-1/IFF</p>
                <IoIosArrowForward
                  style={{ marginTop: "0.2%", marginRight: "-0.5%" }}
                />
                <p>Document issued</p>
              </div>
              <div className="paymentoftax" style={{ marginBottom: "0" }}>
                <div className="paymentoftax-header">
                  <div
                    className="paymentoftaxheader-left"
                    style={{ maxWidth: "70%" }}
                  >
                    <p>
                      GSTR-1 - Details of outward supplies of goods or services
                    </p>
                  </div>
                  <div className="paymentoftaxheader-right">
                    <p>Help</p>
                    <IoHelpCircleSharp style={{ marginTop: "3px" }} />
                  </div>
                </div>
                <div className="document-issued-body">
                  <div style={{ fontSize: "14px" }}>
                    Note: Kindly click on save button after any modification(
                    add, edit, delete) to save the changes
                  </div>
                  <div className="table-content-header">
                    1. Invoices for outward supply
                  </div>
                  <table className="document-issued-table">
                    <tr>
                      <th rowSpan={2}>No.</th>
                      <th colSpan={2}>Sr.No.</th>
                      <th rowSpan={2}>Total number</th>
                      <th rowSpan={2}>Cancelled</th>
                      <th rowSpan={2}>Net issued</th>
                      <th rowSpan={2}>Action</th>
                    </tr>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>
                        <InputBox defaultValue={"INV456"} />
                      </td>
                      <td>
                        <InputBox defaultValue={"INV457"} />
                      </td>
                      <td>
                        <InputBox defaultValue={"2"} />
                      </td>
                      <td>
                        <InputBox defaultValue={""} />
                      </td>
                      <td>
                        <InputBox defaultValue={""} />
                      </td>
                      <td>
                        <DeleteOutlinedIcon />
                      </td>
                    </tr>
                  </table>
                  <div className="page4-card2-outside-div-buttons-1">
                    <button
                      style={{
                        backgroundColor: "#14315d",
                        fontWeight: "400",
                        width: "15%",
                        padding: "10px",
                      }}
                    >
                      ADD DOCUMENT
                    </button>
                  </div>

                  <div className="table-content-header">
                    2. Invoices for inward supply from unregistered person
                  </div>
                  <table className="document-issued-table">
                    <tr>
                      <th rowSpan={2}>No.</th>
                      <th colSpan={2}>Sr.No.</th>
                      <th rowSpan={2}>Total number</th>
                      <th rowSpan={2}>Cancelled</th>
                      <th rowSpan={2}>Net issued</th>
                      <th rowSpan={2}>Action</th>
                    </tr>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                    </tr>
                  </table>
                  <div className="paymentoftax-subheader">
                    <p>There are no documents to be displayed.</p>
                  </div>
                  <div className="page4-card2-outside-div-buttons-1">
                    <button
                      style={{
                        backgroundColor: "#14315d",
                        fontWeight: "400",
                        width: "15%",
                        padding: "10px",
                      }}
                    >
                      ADD DOCUMENT
                    </button>
                  </div>

                  <div className="table-content-header">
                  3. Revised Invoice
                  </div>
                  <table className="document-issued-table">
                    <tr>
                      <th rowSpan={2}>No.</th>
                      <th colSpan={2}>Sr.No.</th>
                      <th rowSpan={2}>Total number</th>
                      <th rowSpan={2}>Cancelled</th>
                      <th rowSpan={2}>Net issued</th>
                      <th rowSpan={2}>Action</th>
                    </tr>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                    </tr>
                  </table>
                  <div className="paymentoftax-subheader">
                    <p>There are no documents to be displayed.</p>
                  </div>
                  <div className="page4-card2-outside-div-buttons-1">
                    <button
                      style={{
                        backgroundColor: "#14315d",
                        fontWeight: "400",
                        width: "15%",
                        padding: "10px",
                      }}
                    >
                      ADD DOCUMENT
                    </button>
                  </div>

                  <div className="table-content-header">
                  4. Debit Note
                  </div>
                  <table className="document-issued-table">
                    <tr>
                      <th rowSpan={2}>No.</th>
                      <th colSpan={2}>Sr.No.</th>
                      <th rowSpan={2}>Total number</th>
                      <th rowSpan={2}>Cancelled</th>
                      <th rowSpan={2}>Net issued</th>
                      <th rowSpan={2}>Action</th>
                    </tr>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                    </tr>
                  </table>
                  <div className="paymentoftax-subheader">
                    <p>There are no documents to be displayed.</p>
                  </div>
                  <div className="page4-card2-outside-div-buttons-1">
                    <button
                      style={{
                        backgroundColor: "#14315d",
                        fontWeight: "400",
                        width: "15%",
                        padding: "10px",
                      }}
                    >
                      ADD DOCUMENT
                    </button>
                  </div>

                  <div className="table-content-header">
                  5. Credit Note
                  </div>
                  <table className="document-issued-table">
                    <tr>
                      <th rowSpan={2}>No.</th>
                      <th colSpan={2}>Sr.No.</th>
                      <th rowSpan={2}>Total number</th>
                      <th rowSpan={2}>Cancelled</th>
                      <th rowSpan={2}>Net issued</th>
                      <th rowSpan={2}>Action</th>
                    </tr>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                    </tr>
                  </table>
                  <div className="paymentoftax-subheader">
                    <p>There are no documents to be displayed.</p>
                  </div>
                  <div className="page4-card2-outside-div-buttons-1">
                    <button
                      style={{
                        backgroundColor: "#14315d",
                        fontWeight: "400",
                        width: "15%",
                        padding: "10px",
                      }}
                    >
                      ADD DOCUMENT
                    </button>
                  </div>

                  <div className="table-content-header">
                  6. Receipt voucher
                  </div>
                  <table className="document-issued-table">
                    <tr>
                      <th rowSpan={2}>No.</th>
                      <th colSpan={2}>Sr.No.</th>
                      <th rowSpan={2}>Total number</th>
                      <th rowSpan={2}>Cancelled</th>
                      <th rowSpan={2}>Net issued</th>
                      <th rowSpan={2}>Action</th>
                    </tr>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                    </tr>
                  </table>
                  <div className="paymentoftax-subheader">
                    <p>There are no documents to be displayed.</p>
                  </div>
                  <div className="page4-card2-outside-div-buttons-1">
                    <button
                      style={{
                        backgroundColor: "#14315d",
                        fontWeight: "400",
                        width: "15%",
                        padding: "10px",
                      }}
                    >
                      ADD DOCUMENT
                    </button>
                  </div>

                  <div className="table-content-header">
                  7. Payment Voucher
                  </div>
                  <table className="document-issued-table">
                    <tr>
                      <th rowSpan={2}>No.</th>
                      <th colSpan={2}>Sr.No.</th>
                      <th rowSpan={2}>Total number</th>
                      <th rowSpan={2}>Cancelled</th>
                      <th rowSpan={2}>Net issued</th>
                      <th rowSpan={2}>Action</th>
                    </tr>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                    </tr>
                  </table>
                  <div className="paymentoftax-subheader">
                    <p>There are no documents to be displayed.</p>
                  </div>
                  <div className="page4-card2-outside-div-buttons-1">
                    <button
                      style={{
                        backgroundColor: "#14315d",
                        fontWeight: "400",
                        width: "15%",
                        padding: "10px",
                      }}
                    >
                      ADD DOCUMENT
                    </button>
                  </div>

                  <div className="table-content-header">
                  8. Refund voucher
                  </div>
                  <table className="document-issued-table">
                    <tr>
                      <th rowSpan={2}>No.</th>
                      <th colSpan={2}>Sr.No.</th>
                      <th rowSpan={2}>Total number</th>
                      <th rowSpan={2}>Cancelled</th>
                      <th rowSpan={2}>Net issued</th>
                      <th rowSpan={2}>Action</th>
                    </tr>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                    </tr>
                  </table>
                  <div className="paymentoftax-subheader">
                    <p>There are no documents to be displayed.</p>
                  </div>
                  <div className="page4-card2-outside-div-buttons-1">
                    <button
                      style={{
                        backgroundColor: "#14315d",
                        fontWeight: "400",
                        width: "15%",
                        padding: "10px",
                      }}
                    >
                      ADD DOCUMENT
                    </button>
                  </div>

                  <div className="table-content-header">
                  9. Delivery Challan for job work
                  </div>
                  <table className="document-issued-table">
                    <tr>
                      <th rowSpan={2}>No.</th>
                      <th colSpan={2}>Sr.No.</th>
                      <th rowSpan={2}>Total number</th>
                      <th rowSpan={2}>Cancelled</th>
                      <th rowSpan={2}>Net issued</th>
                      <th rowSpan={2}>Action</th>
                    </tr>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                    </tr>
                  </table>
                  <div className="paymentoftax-subheader">
                    <p>There are no documents to be displayed.</p>
                  </div>
                  <div className="page4-card2-outside-div-buttons-1">
                    <button
                      style={{
                        backgroundColor: "#14315d",
                        fontWeight: "400",
                        width: "15%",
                        padding: "10px",
                      }}
                    >
                      ADD DOCUMENT
                    </button>
                  </div>

                  <div className="table-content-header">
                  10. Delivery Challan for supply on approval
                  </div>
                  <table className="document-issued-table">
                    <tr>
                      <th rowSpan={2}>No.</th>
                      <th colSpan={2}>Sr.No.</th>
                      <th rowSpan={2}>Total number</th>
                      <th rowSpan={2}>Cancelled</th>
                      <th rowSpan={2}>Net issued</th>
                      <th rowSpan={2}>Action</th>
                    </tr>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                    </tr>
                  </table>
                  <div className="paymentoftax-subheader">
                    <p>There are no documents to be displayed.</p>
                  </div>
                  <div className="page4-card2-outside-div-buttons-1">
                    <button
                      style={{
                        backgroundColor: "#14315d",
                        fontWeight: "400",
                        width: "15%",
                        padding: "10px",
                      }}
                    >
                      ADD DOCUMENT
                    </button>
                  </div>

                  <div className="table-content-header">
                  11. Delivery Challan in case of liquid gas
                  </div>
                  <table className="document-issued-table">
                    <tr>
                      <th rowSpan={2}>No.</th>
                      <th colSpan={2}>Sr.No.</th>
                      <th rowSpan={2}>Total number</th>
                      <th rowSpan={2}>Cancelled</th>
                      <th rowSpan={2}>Net issued</th>
                      <th rowSpan={2}>Action</th>
                    </tr>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                    </tr>
                  </table>
                  <div className="paymentoftax-subheader">
                    <p>There are no documents to be displayed.</p>
                  </div>
                  <div className="page4-card2-outside-div-buttons-1">
                    <button
                      style={{
                        backgroundColor: "#14315d",
                        fontWeight: "400",
                        width: "15%",
                        padding: "10px",
                      }}
                    >
                      ADD DOCUMENT
                    </button>
                  </div>

                  <div className="table-content-header">
                  12. Delivery Challan in cases other than by way of supply (excluding at S no. 9 to 11)
                  </div>
                  <table className="document-issued-table">
                    <tr>
                      <th rowSpan={2}>No.</th>
                      <th colSpan={2}>Sr.No.</th>
                      <th rowSpan={2}>Total number</th>
                      <th rowSpan={2}>Cancelled</th>
                      <th rowSpan={2}>Net issued</th>
                      <th rowSpan={2}>Action</th>
                    </tr>
                    <tr>
                      <th>From</th>
                      <th>To</th>
                    </tr>
                  </table>
                  <div className="paymentoftax-subheader">
                    <p>There are no documents to be displayed.</p>
                  </div>
                  <div className="page4-card2-outside-div-buttons-1">
                    <button
                      style={{
                        backgroundColor: "#14315d",
                        fontWeight: "400",
                        width: "15%",
                        padding: "10px",
                      }}
                    >
                      ADD DOCUMENT
                    </button>
                  </div>

                  <div className="page4-card2-outside-div-buttons-1" style={{gap: "10px"}}>
                    <button
                      style={{
                        color :"black",
                        border :"1px solid black",
                        fontWeight: "400",
                        width: "8%",
                        padding: "10px",
                      }}
                    >
                      BACK
                    </button>
                    <button
                      style={{
                        backgroundColor: "#14315d",
                        fontWeight: "400",
                        width: "8%",
                        padding: "10px",
                      }}
                    >
                      SAVE
                    </button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="page4-footer"></div>
      </div>
    </div>
  );
}
