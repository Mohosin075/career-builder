import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const NotFound = () => {
  const { status, statusText, data, error } = useRouteError();
  const navigate = useNavigate();

  const handleNavigate =()=>{
    navigate('/')
  }

  return (
    <div className="w-2/3 mx-auto mt-12">
      <div className="space-y-7  text-center flex flex-col justify-center items-center">
        <h1 className="text-9xl font-bold text-red-500">{status || '404'}</h1>
        <h3 className="text-3xl font-semibold ">{statusText || 'Page not found'}</h3>
        <h4 className="text-xl font-semibold text-red-500 ">{data || 'Invalid URL'}</h4>
        <p className="text-xs">{error?.stack || ''}</p>
        <button className="my-btn px-2 py-1 md:px-7 md:py-5 text-sm md:text-2xl text-white" onClick={handleNavigate}>back to home</button>
      </div>
    </div>
  );
};

export default NotFound;
