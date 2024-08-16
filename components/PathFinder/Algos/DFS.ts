import { DimensionsType } from "@/constants/types";
import { neighbours, getId, isEnd } from "@/components/PathFinder/utils";

const useDFS = (
  start: DimensionsType,
  end: DimensionsType,
  rows: number,
  cols: number
) => {
  const isVisited = new Set<string>();
  let count = 0;

  const visualizeDFS = (curr: DimensionsType): boolean => {
    if (isEnd(curr, end)) return true;

    const currId = getId(curr);
    const currElement = document.getElementById(currId);

    if (currElement) {
      currElement.classList.add("bg-red-500");
      currElement.innerText = count.toString();
    }

    isVisited.add(currId);
    const n = neighbours(curr, rows, cols);

    count += 1;
    for (const neighbour of n) {
      if (!isVisited.has(getId(neighbour))) {
        if (setTimeout(() => visualizeDFS(neighbour), 100)) return true;
      }
    }

    return false;
  };

  visualizeDFS(start);
};

export default useDFS;
