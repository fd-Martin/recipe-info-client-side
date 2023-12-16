import React, { useState } from 'react';
import ChefRecipe from '../ChefRecipe/ChefRecipe';


const ViewChefRecipeData = ({ viewRecipe }) => {
    const { chefPhoto, chefName, experience, num_recipes, likes, bio, recipes } = viewRecipe;
    const [seeMore, setSeeMore] = useState(false);
    const handleShowAll = () => {
        setSeeMore(!seeMore);
    }
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col md:flex-row justify-center">
                    <img src={chefPhoto} />
                    <div className='ms-5'>
                        <h1 className="text-5xl font-bold">{chefName}</h1>
                        <div className='md:py-6 md:ps-3 font-bold'>
                            <p className="">Bio:{bio}</p>
                            <p className="">Likes:{likes}</p>
                            <p className="">Number of Recipes:{num_recipes}</p>
                            <p className="">Year of Experience: {experience}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-center   gap-2 my-10">
                {recipes.slice(0, seeMore ?100 : 2).map((recipe, i) =>
                    <ChefRecipe recipe={recipe} key={i} >
                    </ChefRecipe>
                )}
            </div>
            <div className='text-center mb-8'>
                <button className=' btn btn-primary text-white px-5 py-2 mx-auto  rounded-md' onClick={handleShowAll} >
                    {
                        seeMore ? "See Less" : "See More"
                    }
                </button>
            </div>
        </div>
    );
};

export default ViewChefRecipeData;