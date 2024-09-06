import React from 'react';
import Singleproduct from './Singleproduct';

const Displayproduct = ({ items }) => {

    return (

        <div class=" bg-white from-red-300 to-yellow-200 flex justify-center items-center py-20">
            <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
                {
                    items.map(item => <Singleproduct key={item.id} item={item}>

                    </Singleproduct>)
                }

            </div>
        </div>
    );
};

export default Displayproduct;