import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import InputBox from "../../components/InputBox/InputBox";
import SelectBox from "../../components/selectbox/SelectBox";

export default function Page8() {
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
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "1rem",
                  marginTop: "30px",
                }}
              >
                <div>
                  <label
                    htmlFor="unitName"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    109. Name of Unit
                  </label>
                  <InputBox id="unitName" />
                </div>

                <div>
                  <label
                    htmlFor="relationshipType"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    110. Relationship Type
                  </label>
                  <SelectBox id="relationshipType" />
                </div>

                <div>
                  <label
                    htmlFor="membersCount"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    111. No. of Members in the Branch
                  </label>
                  <InputBox id="membersCount" />
                </div>

                <div>
                  <label
                    htmlFor="responsiblePerson"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    112. Name of Responsible Person for Office
                  </label>
                  <InputBox id="responsiblePerson" />
                </div>

                <div>
                  <label
                    htmlFor="lin"
                    style={{
                      fontWeight: "bold",
                      display: "block",
                      marginBottom: "0.5rem",
                    }}
                  >
                    113. LIN
                  </label>
                  <InputBox id="lin" />
                </div>
              </div>
              <div className="text-[#003f7a] font-bold mt-5">Address:</div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-5">
                <div>
                  <label htmlFor="premiseName" className="font-bold block mb-2">
                    114. Premise No./Name:
                  </label>
                  <InputBox id="premiseName" className="w-full" />
                </div>

                <div>
                  <label htmlFor="streetName" className="font-bold block mb-2">
                    115. Sub-Location/Colony/Street Name:
                  </label>
                  <InputBox id="streetName" className="w-full" />
                </div>

                <div>
                  <label htmlFor="townName" className="font-bold block mb-2">
                    116. Locality/Village/Town Name:
                  </label>
                  <InputBox id="townName" className="w-full" />
                </div>

                <div>
                  <label htmlFor="state" className="font-bold block mb-2">
                    117. State
                  </label>
                  <SelectBox id="state" className="w-full" />
                </div>

                <div>
                  <label htmlFor="district" className="font-bold block mb-2">
                    118. District
                  </label>
                  <SelectBox id="district" className="w-full" />
                </div>

                <div>
                  <label htmlFor="pinCode" className="font-bold block mb-2">
                    119. Area Code/Pin Code:
                  </label>
                  <InputBox id="pinCode" className="w-full" />
                </div>
              </div>
              <div className="text-[#003f7a] font-bold mt-5">E-Contacts :</div>
              <div className="flex gap-3 mt-2">
                <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                  Add
                </button>
                <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                  Reset
                </button>
              </div>
              <div className="font-bold mt-5">Related Offices</div>
              <table className="w-full bg-white">
                <tr className="text-left">
                  <th className="p-2 border-b">Sr No</th>
                  <th className="p-2 border-b">Name of Unit</th>
                  <th className="p-2 border-b">Relationship Type</th>
                  <th className="p-2 border-b">No. Of Members in Branch</th>
                  <th className="p-2 border-b">Entity LIN Number</th>
                  <th className="p-2 border-b">
                    Name of Responsible for Office
                  </th>
                  <th className="p-2 border-b">Address</th>
                  <th className="p-2 border-b">eContacts</th>
                  <th className="p-2 border-b">Action</th>
                </tr>
                <tr>
                  <td colSpan={9} className="text-center p-4">
                    No data found
                  </td>
                </tr>
              </table>
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
