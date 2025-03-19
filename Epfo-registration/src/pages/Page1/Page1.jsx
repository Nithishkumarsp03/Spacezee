import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

export default function Page1() {
  return (
    <div className="h-[100%] w-[100%] overflow-x-hidden">
      <div className="h-[28%]">
        <Header />
      </div>
      <div className="h-[72%] w-[100%] flex">
        <div className="w-[20%] h-[100%]">
          <Navbar />
        </div>
        <div className="w-[80%] h-[100%] bg-white">
          <div className="text-[13px] border-b border-[#bebebe] py-[10px] px-4">
            Dashboard
          </div>
          <div className="p-3">
            <div>
              Welcome to the Unified Shram Suvidha Portal of the Ministry of
              Labour & Employment.
            </div>
            <br />
            <div>
              You have successfully created your Shram Suvidha Account. You can
              now link your establishments with this account. You can link
              multiple establishments represented by you with this single Shram
              Suvidha Account. These establishments would be linked with this
              account after verification by the respective labour enforcement
              agency (e.g. CLC, EPFO, ESIC, and DGMS). You can avail the
              following services through the Unified Shram Suvidha Portal
            </div>
            <br />
            <div className="px-3">
              <ul>
                <li>1. Common Registration under EPFO & ESIC</li>
                <li>
                  2. CLC Common Registration under CLRA, ISMW and BOCW acts.
                </li>
                <li>3. CLC Common Annual Return (including revised return).</li>
                <li>4. Common ECR under EPFO & ESIC.</li>
                <li>5. License under CLR&A and ISMW Acts.</li>
              </ul>
            </div>
            <br />
            <div>
              In case of any queries kindly contact Shram Suvidha Helpdesk at
              help-shramsuvidha@gov.in
            </div>
            <br />
            <div>
              To get benefit of full 12% EPF employer share under Pradhan Mantri
              Rojgar Protsahan Yojna.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#539dcc] w-[100%] h-[40%]"></div>
    </div>
  );
}
