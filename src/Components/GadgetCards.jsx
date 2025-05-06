import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import GadgetCard from './GadgetCard';

const GadgetCards = () => {
    const data = useLoaderData()
    const {categoryName} = useParams()
    
    
    // USE S T A T E S
    const [gadgetData,setGadgetData] = useState(data)



    useEffect(()=>{
        if(categoryName){
            const filteredData = data.filter(d=>d.category===categoryName)
            console.log(filteredData)
            setGadgetData(filteredData)
        }
        else{
            setGadgetData([...data].slice(0,6))
        }
    },[data,categoryName])

    
    

    return (
        <div className='grid grid-cols-3 gap-8 mb-16'>
         {
            gadgetData.map(oneGadget=><GadgetCard oneGadget={oneGadget} key={oneGadget.product_id}></GadgetCard>)
         }   
        </div>
    );
};

export default GadgetCards;