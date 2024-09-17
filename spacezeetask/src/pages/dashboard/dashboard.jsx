import React from 'react'
import './dashboard.css'

export default function Dashboard() {
  return (
    <>
    <div>
      <div className='heading'>
        <p>Dashboard</p>
      </div>
      <div className='subheading'>
        <p>Register Establisment for LIN</p>
      </div>
      <div className='contents'>
        <div>
          <div className='sub-headings'>
              <p>Establishment Details</p>
          </div>
          <div className='sub-headings'>
              <p>eContacts</p>
          </div>
          <div className='sub-headings'>
              <p>Contact Persons</p>
          </div>
          <div className='sub-headings'>
              <p>Identifiers</p>
          </div>
          <div className='sub-headings'>
              <p>Entity Relationship</p>
          </div>
          <div className='sub-headings'>
              <p>Additional Information</p>
          </div>
          <div className='sub-headings'>
              <p>Acts Applicable</p>
          </div>
          <div className='sub-headings'>
              <p>Attachments</p>
          </div>
        </div>
        <button style={{backgroundColor: "rgb(0, 130, 200)", color: "white", border: "none", padding: "10px", margin: "10px", marginTop: "0"}}>Summary & Submission</button>
        <table className="custom-table">
          <tr style={{backgroundColor: "#f0f0f0"}}>
            <td>Labour Identification Number/ श्रम पहचान संख्या</td>
            <td>Date/ तिथि:</td>
          </tr>
          <tr style={{backgroundColor: "white"}}>
            <td></td>
            <td></td>
          </tr>
        </table>
        <div>
          <table className='table'>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>A) Brief Information</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "white"}}>
                <td >Establishment Category</td>
                <td>Sector (Ownership Type)</td>
                <td>PAN (As per establishment)</td>
                <td>Establishment Setup Date</td>
              </tr>
          </table>
        </div>
        <div>
          <table className='table'>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>B) eContact/ ई-संपर्क</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "white"}}>
                <td>Primary e-Mail Id</td>
                <td>mahesh526@nergymail.com</td>
                <td>Primary Mobile No.</td>
                <td>2389652322</td>
              </tr>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>Other eContact Details</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "white"}}>
                <td>Sr. No.</td>
                <td>Contact Type</td>
                <td>Contact Value</td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
          </table>
        </div>
        <div>
          <table className='table'>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>C) Contact Person/ संपर्क व्यक्ति</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "white"}}>
                <td>Sr. No.</td>
                <td>Person Name</td>
                <td>User Id</td>
                <td>Representing as</td>
                <td>Address and eContact</td>
              </tr>
          </table>
        </div>
        <div>
          <table className='table'>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>D) Identifiers/ आईडेनटीफायर्स</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "white"}}>
                <td>Sr. No.</td>
                <td>Identifier Type</td>
                <td>Identifier Value</td>
                <td>Identifier Name</td>
                <td>Issued Date</td>
                <td>Issued authority, Place</td>
              </tr>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>1</td>
                <td>DGMS Registration Number</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
          </table>
        </div>
        <div>
          <table className='table'>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>E) Related Establishment/ संबंधित प्रतिष्ठान</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "white"}}>
                <td>Sr. No.</td>
                <td>Establishment Name / Address</td>
                <td>LIN</td>
                <td>Relationship Type</td>
                <td>	Entity Respesention Type</td>
              </tr>
          </table>
        </div>
        <div>
          <table className='table'>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>F) Additional Information / अतिरिक्त जानकारी</td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "white"}}>
                <td>Under Section</td>
                <td>Activity as per National industrial classification</td>
              </tr>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>Is there any Hazardous activity in your establishment</td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "white"}}>
                <td>Is there Dangerous activity in your establishment</td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>Is there any seasonal operation type</td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>Power Hp</td>
                <td></td>
              </tr>
          </table>
        </div>
        <div>
          <table className='table'>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>G) Number of workers as on date 14-01-2021*</td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "white"}}>
                <td>Regular</td>
                <td>Contract Labour</td>
                <td>	Total</td>
              </tr>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>Man</td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "white"}}>
                <td>Female</td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>other</td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "white"}}>
                <td>Total</td>
                <td></td>
                <td></td>
              </tr>
          </table>
        </div>
        <div>
          <table className='table'>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>J) Attachments</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "white"}}>
                <td>Sr. No.</td>
                <td>Type of Document</td>
                <td>Name of Document </td>
                <td>File</td>
                <td>Size</td>
              </tr>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>1</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
          </table>
        </div>
        <div>
          <table className='table'>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td> K) Applicable Act/ लागू अधिनियम</td>
                <td></td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "white"}}>
                <td>Sr. No.</td>
                <td>Act Name</td>
                <td>Coverage Date </td>
              </tr>
          </table>
        </div>
        <div>
          <table className='table'>
              <tr style={{backgroundColor: "#f0f0f0"}}>
                <td>  L) Submitted Jurisdiction Office / प्रस्तुत क्षेत्राधिकार कार्यालय</td>
                <td></td>
              </tr>
              <tr style={{backgroundColor: "white"}}>
                <td>jurisdiction</td>
                <td>Office Name</td>
              </tr>
          </table>
        </div>
        <div className="left-side-container">
          <button style={{backgroundColor: "rgb(0, 130, 200)", color: "white", border: "none", padding: "6px", margin: "10px", marginTop: "0", marginRight: "auto"}}>Save</button>
        </div>
      </div>
    </div>
    </>
  )
}
