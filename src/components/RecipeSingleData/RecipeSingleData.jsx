import React from 'react';
import { Link } from 'react-router-dom';

const RecipeSingleData = ({ recipeData }) => {
    const { id, chefPhoto, chefName, experience, num_recipes, likes } = recipeData;

    return (
        <div className=" " >
            <div className="card w-3/4 my-5 md:w-full mx-auto xl:w-96 h-full border-4 bg-base-100 hover:shadow-xl">
                <figure><img src={chefPhoto} className='h-96 w-46 md:w-full ' alt="" /></figure>
                <div className="card-body py-3">
                    <h2 className="card-title py-3 my-3">Chef Name:{chefName}</h2>
                    <h1>Years of Experience:{experience} years</h1>
                    <h1>Number of Recipes: {num_recipes}</h1>
                    <h1>Likes : {likes}</h1>
                    <div className="card-actions justify-start">
                        <button className="btn btn-primary"><Link to={`/recipes/${id}`}>View Recipes</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeSingleData;