import React from 'react'
import '../../Styles/global.css'
import user from '../../assets/user.jpg'

export default function Subheader() {
  return (
    <div style={{height: "100%", width: "100%"}}>
    <div className="dashboard-header" >
        <div className="dashboard-header-name">
            <p>
            Goods and Services Tax
            <br />
            E-Waybill System
            </p>
        </div>
        <div className="dashboard-user">
          <img src={user} alt="" />
        </div>
    </div>
    </div>
  )
}
