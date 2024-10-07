import * as React from "react";
import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import Captcha from '../../assets/captcha.jpg'
import Emblem from "../../assets/Emblem.png";

export default function Login() {

  const navigate = useNavigate();

  return (
    <div className="login-page">
      <div className="login-container">
        <img src={Emblem} alt="" className="emblem" />
        <h3>E-Waybill System</h3>
        <div className="inputs">
          <div style={{ position: "relative", width: "88%" }}>
            <FaUser
              fontSize={"18px"}
              color="rgb(102, 1, 197)"
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            />
            <input
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              style={{
                width: "100%",
                padding:
                  "15px 10px 15px 35px" /* Extra padding on the left for the icon */,
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>

          <div style={{ position: "relative", width: "88%" }}>
            <FaKey
              fontSize={"18px"}
              color="rgb(102, 1, 197)"
              style={{
                position: "absolute",
                top: "50%",
                left: "10px",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            />
            <input
              name="email"
              type="email"
              placeholder="johndoe@email.com"
              style={{
                width: "100%",
                padding: "15px 10px 15px 35px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
          <div className="verify-captcha">
            <div>
                <IoEye fontSize={"20px"}/>
            </div>
            <img src={Captcha} alt="" style={{width: "130px"}}/>
          </div>
          <div
            className="captcha"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div style={{ color: "white", marginRight: "0px", backgroundColor: "rgb(102, 1, 197)", padding: "6px", borderRadius: "3px" }}>
              Enter Captcha
            </div>
            <input
              type="text"
              style={{
                width: "170px",
                padding: "8px",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>
        <div className="login-button" onClick={() => navigate('/dashboard')}>
            <button>LOGIN</button>
        </div>
        <div className="options">
            <p style={{color: 'rgb(3, 137, 174)'}}>New Registration ?</p>
            <p style={{marginRight: '-10px', marginLeft: 'auto'}}>Forgot Credentials ?</p>
        </div>
        <div className="hint">
            <p>If you are unable to Login, you can follow the steps given in this document</p>
        </div>
      </div>
    </div>
  );
}
