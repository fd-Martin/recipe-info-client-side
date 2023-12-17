import React from 'react';
import { Link } from 'react-router-dom';

const Event = () => {

    return (
        <div className="background-container">
            <div className="hero h-96" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Upcoming Event</h1>
                        <div className='border-double border-8  border-sky-500 p-4 hero-overlay bg-opacity-80'>
                            <h2 className="mb-5 text-2xl font-bold">Housewife Cooking Competition</h2>
                            <p className="mb-5">Monday, January 30, 2024</p>
                            <p className="mb-5">Bankok, Thailand</p>
                            <button className="btn btn-primary"><Link to='/'>More Info</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;