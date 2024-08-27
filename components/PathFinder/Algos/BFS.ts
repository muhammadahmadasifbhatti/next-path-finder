import { DimensionsType } from "@/constants/types";
import { neighbours, getId, isEnd } from "@/components/PathFinder/utils";
import { displayPath } from "@/components/PathFinder/Algos/utils";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const useBFS = (
  start: DimensionsType,
  end: DimensionsType,
  rows: number,
  cols: number
) => {
  const isVisited = new Set<string>();
  const parent = new Map<string, DimensionsType>();
  const queue: DimensionsType[] = [];
  const path: DimensionsType[] = [];

  const visualizeBFS = async (start: DimensionsType) => {
    queue.push(start);
    isVisited.add(getId(start));

    while (queue.length > 0) {
      await sleep(1);
      const curr = queue.shift() as DimensionsType;

      if (isEnd(curr, end)) {
        let currPath = curr;
        while (parent.has(getId(currPath))) {
          path.push(currPath);
          currPath = parent.get(getId(currPath)) as DimensionsType;
        }
        path.push(start);
        path.reverse();
        return;
      }

      const currId = getId(curr);
      const currElement = document.getElementById(currId);
      if (currElement && currId !== getId(start))
        currElement.classList.add("bg-red-500");

      const n = neighbours(curr, rows, cols);
      for (const neighbour of n) {
        if (!isVisited.has(getId(neighbour))) {
          isVisited.add(getId(neighbour));
          parent.set(getId(neighbour), curr);
          queue.push(neighbour);
        }
      }
    }
  };

  visualizeBFS(start).then(() => setTimeout(() => displayPath(path), 1000));
};

export default useBFS;
