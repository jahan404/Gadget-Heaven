import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";
import { BsCart2 } from "react-icons/bs";
import { FiHeart } from 'react-icons/fi';
import { addItemToLocalStorage } from '../Utils/Utils';
import { addWISHEDItemToLocalStorage } from '../Utils/UtilsForWIshlist';

const GadgetDetailPage = () => {
    
    useEffect(() => {
            document.title = "Gadget Heaven | Product Detail";
          }, []);

    const data = useLoaderData()
    const {id} = useParams()

    // use S T A T E
    const [selectedGadget, setSelectedGadget] = useState({})

    useEffect(()=>{
    const clickedData = data.find((d)=>d.product_id==id)
    setSelectedGadget(clickedData)
    },[id,data])

    
    //  D E S T R U C T U R I N G

    const {
        product_title,
        product_image,
        category,
        price,
        description,
        specification,
        availability,
        rating,
        warranty
    } = selectedGadget;
    

    // F U N C T I O N S 

    function handleAddToCart(item){
        addItemToLocalStorage(item)
    }
    function handleAddToWishlist(item){
        addWISHEDItemToLocalStorage(item)
    }



    return (

        <div className='relative'>
            <div className='bg-[#9538E2] w-11/12 mx-auto text-white text-center pt-14 pb-40 text-4xl font-bold mb-96'>

            <h1>Product Detail</h1>

            </div>

            <div className='absolute h-[450px] w-[850px] mx-auto p-2 border rounded-2xl bg-white top-36 right-60 flex flex-row gap-4'>

            <div className='w-2/5 h-full'>
            <img className='rounded-lg h-full w-full object-cover' src={product_image} alt="" />
            </div>

            <div className='w-3/5 space-y-3'>
            <h1 className='text-2xl font-bold'>{product_title}</h1>
            <p className='font-medium text-sm'>Price : {price}$</p>
            {
                availability ? <button className='btn btn-sm rounded-3xl bg-[#309C081A] border-[#309C08] text-[#309C08] '>In Stock</button> : <button className='btn btn-sm rounded-3xl bg-red-50 border-red-600 text-red-600 '>Stock Out</button>
            }
            <p className='text-sm font-light text-gray-700'>{description}</p>

            <h2 className='font-bold text-base'>Specification</h2>
            <div>
            {
                specification?.map((s,index)=><p className='text-sm font-light text-gray-700' key={index}>{s}</p>)
            }
            </div>
            <h2 className='font-bold'>Rating
            </h2>

            <div className='flex items-center gap-1'>
            <p className='font-semibold'>{rating}</p>
            <IoIosStar className='text-yellow-600  mb-1'/>
            </div>
           
            <div className='flex items-center gap-2'>

            <div onClick={()=>handleAddToCart(selectedGadget)} className={`flex items-center gap-2 btn btn-wide ${availability ? 'text-white' : 'btn-disabled text-gray-500'} bg-[#9538E2] rounded-2xl`}>
            <button>Add to Cart</button>

            <BsCart2 className={`${availability ? 'text-white text-xl' : 'text-gray-600 text-xl'}`} />
            </div>

            <div onClick={()=>handleAddToWishlist(selectedGadget)} className='bg-white rounded-full p-3 text-black border btn btn-circle'>
                    <FiHeart />
            </div>
            </div>
            

            </div>

            </div>
        </div>
    );
};

export default GadgetDetailPage;