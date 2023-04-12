import React, { useEffect, useState } from "react";
import SubHeader from "../SubHeader/SubHeader";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getAppliedJobs } from "../../utilities/fakedb";
import FeatureJob from "../FeatureJob/FeatureJob";

const AppliedJobs = ({ children }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [allAppliedData, setAllAppliedData] = useState([]);
  const [total, setTotal] = useState(0)
  const loadedAllData = useLoaderData();
  const loadedJobsData = loadedAllData[1];
  const handleShowDetails = (id) => {
    navigate(`/${id}`);
  };



  const storedJobs = getAppliedJobs();
  const keys = Object.keys(storedJobs);
  
  useEffect(()=>{
    let newArr = [];
    keys.map((storedId) => {
      const findingData = loadedJobsData.filter((job) => job.id == storedId);
      newArr.push(findingData[0]);
    });
    setData([...newArr])
    setAllAppliedData([...newArr]);
    setTotal(newArr.length)
  },[])

  

  const handleAllFilter=()=>{
    setData(allAppliedData);
  }

  const handleFilterFullTime =(type)=>{
    const filtered =  allAppliedData.filter(full=>full.category[0] == type || full.category[1] == type);
    setData(filtered)
  }

  const handleFilterRemote =(type)=>{
    const filtered =  allAppliedData.filter(full=>full.category[0] == type || full.category[1] == type);
    setData(filtered)
  }

  const handleFilterPartTime =(type)=>{
    const filtered =  allAppliedData.filter(full=>full.category[0] == type || full.category[1] == type);
    setData(filtered)
  }


  useEffect(()=>{
    setTotal(data.length)
  },[data])
 
  const handleBackHome = () => {
    navigate(-1);
  };


  return (
    <div>
      <SubHeader data={children}></SubHeader>
      <div className="px-4 2xl:px-72 xl:px-20 py-16 md:my-20">
        <h2 className={`text-center text-3xl text-red-500 font-bold ${allAppliedData.length !==0 ? "hidden" : "block"}`}>no Job found</h2>
        <div className={`text-center mt-8 ${allAppliedData.length !==0 ? "hidden" : "block"}`}>
          <button
            className={`my-btn px-2 py-1 md:px-3 cursor-pointer md:py-2 text-sm md:text-lg text-white `}
            onClick={handleBackHome}
          >
            back to home and apply job
          </button>
        </div>
        <div className={`text-[#474747] mb-5 justify-between items-center ${allAppliedData.length === 0 ? "hidden" : "flex flex-col md:flex-row space-y-4 justify-center"}`}>
          <div className="text-sm md:text-xl font-bold py-2 md:py-3 px-2 md:px-4 bg-[#F4F4F4] inline-block rounded-md">
            Total Jobs : {total}
          </div>
          <div className="text-[#474747] mb-5 flex-wrap justify-center items-center flex">
          <h2 className="text-sm md:text-xl font-bold py-2 md:py-3 px-2 md:px-4 bg-[#F4F4F4] inline-block rounded-md">
            <span>Filter By :</span>
          </h2>
          <div className="space-x-1 md:space-x-4 ms-2 md:ms-4">
            <button onClick={()=>handleAllFilter()} className="text-xs md:text-lg p-2 bg-gray-100 rounded-md">
              All
            </button>
            <button onClick={()=>handleFilterFullTime('full time')} className="text-xs md:text-lg p-2 bg-gray-100 rounded-md">
              Full Time
            </button>
            <button onClick={()=>handleFilterRemote('remote')} className="text-xs md:text-lg p-2 bg-gray-100 rounded-md">
              Remote
            </button>
            <button onClick={()=>handleFilterPartTime('part time')}  className="text-xs md:text-lg p-2 bg-gray-100 rounded-md">
              Part time
            </button>
          </div>
          </div>
        </div>
        {data.map((submitJob) => (
          <FeatureJob
            submitJob={submitJob}
            key={submitJob.id}
            handleShowDetails={handleShowDetails}
          ></FeatureJob>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
