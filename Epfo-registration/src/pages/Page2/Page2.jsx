import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

export default function Page2() {
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
          <div className="text-[13px] border-b border-[#bebebe] py-[10px] px-4 flex gap-3">
            <div className="text-[#539dcc]">Dashboard</div>
            <div>Registration</div>
          </div>
          <div className="px-6 py-4 flex justify-between">
            <div className="text-[#539dcc] text-[18px]">Registration</div>
            <div className="text-[13px] bg-[#003f7a] text-white p-1 px-2">
              Apply for New Registration
            </div>
          </div>
          <div className="bg-[#f1f7fd] h-[370px] m-4 mt-0 border-t-2 border-[#acd5ee] p-4 py-6">
            <div className="bg-[white] h-[70%] border border-[#d1d1d1]"></div>
            <table className="w-full border-collapse mt-3">
              <tr>
                <th className="border border-[#ccc] bg-[#cde6ff] p-2">
                  Sr. No.
                </th>
                <th className="border border-[#ccc] bg-[#cde6ff] p-2">
                  Establishment
                </th>
                <th className="border border-[#ccc] bg-[#cde6ff] p-2">
                  Acts Applied For
                </th>
                <th className="border border-[#ccc] bg-[#cde6ff] p-2">
                  Submitted Date
                </th>
                <th className="border border-[#ccc] bg-[#cde6ff] p-2">
                  Status / Document
                </th>
                <th className="border border-[#ccc] bg-[#cde6ff] p-2">
                  ESIC No
                </th>
                <th className="border border-[#ccc] bg-[#cde6ff] p-2">
                  EPFO No
                </th>
              </tr>
            </table>
            <div className="flex gap-2 mt-3 ml-2">
              <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                Submit
              </button>
              <button className="bg-[#539dcc] p-1 px-3 text-white rounded-md">
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#539dcc] w-[100%] h-[40%]"></div>
    </div>
  );
}
