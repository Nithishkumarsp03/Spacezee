import React from "react";
import Logo from "../../assets/logo.svg";
import Profile from "../../assets/user.jpg";

export default function Header() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="h-14 bg-[#0b1e59] flex justify-between text-white font-semibold text-lg items-center px-3">
        <img src={Logo} alt="Logo" width={65} />
        <p>Simulated website - For Educational Purpose Only</p>
        <p>Question No: EPFO_001AA</p>
      </div>

      <div className="h-10 bg-white flex justify-end items-center p-4 gap-2">
        <div className="flex h-7 w-7 rounded-full overflow-hidden">
          <img
            src={Profile}
            alt="User Profile"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="text-black text-[14px]">Nirmal</div>
        <div className="text-black text-[14px]">Signout</div>
      </div>

      <div className="h-[37%] flex justify-end items-center px-4">
        <div className="w-[370px] h-14 bg-[#3580af] flex items-center px-4 gap-2 rounded-[7px]">
          <div className="text-[#84e2fe] text-[12px]">
            <div>Logged in As:</div>
            <div>Designation:</div>
          </div>
          <div className="text-[12px] text-white">
            <div>Nirmal</div>
            <div>Registered User</div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex flex-1 items-center gap-3 text-[12px] pl-5">
        {[
          "Home",
          "Know your LIN",
          "Know your minimum wage",
          "Common return",
          "Download Manual",
          "Contact us",
        ].map((item, index) => (
          <div
            key={index}
            className="relative border-r-[1px] border-[#bebebe] pr-2 text-black hover:text-[#2a7ab9] transition-colors duration-300 
      after:content-[''] after:absolute after:left-1/2 after:bottom-[-2px] after:h-[1px] after:w-0 after:bg-[#2a7ab9] after:transition-all after:duration-300 after:ease-in-out hover:after:w-[94%] hover:after:left-0"
          >
            {item}
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
}
