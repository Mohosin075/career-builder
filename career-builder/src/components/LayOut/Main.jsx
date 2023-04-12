import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loading from '../Loading/Loading';


const Main = () => {
    const navigation = useNavigation();
    return (
        <div className='max-w-[1920px] mx-auto'>
            
            <NavBar></NavBar>
            <Outlet></Outlet>
            <div className='text-5xl'>
                {navigation.state==="loading" && <Loading></Loading>}
            </div>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Main;