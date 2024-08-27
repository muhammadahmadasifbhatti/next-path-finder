"use client";

import React from "react";
import { getId } from "@/components/PathFinder/utils";
import { boxSize } from "@/components/PathFinder/utils";
import { DimensionsType } from "@/constants/types";

type CellProps = {
  i: number;
  j: number;
  start: boolean;
  end: boolean;
  settingStart: boolean;
  setSettingStart: (settingStart: boolean) => void;
  setStart: React.Dispatch<React.SetStateAction<DimensionsType>>;
  settingEnd: boolean;
  setSettingEnd: (settingEnd: boolean) => void;
  setEnd: React.Dispatch<React.SetStateAction<DimensionsType>>;
};

const Cell = ({
  i,
  j,
  start,
  end,
  settingStart,
  setSettingStart,
  setStart,
  settingEnd,
  setSettingEnd,
  setEnd,
}: CellProps) => {
  return (
    <div
      id={getId({ x: i, y: j })}
      className={`bg-blue-200 border border-black flex justify-center items-center text-xs
        ${settingStart || settingEnd ? "cursor-pointer" : ""}
        ${start ? "bg-green-400" : end ? "bg-yellow-400" : ""}`}
      style={{ width: `${boxSize}px`, height: `${boxSize}px` }}
      onClick={() => {
        if (settingStart) {
          setSettingStart(false);
          setStart({ x: i, y: j });
        } else if (settingEnd) {
          setSettingEnd(false);
          setEnd({ x: i, y: j });
        }
      }}
      dangerouslySetInnerHTML={{ __html: "" }}
    />
  );
};

export default Cell;
