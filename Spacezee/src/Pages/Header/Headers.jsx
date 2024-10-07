import React from 'react'
import Logo from '../../assets/nergy_logo.svg'
import '../../Styles/global.css'

export default function Headers() {
  return (
    <div className='header-page'>
      <div className='top'>
        <div style={{width:'25%'}}><img src={Logo} alt="" width={65} height={65} /></div>
        <div className="center-text">Simulated website - For Educational purpose only</div>
        <div className="right-text">Question No: LIN_001AA</div>
      </div>
    </div>
  )
}
