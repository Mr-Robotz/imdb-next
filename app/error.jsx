"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    // Log the error to the console for debugging purposes
    console.error("An error occurred:", error);
  }, [error]);

  return (
    <div className="text-center mt-10">
      <h1>Something went wrong. Please try again later.</h1>
      <button
        className="hover:text-amber-500"
        onClick={() => reset()}
        aria-label="Retry"
      >
        Try Again
      </button>
    </div>
  );
};

export default Error;

