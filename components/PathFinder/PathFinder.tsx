"use client";

import React, { useEffect, useState } from "react";
import Cell from "@/components/PathFinder/Cell";
import { isStart, isEnd, getId, boxSize } from "@/components/PathFinder/utils";
import { DimensionsType } from "@/constants/types";
import { useScreenSize } from "@/components/PathFinder/customHooks";
import ControllBar from "@/components/PathFinder/ControlBar";

const PathFinder = () => {
  const screenSize = useScreenSize();

  const rows = Math.max(Math.floor(screenSize.height / boxSize) - 3, 0);
  const cols = Math.max(Math.floor(screenSize.width / boxSize) - 3, 0);

  const [start, setStart] = useState<DimensionsType>({ x: 0, y: 0 });
  const [end, setEnd] = useState<DimensionsType>({ x: rows - 1, y: cols - 1 });

  useEffect(() => {
    setStart({ x: Math.floor(rows / 2), y: Math.floor(cols / 4) });
    setEnd({ x: Math.floor(rows / 2), y: Math.floor((3 * cols) / 4) });
  }, [rows, cols]);

  const [settingStart, setSettingStart] = useState(false);
  const [settingEnd, setSettingEnd] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center space-y-4">
      <ControllBar
        setSettingStart={setSettingStart}
        setSettingEnd={setSettingEnd}
        start={start}
        end={end}
        rows={rows}
        cols={cols}
      />

      {rows >= 0 && cols >= 0 && (
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
                    settingStart={settingStart}
                    setSettingStart={setSettingStart}
                    setStart={setStart}
                    settingEnd={settingEnd}
                    setSettingEnd={setSettingEnd}
                    setEnd={setEnd}
                  />
                );
              })}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PathFinder;
