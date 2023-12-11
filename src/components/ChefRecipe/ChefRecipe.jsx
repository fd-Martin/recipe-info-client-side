import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import { FcLike } from "react-icons/fc";
import toast, { Toaster } from 'react-hot-toast';
const ChefRecipe = ({ recipe }) => {
    const { foodPhoto, name, cooking_method, rating, ingredients } = recipe;
    const [raTing, setRaTing] = useState();
    const [clicked, setClicked] = useState(false);
    const notify = () => toast('Your favourite recipe has selected.');
    const handleDisable = (event) => {
        setClicked(true)
        notify();
    }
    return (
        <div className=' mx-auto'>
            <div className='card w-96 mx-auto md:w-full xl:w-96 h-full border-4 bg-base-100 hover:shadow-xl'>
                <figure><img src={foodPhoto} className='h-96 w-96 ' alt="Album" /></figure>
                <div className="card-body py-3">
                    <h2 className="card-title py-3 my-3 font-bold">Chef Name:{name}</h2>
                    <p> <span className='font-semibold'> Cooking Method:</span>{cooking_method}</p>
                    <div className="flex flex-row items-center justify-between">
                        <div>
                            <p className="font-semibold">Rating:</p>
                        </div>
                        <div><Rating style={{ maxWidth: 180 }} value={rating} readOnly /></div>
                        <div>
                            <p className='font-semibold'>({rating})</p>
                        </div>
                    </div>
                    <p><span className='font-semibold'>Ingredients:</span></p>
                    {
                        ingredients.map((ingredient, i) => <span key={i}>{i + 1}. {ingredient}</span>)
                    }
                    <div className="card-actions justify-start">
                        <button className="btn btn-outline" onClick={handleDisable} disabled={clicked}><FcLike />Favourite</button><Toaster />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipe;