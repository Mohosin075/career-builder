import React, { useEffect, useState } from "react";
import { addToDb, getAppliedJobs } from "../../utilities/fakedb";
import { useLoaderData, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const JobDetail = ({ singleJob, allJobData }) => {
  const {
    id,
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


  const handleApplyNow = (id) => {
    const stored = getAppliedJobs(id);
    const storeKey=Object.keys(stored);
    const exist = storeKey.find(st=>st==id);
    if(!exist){
      toast("Success to Apply!");
      addToDb(id);
    }else{
      toast("Already Applied!");
    }
  };

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
          <h4 className="text-[#1A1919] text-sm lg:text-lg font-bold">
            Experiences:{" "}
          </h4>
          <p className="text-[#757575]">{experience}</p>
        </div>
      </div>
      <div className="lg:w-4/12 w-full">
        <div className="my-header-bg p-8 rounded-lg">
          <h3 className="text-lg lg:text-xl text-[#1A1919] font-bold">
            Job Details
          </h3>
          <hr className="border-1 border-gray-300 my-4" />
          <div className="space-y-2">
            <p className="text-[#757575] text-sm lg:text-lg">
              <span className="text-[#474747] text-sm lg:text-lg font-semibold"><span className="mr-3"><i className="fa-solid fa-sack-dollar"></i></span>
                Sarary :
              </span>{" "}
              {salary}
            </p>
            <p className="text-[#757575] text-sm lg:text-lg">
              <span className="text-[#474747] text-sm lg:text-lg font-semibold"><span className="mr-3"><i className="fa-solid fa-shuttle-space"></i></span>
                Job Title :
              </span>{" "}
              {title}
            </p>
          </div>
          <h3 className="text-lg lg:text-xl text-[#1A1919] font-bold mt-5">
            Contact Information
          </h3>
          <hr className="border-1 border-gray-300 my-4" />
          <div className="space-y-2">
            <p className="text-[#757575] text-sm lg:text-lg">
              <span className="text-[#474747] font-semibold"><span className="mr-3"><i className="fa-solid fa-phone"></i></span>Phone :</span>{" "}
              {phone}
            </p>
            <p className="text-[#757575] text-sm lg:text-lg">
              <span className="text-[#474747] font-semibold"><span className="mr-3"><i className="fa-solid fa-envelope"></i></span>Email :</span>{" "}
              {email}
            </p>
            <p className="text-[#757575] text-sm lg:text-lg">
              <span className="text-[#474747] font-semibold"><span className="mr-3"><i className="fa-solid fa-location-dot"></i></span>Address :</span>{" "}
              {location}
            </p>
          </div>
        </div>
        <div className="mt-6">
          <button
            onClick={() => handleApplyNow(id)}
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
