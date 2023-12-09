import React from 'react';

const RecipeSingleData = ({ recipeData }) => {
    console.log(recipeData);
    const { id, chefPhoto, chefName, experience, num_recipes, likes } = recipeData;
    return (
        <div className='mx-auto'>
            <div >
                <div className="card w-full h-full border-4 bg-base-100 shadow-xl ">
                    <figure><img src={chefPhoto} className='h-96 w-96' alt="Shoes" /></figure>
                    <div className="card-body py-3">
                        <h2 className="card-title py-3 my-3">Chef Name: {chefName}</h2>
                        <h1>Years of Experience:{experience} years</h1>
                        <h1>Number of Recipes: {num_recipes}</h1>
                        <h1>Likes : {likes}</h1>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RecipeSingleData;