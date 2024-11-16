import React from 'react'
import Header from '../../Components/header'
import { IoIosArrowForward } from "react-icons/io";
import "./page1.css"

export default function Page1() {
  return (
    <div style={{height: "100%", width: "100%", overflowY: "scroll", overflowX: "hidden"}}>
      <div className='header'>
        <Header />
      </div>
      <div className="page1-content">
        <div className='page1-content-body'>  
          <div className='page1-content-div'>
            <div className="page1-navigation">
              <p>Dashboard</p><IoIosArrowForward style={{marginTop: "0.2%", marginRight: "-0.5%"}}/>
              <p>Returns</p><IoIosArrowForward style={{marginTop: "0.2%", marginRight: "-0.5%"}}/>
              <p>GSTR-3B</p>
            </div>
            <div className='page1-content-body-header'>
              <p>GSTR-3B - Monthly Return</p>
            </div>
            <div className="page1-content-body-card1">
              <div>
                <div className='first3'>GSTIN -32BACXM3031K1Z5</div>
                <div className='first3'>Legal Name - Ramanadhan V</div>
                <div className='first3'>Status - Not Filed</div>
                <div className='first6'>FY - 2022-2023</div>
                <div className='first6'>Return period - September</div>
                <div className='first6'>Due Date - 21/10/2022</div>
              </div>
            </div>
            <div className="page1-content-body-card2">
              <div className='card2-outside-div'>
                <div className='card2-outside-div-div'>
                  <div className='card2-div1'>
                    <p style={{marginBottom: "10px"}}>Do you want to file Nil return? <span style={{color: "red"}}>*</span></p>
                    <p style={{color: "#337ab7", fontWeight: "600", fontStyle: "italic"}}>Nil Form GSTR-3B for a tax period can be filled if you:</p>
                    <ul style={{color: "blue", fontWeight: "400", marginLeft: "5%"}}>
                      <li>Have NOT made any Outward supplies and</li>
                      <li>Have NOT received any inward supplies and</li>
                      <li>Do NOT have any liability for the particular tax period.</li>
                    </ul>
                  </div>
                  <div className='card2-div2'>
                    <div>
                      <input type="radio" name='file-return'/>
                      <label htmlFor="file-return">Yes</label>
                    </div>
                    <div>
                      <input type="radio" name='file-return'/>
                      <label htmlFor="file-return">No</label>
                    </div>
                  </div>
                </div>
                <div className="card2-outside-div-div2">
                  <div className='card2-outside-div-buttons'>
                    <div>BACK</div>
                    <div style={{backgroundColor: "#286090", color: "white"}}>NEXT</div>
                  </div>
                </div>
              </div>
              <div className='card2-outside-div2'><span style={{color: "red"}}>*</span> Indicates mandatory fields</div>
            </div>
          </div>
        </div>
      </div>
      <div className="page1-content-footer"></div>
    </div>
  )
}
