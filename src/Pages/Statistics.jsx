import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const categoriesTabData = useLoaderData()
    console.log(categoriesTabData)
    return (
        <div  className='min-h-[calc(100vh-285px)]'>
            
        </div>
    );
};

export default Statistics;