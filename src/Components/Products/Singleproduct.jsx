import React from 'react';
import { Link } from 'react-router-dom';

const Singleproduct = ({ item }) => {
    const { _id, name, imageUrl, details, price } = item;
    return (
        <div>
            <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg ">
                <h3 class="mb-3 text-lg font-bold text-indigo-600">Featured</h3>
                <div class="relative">
                    <img class="w-full rounded-xl transform hover:scale-105 transition duration-500" src={imageUrl} alt="Colors" />
                    <p class="absolute top-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">{price}</p>
                </div>
                <h1 class="mt-4 text-gray-800 text-lg font-bold cursor-pointer">{name}</h1>
                <p>{details}</p>
                <div class="my-4">



                    <Link to={`/details/${_id}`}><button class="mt-4 text-lg w-full text-black hover:text-white hover:bg-black bg-white border-2 border-black py-2 rounded-xl shadow-lg">Buy Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Singleproduct;