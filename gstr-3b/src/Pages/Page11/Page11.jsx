import React from 'react'
import Header from '../../Components/header'
import { IoIosArrowForward } from "react-icons/io";
import Select from 'react-select'
import './page11.css'

export default function Page11() {

    const options=[
        {label: "Ramanadhan V", value: "Ramanadhan V"}
    ]


  return (
    <div style={{height: "100vh", width: "100vw"}}>
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
              <p>Filing of Tax</p>
            </div>
            <br />
            <div className='page11-checkbox'>
                <input type="checkbox" />
                I/We hereby solemnly affirm and declare that the information given herein above is true 
                and correct to the best of my/our knowledge and belief and nothing has been concealed therefrom.
            </div>
            <div style={{margin: "1%", marginTop: "2%"}}>Authorised Signatory <span style={{color: "red"}}>*</span></div>
            <div style={{width: "50%", margin: '1%'}}><Select options={options} isClearable/></div>
            <div className="page3-card2-outside-div-buttons-1" style={{marginBottom: "7rem"}}>
                  <div style={{backgroundColor: "white", border: "1px solid black", color: "black"}}>BACK</div>
                  <div style={{backgroundColor: "#dd8785"}}>SYSTEM GENERATED GSTR-3B</div>
                  <div style={{backgroundColor: "#31528f9d"}}>PREVIEW DRAFT GSTR-3B</div>
                  <div style={{backgroundColor: "#31528f9d"}}>FILE GSTR-3B WITH EVC</div>
                  <div style={{backgroundColor: "#31528f9d"}}>FILE GSTR-3B WITH DSC</div>
                </div>
          </div>
        </div>
        <div className="page4-footer" style={{height: "23rem"}}></div>
      </div>
    </div>
  )
}
