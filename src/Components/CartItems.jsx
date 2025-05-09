import React, { useEffect, useState } from 'react';
import { HiAdjustmentsVertical } from 'react-icons/hi2';
import { getItemFromLocalStorage, removeAddedItemFromLocalStorage } from '../Utils/Utils';
import DetailedCartInfo from './DetailedCartInfo';
import { Link } from 'react-router-dom';
import coinImage from '../assets/Group.png'
import { TbShoppingCartOff } from "react-icons/tb";

const CartItems = () => {
    const [cartGadget,setCartGadget] = useState([]);

    const [count,setTotalCount] = useState(0)
 


    useEffect(()=>{
    const data = getItemFromLocalStorage()
    setCartGadget(data)

    const sum=0;

    const total = data.reduce((acc, item) => acc + item.price , 0);

    setTotalCount(total)
    },[])

    const handleDeleteCartItems = (deletedGadget) =>{
        removeAddedItemFromLocalStorage(deletedGadget)
        const data = getItemFromLocalStorage()
        setCartGadget(data) 
        
        const total = data.reduce((acc, item) => acc + item.price , 0);
        setTotalCount(total)
    }

    const handleSort = () =>{
        const data = getItemFromLocalStorage()
        
        const sortedData = data.sort((a,b)=>b.price-a.price)
        setCartGadget(sortedData)
    }
    


    const handleRemovingAllDataOfLS = () =>{
        localStorage.removeItem('added-item') 
        setCartGadget([])
        // setTotalCount(0)     
    }

    return (
        <div className='bg-base-200 pt-10'>
            <div className='w-11/12 mx-auto flex justify-between items-center flex-row my-10'>
            
            <h1 className='text-2xl font-bold pl-6'>Cart</h1>
            <div className='flex gap-4 items-center flex-row '>
                <p className='text-2xl font-bold'>Total Cost : ${count}</p>

                <button onClick={()=>handleSort()} className='btn btn-outline rounded-3xl border-[#9538E2] text-[#9538E2]'>Sort by Price <HiAdjustmentsVertical />
                </button>
                {/* <button className='btn bg-gradient-to-b from-violet-800 to-fuchsia-300 rounded-3xl border-none text-white'>Purchase</button> */}

                {/* Open the modal using document.getElementById('ID').showModal() method */}
                <button className='btn bg-gradient-to-b from-violet-800 to-fuchsia-300 rounded-3xl border-none text-white' onClick={()=>{document.getElementById('my_modal_1').showModal() ; handleRemovingAllDataOfLS()}}>Purchase</button>
                {
                    count !==0 ? <dialog id="my_modal_1" className="modal">
                        <div className="modal-box text-center space-y-2">
                          <div className='h-[96px] w-[100px] mx-auto'>
                              <img className='h-full w-full object-cover' src={coinImage} alt="" />
                          </div>
                          <h3 className="font-bold text-4xl">Payment Successful</h3>
                          <p className='text-gray-700'>Thanks for purchasing.</p>
                          <p className='text-gray-700'>Total: ${count}</p>
                          
                          <div className="pt-6">
                            <form method="">
                              {/* if there is a button in form, it will close the modal */}
                              <Link to="/"><button className="btn btn-wide">Close</button></Link>
                            </form>
                          </div>
                        </div>
                    </dialog> 
                    
                    
                    : 


                <dialog id="my_modal_1" className="modal">
                  <div className="modal-box text-center space-y-2">
                    <div className=''>
                    <TbShoppingCartOff className='text-red-600 text-[90px] mx-auto'/>
                    </div>
                    <h3 className="font-bold text-4xl">Your Cart is Empty!</h3>
                    <p className='text-gray-700 text-3xl'>:(</p>
                    <p className='text-gray-700'>Let's Buy Something Together</p>
                    
                    <div className="pt-6">
                      <form method="">
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/"><button className="btn btn-wide">Go to Shop</button></Link>
                      </form>
                    </div>
                  </div>
                </dialog>
                }
            </div>
        </div>

 
        <div className='w-11/12 mx-auto flex flex-col gap-7 pb-40'>
        {
            cartGadget.map((gadgetDetail)=> <DetailedCartInfo gadgetDetail={gadgetDetail} handleDeleteCartItems={handleDeleteCartItems} key={gadgetDetail.product_id}></DetailedCartInfo>)
        }
        </div>

        </div>
    );
};

export default CartItems;