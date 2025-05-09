import React, { useEffect, useState } from 'react';
import { getWISHEDItemFromLocalStorage, removeWISHEDItemFromLocalStorage } from '../Utils/UtilsForWIshlist';
import DetailedWIshlistItems from './DetailedWIshlistItems';
 
const WIshlistItems = () => {

    const [wishedItem,setWishedItem] = useState([])

    useEffect(()=>{
        const data = getWISHEDItemFromLocalStorage()
        setWishedItem(data)
    },[])
    

    const handleWISHEDItemDeletion = (item) =>{
    removeWISHEDItemFromLocalStorage(item)
    const data = getWISHEDItemFromLocalStorage()
    setWishedItem(data)
    }


    return (
        <div className='bg-base-200 py-16'>
          <h1 className='w-11/12 mx-auto  text-2xl font-bold pl-6 mt-5 mb-12'>WishList</h1>
          <div className='w-11/12 mx-auto flex flex-col gap-7 pb-40'>
        {
            wishedItem.map((gadgetDetail)=> <DetailedWIshlistItems gadgetDetail={gadgetDetail} handleWISHEDItemDeletion={handleWISHEDItemDeletion}  key={gadgetDetail.product_id}></DetailedWIshlistItems>)
        }
        </div>  
        </div>
    );
};

export default WIshlistItems;