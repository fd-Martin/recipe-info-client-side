import React from 'react';
import Marquee from "react-fast-marquee";
import One from '../Featured/1.png';
import Two from '../Featured/2.png';
import Three from '../Featured/3.png';
import Four from '../Featured/4.png';
import Five from '../Featured/5.png';

const Feautured = () => {
    return (
        <div className='max-w-5xl mx-auto my-10'>
            <h1 className='font-bold text-2xl text-center my-5'>As Featured In</h1>
            <Marquee pauseOnHover={true} >
                <div className='flex flex-row  justify-evenly gap-24 '>
                    <div className="mx-auto">
                        <img src={One} alt="" />
                    </div>
                    <div className="mx-auto">
                        <img src={Two} alt="" />
                    </div>
                    <div className="mx-auto">
                        <img src={Three} alt="" />
                    </div>
                    <div className="mx-auto">
                        <img src={Four} alt="" />
                    </div>
                    <div className="mx-auto">
                        <img src={Five} alt="" />
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Feautured;