import React from 'react';

const GadgetCard = ({oneGadget}) => {
    const {product_title,product_id,product_image,price} = oneGadget
    
    return (
        <div className='shadow-xl px-4 pt-6 pb-8 rounded-3xl hover:scale-105 overflow-hidden transition space-y-2'>
            
            <div className='w-[280px] h-[200px] mx-auto p-4'>
            
                <img src={product_image} alt="" className='w-full h-full object-cover rounded-2xl border hover:scale-110 overflow-hidden transition'/>
            </div>

            <h1 className='font-bold'>{product_title}</h1>
            <p className='text-sm font-light'>Price : {price}$</p>
            <button className='btn rounded-3xl text-[#9538E2] border-[#9538E2]'>View Details</button>
        </div>
    );
};

export default GadgetCard;