import React from 'react';

const Header = () => {
    return (
        <div className='flex flex-col-reverse py-6 my-header-bg px-4 2xl:px-72 xl:px-20 md:flex-row justify-between items-center gap-8 space-y-6'>
            <div className='space-y-6 w-full'>
                <h2 className='text-4xl lg:text-7xl text-[#1A1919] font-bold'>One Step Closer To Your <br /> <span className="text-[#112eeb]">Dream Job</span></h2>
                <p className='text-[#757575] text-sm lg:text-xl'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="my-btn px-2 py-1 md:px-7 md:py-5 text-sm md:text-2xl text-white">Get Started</button>
            </div>
            <div className='w-full'>
                <img src="https://www.nicepng.com/png/detail/78-784688_student-studying-png-person-study-png.png" alt="" />
            </div>
        </div>
    );
};

export default Header;