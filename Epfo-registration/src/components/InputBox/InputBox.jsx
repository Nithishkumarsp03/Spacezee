import React, { useState } from 'react';

const InputBox = ({ defaultValue, type, disabled }) => {
  const [value, setValue] = useState(defaultValue || '0.00');

  return (
    <input
      type={type || "text"}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      style={{
        width: "100%",
        padding: "6px",
        border: "1px solid #dddddd",
        outline: "none",
      }}
      disabled={disabled}
      onFocus={(e) => (e.target.style.border = "1px solid lightblue")}
      onBlur={(e) => (e.target.style.border = "1px solid #dddddd")}
    />
  );
};

export default InputBox;
