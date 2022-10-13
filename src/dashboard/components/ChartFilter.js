
import React from "react";

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-8 m-1 border-1 rounded-md flex items-center justify-center cursor-pointer text-sm ${
        active
          ? "bg-emerald-500 border-emerald-700 text-gray-100"
          : "border-emerald-300 "
      } transition duration-200 hover:bg-emerald-600 hover:text-gray-100 hover:border-emerald-700`}
    >
      {text}
    </button>
  );
};

export default ChartFilter;