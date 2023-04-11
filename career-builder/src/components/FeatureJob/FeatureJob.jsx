import React from "react";
import { Link } from "react-router-dom";

const FeatureJob = ({ featureJob, handleShowDetails }) => {
  const { image, id, title, company, salary, location, category } = featureJob;
  return (
    <div className="border-2 rounded-lg p-10">
      <img src={image} className="h-24 mb-4" alt="" />
      <h2 className="text-[#474747] text-xl md:text-2xl font-bold">{title}</h2>
      <p className="text-[#757575] text-lg md:text-xl mt-3 mb-4">{company}</p>
      <div>
        <button className="border px-2 py-1 border-[#7E90FE] text-[#7E90FE] mr-4 rounded-md md:font-semibold">
          {category[0]}
        </button>
        <button className="border px-2 py-1 border-[#7E90FE] text-[#7E90FE] rounded-md md:font-semibold">
          {category[1]}
        </button>
      </div>
      <div className="flex mb-2">
        <p className="text-[#757575] text-xs md:text-lg mt-4 mb-3 mr-8">
          {location}
        </p>
        <p className="text-[#757575] text-xs md:text-lg mt-4 mb-3">
          Salary : {salary}
        </p>
      </div>
        <button
          onClick={()=>handleShowDetails(id)}
          className="my-btn px-2 py-1 md:px-5 md:py-3 text-sm md:text-xl text-white"
        >
          View Details
        </button>
    </div>
  );
};

export default FeatureJob;
