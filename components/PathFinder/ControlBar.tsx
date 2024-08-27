"use client";

import React from "react";
import algos, { AlgoType } from "@/components/PathFinder/Algos/constants";

type ControllBarProps = {
  setSettingStart: React.Dispatch<React.SetStateAction<boolean>>;
  setSettingEnd: React.Dispatch<React.SetStateAction<boolean>>;
  start: { x: number; y: number };
  end: { x: number; y: number };
  rows: number;
  cols: number;
};

const ControllBar = ({
  setSettingStart,
  setSettingEnd,
  start,
  end,
  rows,
  cols,
}: ControllBarProps) => {
  const [selectedAlgo, setSelectedAlgo] = React.useState<AlgoType>("DFS");

  const useVisualize = () => {
    setSettingStart(false);
    setSettingEnd(false);
    algos[selectedAlgo](start, end, rows, cols);
  };

  const handleReset = () => {
    if (typeof window !== "undefined") {
      window.location.reload();
    }
  };

  return (
    <div className="flex w-full space-x-5 md:space-x-20 justify-center items-center text-white font-bold">
      <AlgoSelector setSelectedAlgo={setSelectedAlgo} />

      <div className="flex flex-col space-y-3 items-center">
        <button
          className={`bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded w-max`}
          onClick={useVisualize}
        >
          Visualize
        </button>
        <button
          className={`bg-red-500 hover:bg-red-700 py-2 px-4 rounded w-max`}
          onClick={handleReset}
        >
          Reset
        </button>
      </div>

      <div className="flex flex-col space-y-3 items-center">
        <button
          className={`bg-green-500 hover:bg-green-700 py-2 px-4 rounded w-max`}
          onClick={() => setSettingStart(true)}
        >
          Set Start
        </button>
        <button
          className={`bg-yellow-500 hover:bg-yellow-700 py-2 px-4 rounded w-max`}
          onClick={() => setSettingEnd(true)}
        >
          Set End
        </button>
      </div>
    </div>
  );
};

const AlgoSelector = ({
  setSelectedAlgo,
}: {
  setSelectedAlgo: React.Dispatch<React.SetStateAction<AlgoType>>;
}) => {
  return (
    <div className="flex flex-col items-center">
      <select
        className="bg-gray-800 rounded py-2 px-4 hover:cursor-pointer"
        onChange={(event) => setSelectedAlgo(event.target.value as AlgoType)}
      >
        {Object.keys(algos).map((algo) => (
          <option key={algo} value={algo}>
            {algo}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ControllBar;
