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
              <div className="w-full bg-[#eaf9ff] border border-[#cbe1f7] p-4 pt-0 mt-5">
                <p className="font-extrabold text-[#003f7a] ml-6 bg-white w-fit px-3 border border-[#ccc] mt-2">
                  F. Contact Person
                </p>
                <div className="text-[#003f7a] font-bold mt-2 mb-1">
                  Primary Manager
                </div>
                <hr />
                <p className="text-[10px] mt-1">
                  Here applicant has to enter the details of Manager person
                  responsible for supervision of Establishment, this information
                  is mandatory in ESIC and Mandtory in EPFO only when
                  establishment is Factory
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1rem",
                    marginTop: "30px",
                  }}
                >
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      30. Name
                    </label>
                    <InputBox disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      31. Gender
                    </label>
                    <SelectBox disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      32. Date of Birth
                    </label>
                    <InputBox type="date" disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      33. Father's Name
                    </label>
                    <InputBox disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      34. Date From which in Position
                    </label>
                    <InputBox type="date" />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      35. Designation
                    </label>
                    <InputBox disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      36. PAN
                    </label>
                    <InputBox disabled={true} />
                  </div>
                </div>
                <div className="text-[#003f7a] font-bold mt-5">Address:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                  <div>
                    <label
                      htmlFor="premiseName"
                      className="font-bold block mb-2"
                    >
                      37. Premise No./Name:
                    </label>
                    <InputBox
                      id="premiseName"
                      className="w-full"
                      disabled={true}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="streetName"
                      className="font-bold block mb-2"
                    >
                      38. Sub-Location/Colony/Street Name:
                    </label>
                    <InputBox
                      id="streetName"
                      className="w-full"
                      disabled={true}
                    />
                  </div>

                  <div>
                    <label htmlFor="townName" className="font-bold block mb-2">
                      39. Locality/Village/Town Name:
                    </label>
                    <InputBox
                      id="townName"
                      className="w-full"
                      disabled={true}
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className="font-bold block mb-2">
                      40. State
                    </label>
                    <SelectBox id="state" className="w-full" disabled={true} />
                  </div>

                  <div>
                    <label htmlFor="district" className="font-bold block mb-2">
                      41. District
                    </label>
                    <SelectBox
                      id="district"
                      className="w-full"
                      disabled={true}
                    />
                  </div>

                  <div>
                    <label htmlFor="pinCode" className="font-bold block mb-2">
                      42. Area Code/Pin Code:
                    </label>
                    <InputBox id="pinCode" className="w-full" disabled={true} />
                  </div>
                </div>
                <div className="text-[#003f7a] font-bold mt-5">eContacts:</div>
                <div className="flex gap-4 mt-3">
                  <div className="w-full">
                    <label htmlFor="" className="font-bold block mb-2">
                      43. Email
                    </label>
                    <InputBox disabled={true} />
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className="font-bold block mb-2">
                      44. Phone
                    </label>
                    <InputBox disabled={true} />
                  </div>
                </div>
                <div className="text-[#003f7a] font-bold mt-4 mb-1">
                  Primary Owner
                </div>
                <hr />
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1rem",
                    marginTop: "10px",
                  }}
                >
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      45. Name
                    </label>
                    <InputBox disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      46. Gender
                    </label>
                    <SelectBox disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      47. Date of Birth
                    </label>
                    <InputBox type="date" disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      48. Father's Name
                    </label>
                    <InputBox disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      49. Date From which in Position
                    </label>
                    <InputBox type="date" />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      50. Designation
                    </label>
                    <InputBox disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      51. PAN
                    </label>
                    <InputBox disabled={true} />
                  </div>
                </div>
                <div className="text-[#003f7a] font-bold mt-5">Address:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                  <div>
                    <label
                      htmlFor="premiseName"
                      className="font-bold block mb-2"
                    >
                      52. Premise No./Name:
                    </label>
                    <InputBox
                      id="premiseName"
                      className="w-full"
                      disabled={true}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="streetName"
                      className="font-bold block mb-2"
                    >
                      53. Sub-Location/Colony/Street Name:
                    </label>
                    <InputBox
                      id="streetName"
                      className="w-full"
                      disabled={true}
                    />
                  </div>

                  <div>
                    <label htmlFor="townName" className="font-bold block mb-2">
                      54. Locality/Village/Town Name:
                    </label>
                    <InputBox
                      id="townName"
                      className="w-full"
                      disabled={true}
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className="font-bold block mb-2">
                      55. State
                    </label>
                    <SelectBox id="state" className="w-full" disabled={true} />
                  </div>

                  <div>
                    <label htmlFor="district" className="font-bold block mb-2">
                      56. District
                    </label>
                    <SelectBox
                      id="district"
                      className="w-full"
                      disabled={true}
                    />
                  </div>

                  <div>
                    <label htmlFor="pinCode" className="font-bold block mb-2">
                      57. Area Code/Pin Code:
                    </label>
                    <InputBox id="pinCode" className="w-full" disabled={true} />
                  </div>
                </div>
                <div className="text-[#003f7a] font-bold mt-5">eContacts:</div>
                <div className="flex gap-4 mt-3">
                  <div className="w-full">
                    <label htmlFor="" className="font-bold block mb-2">
                      58. Email
                    </label>
                    <InputBox disabled={true} />
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className="font-bold block mb-2">
                      59. Phone
                    </label>
                    <InputBox disabled={true} />
                  </div>
                </div>
              </div>
              <div className="w-full bg-[#eaf9ff] border border-[#cbe1f7] p-4 pt-0 mt-3">
                <p className="font-extrabold text-[#003f7a] ml-6 bg-white w-fit px-3 border border-[#ccc] mt-2">
                  G. Add more Owners
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "1rem",
                    marginTop: "30px",
                  }}
                >
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      60. Representation Type
                    </label>
                    <InputBox disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      61. Name
                    </label>
                    <InputBox disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      62. Gender
                    </label>
                    <SelectBox disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      63. Date of Birth
                    </label>
                    <InputBox type="date" disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      64. Father's Name
                    </label>
                    <InputBox disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      65. Date From which in Position
                    </label>
                    <InputBox type="date" />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      66. Designation
                    </label>
                    <InputBox disabled={true} />
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold block mb-1">
                      67. PAN
                    </label>
                    <InputBox disabled={true} />
                  </div>
                </div>
                <div className="text-[#003f7a] font-bold mt-5">Address:</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-5">
                  <div>
                    <label
                      htmlFor="premiseName"
                      className="font-bold block mb-2"
                    >
                      68. Premise No./Name:
                    </label>
                    <InputBox
                      id="premiseName"
                      className="w-full"
                      disabled={true}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="streetName"
                      className="font-bold block mb-2"
                    >
                      69. Sub-Location/Colony/Street Name:
                    </label>
                    <InputBox
                      id="streetName"
                      className="w-full"
                      disabled={true}
                    />
                  </div>

                  <div>
                    <label htmlFor="townName" className="font-bold block mb-2">
                      70. Locality/Village/Town Name:
                    </label>
                    <InputBox
                      id="townName"
                      className="w-full"
                      disabled={true}
                    />
                  </div>

                  <div>
                    <label htmlFor="state" className="font-bold block mb-2">
                      71. State
                    </label>
                    <SelectBox id="state" className="w-full" disabled={true} />
                  </div>

                  <div>
                    <label htmlFor="district" className="font-bold block mb-2">
                      72. District
                    </label>
                    <SelectBox
                      id="district"
                      className="w-full"
                      disabled={true}
                    />
                  </div>

                  <div>
                    <label htmlFor="pinCode" className="font-bold block mb-2">
                      73. Area Code/Pin Code:
                    </label>
                    <InputBox id="pinCode" className="w-full" disabled={true} />
                  </div>
                </div>
                <div className="text-[#003f7a] font-bold mt-5">eContacts:</div>
                <div className="flex gap-4 mt-3">
                  <div className="w-full">
                    <label htmlFor="" className="font-bold block mb-2">
                      74. Email
                    </label>
                    <InputBox disabled={true} />
                  </div>
                  <div className="w-full">
                    <label htmlFor="" className="font-bold block mb-2">
                      75. Phone
                    </label>
                    <InputBox disabled={true} />
                  </div>
                </div>
              </div>
              <div className="mt-3 font-bold text-[16px]">Contact Persons</div>
              <table className="w-full mt-3">
                <tr className="bg-[#cde6ff]">
                  <th className="p-2">Sr no</th>
                  <th>Name</th>
                  <th>Representation type</th>
                  <th>Designation</th>
                  <th>Address</th>
                  <th>eContacts</th>
                  <th>Action</th>
                </tr>
                <tr className="bg-[#f1f1f1]">
                  <td colSpan={7} className="text-center p-2">
                    No records to display
                  </td>
                </tr>
              </table>
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
      <div className="bg-[#539dcc] w-[100%] h-[300px] mt-0"></div>
    </div>
  );
}
