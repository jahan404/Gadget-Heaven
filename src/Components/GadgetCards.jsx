import React, { useEffect, useState } from 'react';
import { useLoaderData, useLocation, useParams } from 'react-router-dom';
import GadgetCard from './GadgetCard';

const GadgetCards = () => {
    const data = useLoaderData()
    const {categoryName} = useParams()
    const {pathname} = useLocation()
    // console.log(pathname)

    // USE S T A T E S
    const [gadgetData,setGadgetData] = useState(data)
    const [viewAll, setViewAll] = useState(false)


    useEffect(()=>{
        if(categoryName){
            const filteredData = [...data].filter(d=>d.category===categoryName)
            // console.log(filteredData)
            setGadgetData(filteredData)
        }
        else{
            setGadgetData([...data].slice(0,6))
        }
    },[data,categoryName])

    
    useEffect(() => {
        document.title = "Gadget Heaven";
      }, []);

    return (
        <div>
            
         {
            gadgetData.length !== 0 ? (
                <div className='grid grid-cols-3 gap-8 mb-8'>
                {
                gadgetData.map((oneGadget)=>
                <GadgetCard oneGadget={oneGadget} key={oneGadget.product_id}></GadgetCard>)
                }
                </div> 
                )
                 : 
                <div className='text-5xl text-[#9538E2] font-bold text-center pt-40'>Not Available Right Now!</div>
         }   


         {
            pathname === "/" ? (
                viewAll  ? <div className='flex justify-center'>
                <button onClick={()=>{setGadgetData([...data].slice(0,6)) ; setViewAll(false)}} className='btn btn-wide rounded-full mb-10 bg-[#9538E2] text-white border'>See Less</button>
                </div> 
                : 
                <div className='flex justify-center'>
                <button onClick={()=>{setGadgetData(data) ; setViewAll(true)}} className='btn btn-wide rounded-full mb-10 bg-[#9538E2] text-white border'>View All</button>
                </div>

                 
            )
            : ''
        }


        </div>
    );
};

export default GadgetCards;