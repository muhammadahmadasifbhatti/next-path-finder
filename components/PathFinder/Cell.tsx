import React, { useState } from "react";
import { getId } from "@/components/PathFinder/utils";

type CellProps = {
  i: number;
  j: number;
  start: boolean;
  end: boolean;
};

const Cell = ({ i, j, start, end }: CellProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      id={getId({ x: i, y: j })}
      className={`w-6 h-6 bg-blue-200 border border-black flex justify-center items-center text-xs
        ${start ? "bg-green-400" : end ? "bg-yellow-400" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && `${i}, ${j}`}
    </div>
  );
};

export default Cell;
