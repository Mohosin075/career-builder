import React from 'react';
import Header from '../Header/Header';
import JobCatagorys from '../JobCatagorys/JobCatagorys';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobCatagory = useLoaderData();
    return (
        <div>
            <Header></Header>
            <JobCatagorys jobCatagory={jobCatagory}></JobCatagorys>
        </div>
    );
};

export default Home;