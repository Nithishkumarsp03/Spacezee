import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

export default function Page7() {
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
                  <b className="text-black">Note: </b>It would be better if PDF
                  is Readable Scanned copy of Document, Maximum size limit is 1
                  MB per file (*):
                </p>
                <div className="mt-4 bg-[#eaf9ff] border border-[#cbe1f7] py-3">
                  <p className="font-extrabold text-[#003f7a] ml-6 bg-white w-fit px-3 border border-[#ccc] mt-2">
                    M. Attachment as Proof of Address:*
                  </p>
                  <div className="mt-3 flex justify-evenly items-center">
                    <div>
                      <b>134</b>.{" "}
                      <select
                        name=""
                        id=""
                        className="p-2 px-5 border border-[#cbe1f7]"
                      >
                        <option value="">Select Document name</option>
                      </select>
                    </div>
                    <div>
                      <b>135</b>. <input type="file" />
                    </div>
                    <div>(Only pdf file type allowed)</div>
                    <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                      Upload
                    </button>
                  </div>
                </div>
                <div className="mt-4 bg-[#eaf9ff] border border-[#cbe1f7] py-3 flex flex-col gap-3">
                  <p className="font-extrabold text-[#003f7a] ml-6 bg-white w-fit px-3 border border-[#ccc] mt-2">
                    N. Date of Setup Proof Attachment:*
                  </p>
                  <div className="mt-3 flex justify-evenly items-center">
                    <div>
                      <b>136</b>.{" "}
                      <select
                        name=""
                        id=""
                        className="p-2 px-5 border border-[#cbe1f7]"
                      >
                        <option value="">Select Document name</option>
                      </select>
                    </div>
                    <div>
                      <b>137</b>. <input type="file" />
                    </div>
                    <div>(Only pdf file type allowed)</div>
                    <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                      Upload
                    </button>
                  </div>
                  <div className="mt-2 flex justify-start ml-16 items-center">
                    <div>
                      <b>138</b>.{" "}
                      <input type="text" placeholder="Reference number" />
                    </div>
                  </div>
                  <div className="mt-3 ml-16 flex justify-start items-center gap-14">
                    <div>
                      <b>139</b>. <input type="date" />
                    </div>
                    <div>
                      <b>140</b>.{" "}
                      <input type="text" placeholder="Issued by Place" />
                    </div>
                  </div>
                </div>
                <div className="mt-4 bg-[#eaf9ff] border border-[#cbe1f7] py-3 flex flex-col gap-3">
                  <p className="font-extrabold text-[#003f7a] ml-6 bg-white w-fit px-3 border border-[#ccc] mt-2">
                    O. Licence Proof Attachment:*
                  </p>
                  <div className="mt-3 flex justify-evenly items-center">
                    <div>
                      <b>141</b>.{" "}
                      <select
                        name=""
                        id=""
                        className="p-2 px-5 border border-[#cbe1f7]"
                      >
                        <option value="">Specify Document name</option>
                      </select>
                    </div>
                    <div>
                      <b>142</b>. <input type="file" />
                    </div>
                    <div>(Only pdf file type allowed)</div>
                    <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                      Upload
                    </button>
                  </div>
                </div>
                <div className="mt-4 bg-[#eaf9ff] border border-[#cbe1f7] py-3 flex flex-col gap-3">
                  <p className="font-extrabold text-[#003f7a] ml-6 bg-white w-fit px-3 border border-[#ccc] mt-2">
                    P. Specimen Signature Attachment:*
                  </p>
                  <div className="mt-3 flex justify-start items-center">
                    <div className="ml-14">
                      <b>141</b>. <input type="file" />
                    </div>
                    <div>(Only pdf file type allowed)</div>
                    <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md ml-14">
                      Upload
                    </button>
                  </div>
                </div>
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
      </div>
      <div className="bg-[#539dcc] w-[100%] h-[300px] mt-0"></div>
    </div>
  );
}
