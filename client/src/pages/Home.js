import React from 'react';
import '../index.css';

export function Home() {
  return (
    <div className="min-h-screen w-full flex items-center bg-gray-50">
      <div className="w-full h-screen p-10 flex flex-col">
        <h1 className="font-bold text-5xl py-5 font-display w-60">
          X-DIRECT ERP TOOL
        </h1>
        <div className="mask">
          <div className="animate-gradient-y bg-gradient-to-t from-black to-black w-40 h-40" />
        </div>
        <div className="mask mt-auto">
          <div className="animate-gradient-y bg-gradient-to-t from-yellow-500 to-red-500 w-40 h-40" />
        </div>
      </div>
    </div>
  );
}
