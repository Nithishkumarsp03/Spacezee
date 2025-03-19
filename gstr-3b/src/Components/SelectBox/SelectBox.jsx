import React, { useState } from "react";

const SelectBox = ({ defaultValue, options = [] }) => {
  const [value, setValue] = useState(defaultValue || "");

  return (
    <select
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={{
        width: "100%",
        padding: "6px",
        border: "1px solid #dddddd",
        outline: "none",
        backgroundColor: "#ffffff",
        borderRadius: "4px",
      }}
      onFocus={(e) => (e.target.style.border = "1px solid lightblue")}
      onBlur={(e) => (e.target.style.border = "1px solid #dddddd")}
    >
      {options.length > 0 ? (
        options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))
      ) : (
        <option disabled>No options available</option>
      )}
    </select>
  );
};

export default SelectBox;
