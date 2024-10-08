import { DimensionsType } from "@/constants/types";

const boxSize = 24;

const isStart = (curr: DimensionsType, start: DimensionsType) =>
  curr.x === start.x && curr.y === start.y;

const isEnd = (curr: DimensionsType, end: DimensionsType) =>
  curr.x === end.x && curr.y === end.y;

const neighbours = (curr: DimensionsType, rows: number, cols: number) => {
  const { x, y } = curr;
  const n: DimensionsType[] = [];

  if (y < cols - 1) n.push({ x, y: y + 1 });
  if (x < rows - 1) n.push({ x: x + 1, y });
  if (y > 0) n.push({ x, y: y - 1 });
  if (x > 0) n.push({ x: x - 1, y });

  return n;
};

const getId = (curr: DimensionsType) => `${curr.x}-${curr.y}`;

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export { isStart, isEnd, neighbours, getId, sleep, boxSize };
