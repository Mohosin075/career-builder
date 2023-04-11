import React from "react";

const JobDetail = ({ singleJob }) => {
  const {
    title,
    salary,
    phone,
    email,
    location,
    description,
    responsibilities,
    qualifications,
    experience,
  } = singleJob;
  return (
    <>
      <div className="lg:w-8/12 text-sm space-y-5">
        <p className="text-[#757575]">
          <span className="text-[#1A1919] text-sm lg:text-lg font-bold">
            Job Description:{" "}
          </span>
          {description}
        </p>
        <p className="text-[#757575]">
          <span className="text-[#1A1919] text-sm lg:text-lg font-bold">
            Job Responsibility:{" "}
          </span>
          {responsibilities}
        </p>
        <div>
          <h4 className="text-[#1A1919] text-sm lg:text-lg font-bold">
            Educational Requirements:
          </h4>
          <div className="space-y-1">
            {qualifications.map((list, i) => (
              <li className="list-none ps-4 text-[#757575]" key={i}>
                {list}
              </li>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[#1A1919] text-sm lg:text-lg font-bold">Experiences: </h4>
          <p className="text-[#757575]">{experience}</p>
        </div>
      </div>
      <div className="lg:w-4/12 w-full">
        <div className="my-header-bg p-8 rounded-lg">
        <h3 className="text-lg lg:text-xl text-[#1A1919] font-bold">Job Details</h3>
        <hr className="border-1 border-gray-300 my-4" />
        <div className="space-y-2">
        <p className="text-[#757575] text-sm lg:text-lg">
          <span className="text-[#474747] text-sm lg:text-lg font-semibold">Sarary :</span>{" "}
          {salary}
        </p>
        <p className="text-[#757575] text-sm lg:text-lg">
          <span className="text-[#474747] text-sm lg:text-lg font-semibold">
            Job Title :
          </span>{" "}
          {title}
        </p>
        </div>
        <h3 className="text-lg lg:text-xl text-[#1A1919] font-bold mt-5">Contact Information</h3>
        <hr className="border-1 border-gray-300 my-4" />
        <div className="space-y-2">
        <p className="text-[#757575] text-sm lg:text-lg">
          <span className="text-[#474747] font-semibold">Phone :</span>{" "}
          {phone}
        </p>
        <p className="text-[#757575] text-sm lg:text-lg">
          <span className="text-[#474747] font-semibold">Email :</span>{" "}
          {email}
        </p>
        <p className="text-[#757575] text-sm lg:text-lg">
          <span className="text-[#474747] font-semibold">
            Address :
          </span> {location}
        </p>
        </div>
        </div>
        <div className="mt-6">
        <button
            className="my-btn w-full px-2 py-2 md:px-4 cursor-pointer md:py-3 text-sm md:text-xl text-white"
          >
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default JobDetail;