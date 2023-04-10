import React from 'react';

const JobCatagory = ({job}) => {
    const {image, title, jobs} = job;
    return (
        <div className='my-header-bg p-10 rounded-xl mb-4'>
            <img className='w-20 h-20 my-header-bg p-3 rounded-md' src={image} alt="" />
            <h2 className='text-xl text-[#474747] font-bold my-5 mb-3'>{title}</h2>
            <p className='text-[#A3A3A3]'>{jobs} Jobs Available</p>

        </div>
    );
};

export default JobCatagory;