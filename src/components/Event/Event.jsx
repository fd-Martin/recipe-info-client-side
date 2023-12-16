import React from 'react';
import { Link } from 'react-router-dom';

const Event = () => {

    return (
        <div className="background-container">
            
            <div className="hero h-96" style={{ backgroundImage:'url(https://i.ibb.co/4KGbs3B/kelsey-chance-Zrht-Qy-GFG6s-unsplash.jpg)'}}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Upcoming Event</h1>
                        <div className='border-double border-8  border-white p-4 hero-overlay bg-opacity-80'>
                            <h2 className="mb-5 text-2xl font-bold">Housewife Cooking Competition</h2>
                            <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-primary"><Link to='/'>More Info</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Event;