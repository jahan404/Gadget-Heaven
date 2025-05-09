import React, { useEffect } from 'react';
import { TiDelete } from "react-icons/ti";


const DetailedCartInfo = ({gadgetDetail,handleDeleteCartItems})=> {

    
    const {
        product_title,
        product_image,
        price,
        description,
    } = gadgetDetail;
    return ( 
        <div className='flex flex-row items-center gap-12 p-3 rounded-3xl bg-white'>
            <div className='h-[120px] w-[150px]'>
                <img className='h-full w-full object-cover rounded-2xl border' src={product_image} alt="" />
            </div>

            <div className='flex flex-col space-y-2 justify-center w-9/12'>
                <h1 className='text-xl font-bold'>{product_title}</h1>
                <p className='text-sm font-light text-gray-600'>{description}</p>
                <p className='text-base font-semibold text-gray-700'>Price : ${price}</p>
            </div>

            <TiDelete onClick={()=>handleDeleteCartItems(gadgetDetail)}
            className='text-red-600 font-light flex justify-end btn btn-circle btn-ghost' size={40}/>

        </div>
    );
};

export default DetailedCartInfo;