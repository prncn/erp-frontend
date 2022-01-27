import React from 'react';
import { useParams } from 'react-router-dom';

export function Companies() {
  const param = useParams();
  const name = param?.name;

  return (
    <div className="min-h-screen w-full flex items-center bg-gray-50">
      <div className="w-full h-screen p-10">
        <h1 className="font-bold text-4xl py-5 font-display">COMPANIES</h1>
        <h1 className="font-bold text-3xl py-5 font-display uppercase">
          {name}
        </h1>
      </div>
    </div>
  );
}
