import React from 'react';
import JobCatagory from '../JobCatagory/JobCatagory';

const JobCatagorys = ({jobCatagory}) => {
    return (
        <div className='my-16 md:my-32 px-4 2xl:px-72 xl:px-20'>
            <h2 className='text-[#1A1919] text-3xl md:text-5xl font-bold text-center'>Job Category List</h2>
            <p className='text-[#757575]  text-center mt-4 mb-8'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='md:flex gap-5 justify-between items-center'>
                <div className='md:flex mt-4 justify-between items-center gap-5 w-full'>
                        {
                            jobCatagory.map(job=><JobCatagory key={job.id} job={job}></JobCatagory>)
                        }
                </div>
            </div>
        </div>
    );
};

export default JobCatagorys;