import React from "react";
import { Routes, Route } from "react-router-dom";
import Page1 from "../pages/Page1/Page1";
import Page2 from "../pages/Page2/Page2";
import Page3 from "../pages/Page3/Page3";
import Page5 from "../pages/Page5/Page5";
import Page6 from "../pages/Page6/Page6";
import Page7 from "../pages/page7/Page7";
import Page8 from "../pages/Page8/Page8";
import Page9 from "../pages/Page9/Page9";
import Page10 from "../pages/Page10/Page10";

export default function Routenav() {
  return (
    <div className="h-[100%] w-[100%]">
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />
          <Route path="/page9" element={<Page9 />} />
          <Route path="/page10" element={<Page10 />} />
        </Routes>
    </div>
  );
}
