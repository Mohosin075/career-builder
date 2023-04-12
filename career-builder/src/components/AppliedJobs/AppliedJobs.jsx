import React, { useEffect, useState } from "react";
import SubHeader from "../SubHeader/SubHeader";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getAppliedJobs } from "../../utilities/fakedb";
import FeatureJob from "../FeatureJob/FeatureJob";





const AppliedJobs = ({ children}) => {
    const navigate= useNavigate();
    const loadedAllData = useLoaderData();
    const loadedJobsData = loadedAllData[1];
    const handleShowDetails =(id)=>{
        navigate(`/${id}`)
    }
    
    let newArr = [];

    const storedJobs = getAppliedJobs();
    const keys = Object.keys(storedJobs);
    keys.map(storedId=>{
        const findingData = loadedJobsData.filter(job=>job.id==storedId);
        newArr.push(findingData[0]);
    })


  return (
    <div>
      <SubHeader data={children}></SubHeader>
      <div className="px-4 2xl:px-72 xl:px-20 py-16 md:my-32">
        {
            newArr.map(submitJob=><FeatureJob submitJob={submitJob} key={submitJob.id} handleShowDetails={handleShowDetails}></FeatureJob>)
        }
      </div>
    </div>
  );
};

export default AppliedJobs;
