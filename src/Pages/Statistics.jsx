import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const categoriesTabData = useLoaderData()
    console.log(categoriesTabData)
    return (
        <div>
            
        </div>
    );
};

export default Statistics;