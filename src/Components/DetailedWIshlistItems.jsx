import React from 'react';
import { TiDelete } from 'react-icons/ti';
import { addItemToLocalStorage } from '../Utils/Utils';
 
const DetailedWIshlistItems = ({gadgetDetail,handleWISHEDItemDeletion}) => {
    const {
        product_title,
        product_image,
        price,
        description,
    } = gadgetDetail;
    

    function handleAddToCart(detail){
        addItemToLocalStorage(detail)
    }



    return (
        <div className='flex flex-row items-center gap-12 p-4 rounded-3xl bg-white shadow-xl'>
                    <div className='h-[150px] w-[150px]'>
                        <img className='h-full w-full object-cover rounded-2xl border' src={product_image} alt="" />
                    </div>
        
                    <div className='flex flex-col space-y-2 justify-center w-9/12'>
                        <h1 className='text-xl font-bold'>{product_title}</h1>
                        <p className='text-sm font-light text-gray-600'>{description}</p>
                        <p className='text-base font-semibold text-gray-700 pb-2'>Price : ${price}</p>

                        <button onClick={()=>handleAddToCart(gadgetDetail)} className='btn btn-primary btn-wide rounded-3xl '>Add to Cart</button>
                    </div>
        
                    <TiDelete onClick={()=>handleWISHEDItemDeletion(gadgetDetail)}
                    className='text-red-600 font-light flex justify-end btn btn-circle btn-ghost' size={40}/>
        
                </div>
    );
};

export default DetailedWIshlistItems;