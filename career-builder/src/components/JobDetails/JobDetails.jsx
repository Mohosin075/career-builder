import React, { useState } from "react";
import SubHeader from "../SubHeader/SubHeader";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import JobDetail from "../JobDetail/JobDetail";

const JobDetails = ({ children }) => {

  const allData = useLoaderData();
  const { detailsId } = useParams();
  const allJobData = allData[1];

  const singleJob = allJobData && allJobData.find((jd) => jd.id == detailsId);

  const [jobData, setJobData] = useState(singleJob);

  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate(-1);
  };

  return (
    <div>
      <SubHeader data={children}></SubHeader>
      <div className="px-4 2xl:px-72 xl:px-20 py-16 lg:py-32">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <JobDetail singleJob={jobData}></JobDetail>
        </div>
        <div className="text-center mt-8">
          <button
            className="my-btn px-2 py-1 md:px-3 cursor-pointer md:py-2 text-sm md:text-lg text-white"
            onClick={handleBackHome}
          >
            back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
