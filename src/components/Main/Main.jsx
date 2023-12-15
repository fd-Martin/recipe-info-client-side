import React from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Main = () => {

    const navigation = useNavigation();

    return (
        <>
            <div>
                <Navbar></Navbar>
                <div className={`min-h-[calc(90vh-300px)] `} >
                    {navigation.state === "loading" ? <div className=' mx-auto h-96 flex justify-center'>
                        <div className="loading loading-bars loading-lg"></div>
                    </div> : <Outlet></Outlet>}
                </div>
                <Footer className="mb-auto"></Footer>
            </div>
        </>
    );
};

export default Main;