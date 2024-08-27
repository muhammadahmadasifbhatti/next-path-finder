import { DimensionsType } from "@/constants/types";
import { neighbours, getId, isEnd } from "@/components/PathFinder/utils";
import { displayPath } from "@/components/PathFinder/Algos/utils";
import { sleep } from "@/components/PathFinder/utils";

const useDFS = (
  start: DimensionsType,
  end: DimensionsType,
  rows: number,
  cols: number
) => {
  const isVisited = new Set<string>();
  const path: DimensionsType[] = [];

  const visualizeDFS = async (curr: DimensionsType): Promise<boolean> => {
    await sleep(1);
    if (isEnd(curr, end)) {
      return true;
    }

    path.push(curr);
    const currId = getId(curr);
    const currElement = document.getElementById(currId);

    if (currElement && currId !== getId(start))
      currElement.classList.add("bg-red-500");

    isVisited.add(currId);
    const n = neighbours(curr, rows, cols);
    for (const neighbour of n) {
      if (!isVisited.has(getId(neighbour))) {
        if (await visualizeDFS(neighbour)) return true;
      }
    }
    return false;
  };

  isVisited.add(getId(start));
  visualizeDFS(start).then(() => setTimeout(() => displayPath(path), 1000));
};

export default useDFS;
