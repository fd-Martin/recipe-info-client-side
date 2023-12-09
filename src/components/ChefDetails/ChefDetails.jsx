import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {
    const viewRecipes =useLoaderData();
    console.log(viewRecipes);
    return (
        <div>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora numquam ex enim quibusdam, iure pariatur cum doloremque debitis et? Perferendis recusandae ab maxime expedita minus debitis, optio laudantium illum consectetur illo quasi suscipit quod alias ullam! Repellendus harum provident nostrum qui neque veniam iusto dolores?
        </div>
    );
};

export default ChefDetails;