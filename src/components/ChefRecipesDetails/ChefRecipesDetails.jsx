import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ViewChefRecipeData from '../ViewChefRecipeData/ViewChefRecipeData';

const ChefRecipesDetails = () => {
    const viewChefRecipes = useLoaderData();
    return (
        <div>
            {
                viewChefRecipes.map((viewRecipe, i) => <ViewChefRecipeData viewRecipe={viewRecipe} key={i}></ViewChefRecipeData>)
            }
        </div>
    );
};

export default ChefRecipesDetails;