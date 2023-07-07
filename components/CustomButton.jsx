import React from "react";

const CustomButton = ({ name, type }) => {
  return (
    <button className="px-4 py-2 bg-green-800 rounded-lg" type={type}>
      {name}
    </button>
  );
};

export default CustomButton;
