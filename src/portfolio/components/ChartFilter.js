
import React from "react";

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
          `w-10 h-8 m-1 flex items-center justify-center cursor-pointer text-sm 
            ${active? 
              " text-emerald-600  border-b-2 border-green-600 rounded-none": 
              "border-emerald-300 "
            } 
          transition duration-200 `
        }
    >
      {text}
    </button>
  );
};

export default ChartFilter;