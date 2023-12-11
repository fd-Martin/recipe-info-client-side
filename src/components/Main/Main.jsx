import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {

    return (
        <>
            <div>
                <Navbar></Navbar>
                <div className='min-h-[calc(90vh-300px)] ' >
                    <Outlet></Outlet>
                </div>
                <Footer className="mb-auto"></Footer>
            </div>
        </>
    );
};

export default Main;