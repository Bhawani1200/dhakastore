import React from "react";

const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 ">
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs text-black font-medium bg-white ring-1 ring-gray-400"
        >
          <option className="text-black">Type</option>
          <option value="physical" className="text-black">physical</option>
          <option value="Digital" className="text-black">Digital</option>
        </select>
        <input
          type="text"
          name="min"
          placeholder="min price"
          className="text-xs rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <input
          type="text "
          name="max"
          placeholder="max price"
          className="text-xs  rounded-2xl pl-2 w-24 ring-1 ring-gray-400"
        />
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="physical">physical</option>
          <option value="Digital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="physical">physical</option>
          <option value="Digital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
          <option>Type</option>
          <option value="physical">physical</option>
          <option value="Digital">Digital</option>
        </select>
      </div>
      <div className="">
      <select
          name=""
          id=""
          className="py-2 px-4 rounded-2xl text-xs text-black bg-white font-medium ring-1 ring-gray-400"
        >
          <option className="text-black">Select</option>
          <option value="physical" className="text-black">Price (low to high)</option>
          <option value="Digital" className="text-black">Price (high to low)</option>
          <option value="physical" className="text-black">Newest</option>
          <option value="Digital" className="text-black">Oldest</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
