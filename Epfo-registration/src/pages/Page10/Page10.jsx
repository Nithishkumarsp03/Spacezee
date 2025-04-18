import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import InputBox from "../../components/InputBox/InputBox";
import SelectBox from "../../components/selectbox/SelectBox";

export default function Page10() {
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
    <div className="min-h-screen w-screen overflow-x-hidden flex flex-col">
      {/* Header Section */}
      <div className="h-[220px]">
        <Header />
      </div>

      {/* Main Content - Takes Full Height */}
      <div className="flex flex-grow w-full h-full">
        {/* Sidebar (Navbar) - Stretches Full Height */}
        <div className="w-[20%] bg-gray-100 min-h-screen flex-shrink-0">
          <Navbar />
        </div>

        {/* Content Area - Also Stretches Full Height */}
        <div className="w-[80%] bg-white flex flex-col flex-grow p-4">
          {/* Top Dashboard Section */}
          <div className="text-[13px] border-b border-[#d3d2d2] py-[10px]">
            <div>Dashboard</div>
          </div>

          {/* Content Section */}
          <div className="py-4 flex-grow">
            <div className="text-[#539dcc] text-[18px]">
              Common Registration form for EPFO
            </div>

            {/* Expandable Content */}
            <div className="bg-[#f1f7fd] border-t-2 border-[#acd5ee] mt-3 p-4">
              <div className="flex flex-wrap gap-3">
                {items.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSelected(item)}
                    className={`p-2 px-4 border border-[#ccc] cursor-pointer transition-all duration-300 ${
                      selected === item
                        ? "bg-[#003f7a] text-white"
                        : "bg-[#f1f1f1]"
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>

              {/* Form Section */}
              <div className="mt-4">
                <p className="text-red-500 w-full bg-[#fff2ce] p-1 text-sm">
                  <b className="text-black">Note: </b>Required fields are indicated by an (*):
                </p>
              </div>
              <p className="text-sm mt-3">(Notification will be sent on Primary Email and Mobile of Establishment)</p>
              <div className="flex mt-4 gap-4">
                <div className="w-full">
                    <label htmlFor="" className="font-bold">28. Primary E-Mail:<span className="text-red-600 font-extrabold">*</span></label>
                    <InputBox type="email"/>
                </div>
                <div className="w-full">
                    <label htmlFor="" className="font-bold">28. Primary Mobile:<span className="text-red-600 font-extrabold">*</span></label>
                    <InputBox />
                </div>
              </div>
              <hr className="mt-4 border border-[#acd5ee]"/>
              <div className="flex justify-end mt-4 gap-2">
              <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                Previous
              </button>
              <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                Save as Draft
              </button>
              <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                Submit
              </button>
            </div>
            </div>
            
          </div>
        </div>
      </div>
      <div className="bg-[#539dcc] w-[100%] h-[300px] mt-0"></div>
    </div>
  );
}
