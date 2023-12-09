import React from 'react';
import Banner from '../Bannar/Bannar';
import Feautured from '../Featured/feautured';
import { useLoaderData } from 'react-router-dom';
import RecipesData from '../RecipesData/RecipesData';

const Home = () => {

    return (
        <div className=' mx-auto'>
            <Banner></Banner>
            <RecipesData></RecipesData>
            <Feautured></Feautured>
        </div>
    );
};

export default Home;