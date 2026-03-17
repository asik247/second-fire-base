import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='flex flex-col'>
            <Navbar></Navbar>
            <div className='flex justify-center items-center mt-40'>
                 <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;