import React from 'react';
import { useRouteError } from 'react-router-dom';
import errorImg from '../Error/pngwing.com.png';
const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <div className='max-w-4xl mx-auto px-5 py-10 text-center'>
                <div className='mx-auto w-full p-5'>
                    <img src={errorImg} alt="" className='mx-auto w-full' />
                </div>
                <div>
                    <h1 className='text-6xl font-bold mb-5'>Oops!</h1>
                    <p className='text-4xl font-semibold'>Sorry, an unexpected error has occurred.</p>
                    <p className='text-2xl font-semibold'>
                        {error.statusText || error.message}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Error;