import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';


const Main = () => {
    const navigation = useNavigation();
    const lod = <h1 className='text-9xl text-red-600'>Loading.....</h1>
    return (
        <div className='max-w-[1920px] mx-auto'>
            <div className='text-5xl'>
                {navigation.state==="loading" && `${lod}`}
            </div>
            <NavBar></NavBar>
            
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;