import React from "react";
import { MdEditDocument } from "react-icons/md";

const EditButton = () => {
  return (
    <div className="text-green-500 hover:text-green-700 cursor-pointer">
      <MdEditDocument size={25} className="" />
    </div>
  );
};

export default EditButton;
