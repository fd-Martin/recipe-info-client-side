import React from 'react';
import Banner from '../Bannar/Bannar';
import Feautured from '../Featured/feautured';
import RecipesData from '../RecipesData/RecipesData';
import Event from '../Event/Event';

const Home = () => {

    return (
        <div className=' mx-auto'>
            <Banner></Banner>
            <RecipesData></RecipesData>
            <Feautured></Feautured>
            <Event></Event>
        </div>
    );
};

export default Home;