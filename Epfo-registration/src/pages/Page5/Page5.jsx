import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

export default function Page5() {
  const [selected, setSelected] = useState(null);

  const items = [
    "Establishment details",
    "eContacts",
    "Contact Persons",
    "Identifiers",
    "Employment Details",
    "Branch/Division",
    "Activities",
    "Attachments",
  ];

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
          <div className="text-[13px] border-b border-[#d3d2d2] py-[10px] px-4 flex">
            <div>Dashboard</div>
          </div>
          <div className="px-4 py-4 flex-col justify-between h-[90%] w-[100%] gap-4">
            <div className="text-[#539dcc] text-[18px]">
              Common Registration form for EPFO
            </div>
            <div className="bg-[#f1f7fd] border-t-2 border-[#acd5ee] h-[80%] w-full mt-3">
              <div className="flex w-full gap-3 p-3 px-5">
                {items.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelected(item)}
                    className={`p-1 px-3 border border-[#ccc] cursor-pointer transition-all duration-300 ${
                      selected === item
                        ? "bg-[#003f7a] text-white"
                        : "bg-[#f1f1f1]"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="h-[33%] w-full flex justify-center">
                <div className="bg-[#eaf9ff] h-[100%] w-[98%] border border-[#cbe1f7]">
                  <p className="font-extrabold text-[#003f7a] ml-6 bg-white w-fit px-3 border border-[#ccc] mt-2">
                    K. Economic Activity as per National Industrial
                    Classification
                  </p>
                  <div className="flex w-[70%] justify-center mt-5 items-center gap-3">
                    <div className="font-bold">
                      122. NIC Code (Not Mandatory) :
                    </div>
                    <div>
                      <input type="text" className="border border-[#cbe1f7]" />
                    </div>
                    <button className="bg-[#539dcc] px-3 text-white">
                      Search NIC code
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-2 px-3">
                <hr className="border border-[#cbe1f7]" />
              </div>
              <div className="flex w-[60%] justify-start mt-5 ml-4 items-center gap-3">
                <div className="font-bold">
                  123. Primary Business Activity:*
                </div>
                <div className="w-[50%]">
                  <select
                    name=""
                    id=""
                    className="border border-[#cbe1f7] px-4 p-1 w-[100%]"
                  >
                    <option value="">Select an option</option>
                  </select>
                </div>
              </div>
              <div className="w-full flex justify-end gap-3 pr-4 mt-5">
                <button className="bg-[#539dcc] px-3 p-1 text-white">
                  Previous
                </button>
                <button className="bg-[#539dcc] px-3 text-white">
                  Save as Draft
                </button>
                <button className="bg-[#539dcc] px-3 text-white">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#539dcc] w-[100%] h-[40%]"></div>
    </div>
  );
}
