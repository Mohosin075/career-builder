import React from 'react';
import SubHeader from '../SubHeader/SubHeader';

const AppliedJobs = ({children}) => {
    return (
        <div>
            <SubHeader data={children}></SubHeader>
        </div>
    );
};

export default AppliedJobs;