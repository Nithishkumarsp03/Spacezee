import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import InputBox from "../../components/InputBox/InputBox";
import SelectBox from "../../components/selectbox/SelectBox";

export default function Page9() {
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
                  <b className="text-black">Note: </b>Information under this tab
                  are optional to be filled. (*):
                </p>
              </div>
              <div className="w-full bg-[#eaf9ff] border border-[#cbe1f7]">
              <p className="font-extrabold text-[#003f7a] ml-6 bg-white w-fit px-3 border border-[#ccc] mt-2">
                    N. Date of Setup Proof Attachment:*
                  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
