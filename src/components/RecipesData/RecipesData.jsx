import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeSingleData from '../RecipeSingleData/RecipeSingleData';

const RecipesData = () => {
    const recipesData = useLoaderData();
    console.log(recipesData);
    return (
        <>
            <div className='mx-auto'>
                <h1 className="my-5 text-5xl font-bold  text-center underline underline-offset-8">Our Chef's</h1>
            </div>
            
            <div className=' container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-10'>


                {
                    recipesData.map(recipeData => <RecipeSingleData key={recipeData.id} recipeData={recipeData}></RecipeSingleData>)
                }
            </div>
        </>
    );
};

export default RecipesData;