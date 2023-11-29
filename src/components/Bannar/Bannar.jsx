import React from 'react';

import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <>
            <div className="hero min-h-screen " style={{ backgroundImage: 'url(https://i.ibb.co/xjD75Qt/jerome-jome-Ga3zi-G9j-Cno-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-lg">
                        <h1 className="mb-5 text-5xl font-bold">Welcome To Our Recipe-Info & Learn Recipes From Our Chef's </h1>
                        <p className="mb-5 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, iusto sint. Fuga explicabo delectus, adipisci perferendis dolore nesciunt praesentium quos.</p>

                        <Link to='/'><button className="btn btn-primary text-xl px-5 py-3">Get Started</button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;