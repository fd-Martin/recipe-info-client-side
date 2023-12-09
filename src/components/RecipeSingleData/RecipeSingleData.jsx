import React from 'react';
import { Link } from 'react-router-dom';

const RecipeSingleData = ({ recipeData }) => {
    console.log(recipeData);
    const { id, chefPhoto, chefName, experience, num_recipes, likes } = recipeData;
    return (

        <div className='mx-auto my-5' >
            <div className="card w-full h-full border-4 bg-base-100 hover:shadow-xl className='mx-auto' ">
                <figure><img src={chefPhoto} className='h-96 w-96' alt="Shoes" /></figure>
                <div className="card-body py-3">
                    <h2 className="card-title py-3 my-3">Chef Name: {chefName}</h2>
                    <h1>Years of Experience:{experience} years</h1>
                    <h1>Number of Recipes: {num_recipes}</h1>
                    <h1>Likes : {likes}</h1>
                    <div className="card-actions justify-start">
                        <Link to={`/recipes/${id}`}><button className="btn btn-primary">View Recipes</button></Link>

                    </div>
                </div>
            </div>
        </div>


    );
};

export default RecipeSingleData;