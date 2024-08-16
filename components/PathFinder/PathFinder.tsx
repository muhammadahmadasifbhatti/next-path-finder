"use client";

import React from "react";
import Cell from "@/components/PathFinder/Cell";
import {
  isStart,
  isEnd,
  getId,
  START,
  END,
  ROWS,
  COLS,
} from "@/components/PathFinder/utils";
import DimensionInput from "@/components/PathFinder/DimensionInput";
import useDFS from "./Algos/DFS";

const PathFinder = () => {
  const [start, setStart] = React.useState(START);
  const [end, setEnd] = React.useState(END);
  const [rows] = React.useState(ROWS);
  const [cols] = React.useState(COLS);

  const useVisualize = () => {
    useDFS(start, end, rows, cols);
  };

  const handleReset = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <div className="flex w-full space-x-20 justify-center items-center">
        <div className="w-1/5">
          <h2>Algorithm Name</h2>
          <h3>DFS</h3>
        </div>
        <DimensionInput
          text="Change Start"
          setDimension={setStart}
          rows={rows}
          cols={cols}
        />
        <div className="flex flex-col space-y-3 items-center w-1/5">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-max`}
            onClick={useVisualize}
          >
            Visualize
          </button>
          <button
            className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-max`}
            onClick={handleReset}
          >
            Reset
          </button>
        </div>
        <DimensionInput
          text="Change End"
          setDimension={setEnd}
          rows={rows}
          cols={cols}
        />
        <div className="w-1/5">
          <h2>Priority</h2>
          <ul className="list-decimal list-inside">
            <li>Right</li>
            <li>Bottom</li>
            <li>Left</li>
            <li>Up</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col space-y-0 pb-16">
        {new Array(rows).fill(0).map((_, i) => (
          <div key={i} className="flex space-x-0">
            {new Array(cols).fill(0).map((_, j) => {
              const [_isStart, _isEnd] = [
                isStart({ x: i, y: j }, start),
                isEnd({ x: i, y: j }, end),
              ];

              return (
                <Cell
                  key={getId({ x: i, y: j })}
                  i={i}
                  j={j}
                  start={_isStart}
                  end={_isEnd}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PathFinder;
