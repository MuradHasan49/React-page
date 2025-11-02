import React from "react";

const All_head = ({ head, h1 }) => {
  return (
    <>
      <div className="container mx-auto py-15">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-8 bg-red-600 rounded-sm"></div>
          <span className="text-red-600 font-semibold text-lg">{head}</span>
        </div>

        <div className="flex flex-wrap items-center justify-between">
          <h1 className="text-3xl font-bold text-gray-900">{h1}</h1>
        </div>
      </div>
    </>
  );
};

export default All_head;
