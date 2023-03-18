import React from "react";

const SelectForm = ({ handleSelect }) => {
  return (
    <select
      name=""
      id=""
      onChange={handleSelect}
      className="bg-primary rounded-[4px] text-white p-[15px]  border-none w-full text-sm font-bold block appearance-none mt-5 mb-10"
    >
      <option selected disabled>
        Select
      </option>
      <option value="commercial">Commercial Enterprise</option>
      <option value="public">Public Sector</option>
    </select>
  );
};

export default SelectForm;
