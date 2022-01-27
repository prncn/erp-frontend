import React from 'react';
import { VictoryChart, VictoryArea, VictoryLine } from 'victory';

export function Dashboard() {
  return (
    <div className="min-h-screen w-full flex items-center bg-gray-50">
      <div className="w-full h-screen p-10">
        <h1 className="font-bold text-4xl py-5 font-display">DASHBOARD</h1>
        <div className="flex space-x-3 w-3/4">
          <div className="h-1/2 w-1/2 border rounded-xl shadow-2xl p-4">
            <span className="uppercase">Development of past 3 Months</span>
            <VictoryChart>
              <VictoryLine
                style={{
                  data: {
                    stroke: 'url(#myGradient)',
                    strokeWidth: 5,
                  },
                }}
                interpolation="natural"
                width={'800'}
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 1 },
                  { x: 6, y: 6 },
                  { x: 7, y: 6 },
                ]}
              />
            </VictoryChart>
          </div>
          <div className="h-1/2 w-1/2 border rounded-xl shadow-2xl p-4">
            <span className="uppercase">Development of past 3 Months</span>
            <VictoryChart>
              <VictoryArea
                interpolation="natural"
                width={'800'}
                data={[
                  { x: 1, y: 2 },
                  { x: 2, y: 3 },
                  { x: 3, y: 5 },
                  { x: 4, y: 4 },
                  { x: 5, y: 6 },
                  { x: 6, y: 6 },
                  { x: 7, y: 6 },
                ]}
              />
            </VictoryChart>
          </div>
        </div>
      </div>
      <svg className="absolute">
        <defs>
          <linearGradient id="myGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f5a742" />
            <stop offset="100%" stopColor="#f58742" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
