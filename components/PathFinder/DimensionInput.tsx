import React from "react";
import { DimensionsType } from "@/constants/types";

const DimensionInput = ({
  text,
  setDimension,
  rows,
  cols,
}: {
  text: string;
  setDimension: React.Dispatch<React.SetStateAction<DimensionsType>>;
  rows: number;
  cols: number;
}) => {
  const handleRowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) < 0 || parseInt(e.target.value) >= rows)
      return;
    setDimension((prev) => ({ x: parseInt(e.target.value), y: prev.y }));
  };

  const handleColChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(e.target.value) < 0 || parseInt(e.target.value) >= cols)
      return;
    setDimension((prev) => ({ x: prev.x, y: parseInt(e.target.value) }));
  };

  return (
    <div className="flex space-x-4">
      <div>{text}</div>
      <div className="flex flex-col space-y-3">
        <input
          className="w-40 border-2 border-gray-300 px-1"
          placeholder="row:"
          type="number"
          min={0}
          max={rows - 1}
          onChange={(e) => handleRowChange(e)}
        />
        <input
          className="w-40 border-2 border-gray-300 px-1"
          placeholder="col:"
          type="number"
          min={0}
          max={cols - 1}
          onChange={(e) => handleColChange(e)}
        />
      </div>
    </div>
  );
};

export default DimensionInput;
