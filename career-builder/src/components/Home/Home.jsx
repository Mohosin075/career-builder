import React from 'react';
import Header from '../Header/Header';
import JobCatagorys from '../JobCatagorys/JobCatagorys';
import { useLoaderData } from 'react-router-dom';
import FeatureJobs from '../FeatureJobs/FeatureJobs';

const Home = () => {
    const allData = useLoaderData();
    const jobCatagory = allData[0];
    const featureJobs = allData[1]
    return (
        <div>
            <Header></Header>
            <JobCatagorys jobCatagory={jobCatagory}></JobCatagorys>
            <FeatureJobs featureJobs={featureJobs}></FeatureJobs>
        </div>
    );
};

export default Home;