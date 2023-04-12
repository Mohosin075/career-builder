import React from "react";
import FeatureJob from "../FeatureJob/FeatureJob";

const FeatureJobs = ({jobsData, handleShowDetails,handleSeeAll }) => {
  return (
    <div className="px-4 2xl:px-72 xl:px-20">
      <h2 className="text-[#1A1919] text-3xl md:text-5xl font-bold text-center">
        Featured Jobs
      </h2>
      <p className="text-[#757575]  text-center mt-4 mb-8">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className={`grid md:grid-cols-2 gap-5 ${jobsData.length > 4 ? "mb-28" : "mb-0" }`}>
        {jobsData.map((featureJob) => (
          <FeatureJob key={featureJob.id} featureJob={featureJob} handleShowDetails={handleShowDetails}></FeatureJob>
        ))}
      </div>
      <div className={`text-center mt-12 mb-32 ${jobsData.length > 4 ? "hidden" : "block"}`}>
        <button onClick={()=>handleSeeAll()} className={`my-btn px-2 py-1 md:px-5 md:py-3 text-sm md:text-xl text-white`}>
          See All Jobs
        </button>
      </div>
    </div>
  );
};

export default FeatureJobs;
