import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeSingleData from '../RecipeSingleData/RecipeSingleData';

const RecipesData = () => {
    const recipesData = useLoaderData();

    const [seeMore, setSeeMore] = useState(false);
    const handleShowAll = () => {
        setSeeMore(!seeMore);
    }
    return (
        <>
            <div className='mx-auto'>
                <h1 className="my-5 text-5xl font-bold  text-center underline underline-offset-8">Our Chef's</h1>
            </div>

            <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2  my-10'>
                {
                    recipesData.slice(0, seeMore ? 8 : 3).map(recipeData => <RecipeSingleData key={recipeData.id} recipeData={recipeData}></RecipeSingleData>)
                }
            </div>
            <div className='text-center'>
                <button className=' btn btn-primary text-white px-5 py-2 mx-auto  rounded-md' onClick={handleShowAll} >
                    {
                        seeMore ? "See Less" : "See More"
                    }
                </button>
            </div>
        </>
    );
};

export default RecipesData;