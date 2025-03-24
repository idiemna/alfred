import React from "react";

export default function CardSkeleton() {
  return (
    <div className="border rounded-lg shadow-md transition-all duration-200 text-left bg-blue-200 dark:bg-gray-800 overflow-hidden shadow-xs shadow-stone-800 dark:shadow-white cursor-pointer">
      <div className="relative w-full h-45">
        <div className="w-4/9 h-full absolute right-0 z-2 bg-gray-300 dark:bg-gray-700 animate-pulse"></div>

        <div className="absolute inset-0 bg-[rgb(209,213,220,0.9)] dark:bg-[rgb(30,41,57,0.9)] transition-all duration-200"></div>

        <div className="pl-8 pt-5 w-full z-3 absolute w-full h-full z-1">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-3/4 animate-pulse mb-2"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded w-1/2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
