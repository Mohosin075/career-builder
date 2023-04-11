import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import JobCatagorys from '../JobCatagorys/JobCatagorys';
import { useLoaderData, useNavigate } from 'react-router-dom';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const Home = () => {
    const allData = useLoaderData();
    const jobCatagory = allData[0];
    const featureJobs = allData[1]
    const [jobsData, setJobsData] = useState([...featureJobs]);

    const navigate = useNavigate();
    const handleShowDetails =(id)=>{
        navigate(`/${id}`)
    }

    return (
        <div>
            <Header></Header>
            <JobCatagorys jobCatagory={jobCatagory}></JobCatagorys>
            <FeatureJobs 
            jobsData={jobsData}
            handleShowDetails={handleShowDetails}
            ></FeatureJobs>
        </div>
    );
};

export default Home;