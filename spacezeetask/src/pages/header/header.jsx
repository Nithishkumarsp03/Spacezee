import React from 'react';
import './header.css';
import Logo from '../../Assets/nergy_logo.svg';
import User from '../../Assets/user.svg'

export default function Header() {
  return (
    <div>
      <div className='top'>
        <img src={Logo} alt="" width={65} height={65} />
        <h3 className="center-text">Simulated website - For Educational purpose only</h3>
        <h3 className="right-text">Question No: LIN_001AA</h3>
      </div>
      <div className="user">
        <img src={User} alt="" width={20} height={20}/>
        <p>MAHESH</p>
        <button>Signout</button>
      </div>
      <div className="details">
        <div className='details-box'>
            <p><span>Logged in As:</span>MAHESH</p>
            <p><span>Designation :</span>Registered User</p>
        </div>
      </div>
        <div className="nav-bar">
            <div className='nav-bar-content'>
                <p>HOME</p>
                <p>Know Your LIN</p>
                <p>Know YourMinimum Wage</p>
                <p>Common Return</p>
                <p>Download Manual</p>
                <p>Contact Us</p>
            </div>
        </div>
    </div>
  );
}

