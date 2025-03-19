import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

export default function Page6() {
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
                  <b className="text-black">Note: </b>Required fields are
                  indicated by an (*):
                </p>

                {/* Form Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                  <div className="flex flex-col space-y-1">
                    <label className="font-semibold">
                      76. Select Identifier
                    </label>
                    <select className="border rounded p-2 w-full">
                      <option value="">Select Identifier</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="font-semibold">
                      77. Identifier Value *
                    </label>
                    <select className="border rounded p-2 w-full">
                      <option value="">Enter Identifier Value</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="font-semibold">
                      78. Name as on Identifier *
                    </label>
                    <select className="border rounded p-2 w-full">
                      <option value="">Name as on Identifier</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="font-semibold">79. Date of Issue *</label>
                    <input type="date" className="border rounded p-2 w-full" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="flex flex-col space-y-1">
                    <label className="font-semibold">
                      80. Issued by Authority *
                    </label>
                    <input
                      type="text"
                      placeholder="Issued by authority"
                      className="border rounded p-2 w-full"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label className="font-semibold">
                      81. Issued at Place *
                    </label>
                    <input
                      type="text"
                      placeholder="Issued at {place}"
                      className="border rounded p-2 w-full"
                    />
                  </div>

                  <div className="flex items-center gap-2 mt-6">
                    <input type="checkbox" className="w-4 h-4" />
                    <label className="font-semibold">
                      83. Mark it as Address Proof
                    </label>
                  </div>
                </div>
                <div className="w-full flex gap-2 flex-row items-center justify-start mt-3">
                  <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                    Add
                  </button>
                  <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                    Reset
                  </button>
                </div>
                <table className="bg-white w-full border border-gray-300 mt-5">
                  {/* Table Header */}
                  <thead>
                    <tr className="text-center">
                      <th className=" p-2">Action</th>
                      <th className=" p-2">Sr No</th>
                      <th className=" p-2">Identifier type</th>
                      <th className=" p-2">Value</th>
                      <th className=" p-2">Name of Identifier</th>
                      <th className=" p-2">Date of issue</th>
                      <th className=" p-2">Issued by (Authority)</th>
                      <th className=" p-2">Issued at (place)</th>
                    </tr>
                  </thead>

                  {/* Table Body */}
                  <tbody>
                    <tr className="text-center">
                      <td colSpan="8" className="p-3 text-gray-500">
                        No data available
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="flex justify-between mt-4">
                  <div>
                    <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                      Delete
                    </button>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                      Previous
                    </button>
                    <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                      Save as Draft
                    </button>
                    <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-[#539dcc] w-[100%] h-[300px] mt-0"></div>
    </div>
  );
}
