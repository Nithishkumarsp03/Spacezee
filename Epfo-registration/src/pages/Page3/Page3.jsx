import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";

export default function Page3() {
  return (
    <div className="h-[100%] w-[100%] overflow-x-hidden">
      <div className="h-[28%]">
        <Header />
      </div>
      <div className="h-[100%] w-[100%] flex">
        <div className="w-[20%] h-[100%]">
          <Navbar />
        </div>
        <div className="w-[80%] h-[100%] bg-white">
          <div className="text-[13px] border-b border-[#d3d2d2] py-[10px] px-4 flex gap-3">
            <div>Dashboard</div>
          </div>
          <div className="px-6 py-4 flex justify-between">
            <div className="text-[#539dcc] text-[18px] ml-7">
              Act(s) Applying For
            </div>
          </div>
          <div className="h-[25%] w-full flex justify-center">
            <div className="bg-[#f1f7fd] h-[100%] w-[95%] border-t-2 border-[#acd5ee] flex justify-center items-center">
              <table className="w-[95%] border-collapse">
                <tr className="bg-[#cde6ff]">
                  <th className="border border-[#ccc] p-2 w-[10%]"></th>
                  <th className="border border-[#ccc] p-2 text-start">
                    List of Acts
                  </th>
                </tr>
                <tr>
                  <td className="border border-[#ccc] p-2 text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="border border-[#ccc] p-2">
                    Employees' State Insurance Act, 1948
                  </td>
                </tr>
                <tr className="bg-[#f1f1f1]">
                  <td className="border border-[#ccc] p-2 text-center">
                    <input type="checkbox" />
                  </td>
                  <td className="border border-[#ccc] p-2">
                    Employees' Provident Funds and Miscellaneous Provisions Act,
                    1952
                  </td>
                </tr>
              </table>
            </div>
          </div>
          <div className="h-[60%] w-full flex justify-center">
            <div className="bg-[#f1f7fd] h-[100%] w-[95%] mt-3">
              <div className="flex justify-end gap-3 h-[60px] items-center mr-3">
                <button className="bg-[#539dcc] p-1 px-3 text-white">
                  Submit
                </button>
                <button className="bg-[#539dcc] p-1 px-3 text-white">
                  Cancel
                </button>
              </div>
              <div className="h-[50%] w-full flex justify-center mt-2">
                <table className="border-collapse w-[95%] h-[100%]">
                  <tr className="border border-[#ccc] w-full h-[100px] bg-[#f1f1f1]">
                    <td>&nbsp;</td>
                  </tr>
                  <tr className="border border-[#ccc] w-full h-[0px] bg-white">
                    <td>&nbsp;</td>
                  </tr>
                </table>
              </div>
              <div className="h-[33%] w-full flex justify-center mt-5 pb-3">
                <table className="border-collapse w-[95%] h-[100%]">
                  <tr className="border border-[#ccc] w-full bg-[#f1f1f1]">
                    <td>&nbsp;</td>
                  </tr>
                  <tr className="border border-[#ccc] w-full bg-white">
                    <td>&nbsp;</td>
                  </tr>
                  <tr className="border border-[#ccc] w-full bg-[#f1f1f1]">
                    <td>&nbsp;</td>
                  </tr>
                  <tr className="border border-[#ccc] w-full bg-white">
                    <td>&nbsp;</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#539dcc] w-[100%] h-[40%] mt-3"></div>
    </div>
  );
}
