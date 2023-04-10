import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Main = () => {
    return (
        <div className='max-w-[1920px] mx-auto'>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;