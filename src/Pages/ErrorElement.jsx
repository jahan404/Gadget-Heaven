import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import { AiOutlineWarning } from 'react-icons/ai';

const ErrorElement = () => {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-6 text-center">
      <div className="bg-white p-8 rounded-2xl shadow-md max-w-xl w-full">
        <div className="flex justify-center mb-4">
          <AiOutlineWarning className="text-red-500" size={96} />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Oops! Something went wrong
        </h1>
        {/* {
            console.log(error.statusText ,"       ", error.message)
        } */}
        <p className="text-gray-600 mb-4">
        {error?.statusText || error?.message || 'An unexpected error has occurred.'
        }
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Error Code: <span className="font-semibold text-red-600">{error?.status || 'Unknown'}</span>
        </p>

        <Link to="/"> 
        <button className="inline-block px-5 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition duration-300">
        Go back home
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorElement;
