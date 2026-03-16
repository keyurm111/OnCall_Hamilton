import React from 'react';
import { useRouteError, useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <div className="min-h-screen bg-[#181717] flex flex-col items-center justify-center text-[#f4efe7] p-10 text-center">
      <h1 className="text-9xl font-bold mb-4 opacity-20">404</h1>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter uppercase">
        Oasis Not Found
      </h2>
      <p className="text-[#b1a696] text-xl mb-10 max-w-md">
        The path you're looking for has been buried in the sand. Let's get you back to safety.
      </p>
      <button
        onClick={() => navigate('/')}
        className="bg-[#f4efe7] text-[#181717] px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform"
      >
        RETURN HOME
      </button>
    </div>
  );
};

export default ErrorPage;
