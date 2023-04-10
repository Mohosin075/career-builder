import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Main = () => {
    return (
        <div className='max-w-[1920px] mx-auto px-4 2xl:px-72 xl:px-20'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;