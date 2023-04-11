import React from 'react';

const SetFooterData = ({ftd}) => {
    console.log(ftd);
    return (
        <div className='mb-8 md:mb-0'>
            {
                ftd.map((list, inx)=>{
                   return <li className='list-none text-gray-400 text-sm xl:text-lg mb-4 firstChild' key={inx} >{list}</li>
                })
            }
        </div>
    );
};

export default SetFooterData;