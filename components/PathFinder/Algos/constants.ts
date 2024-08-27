import useDFS from "@/components/PathFinder/Algos/DFS";
import useBFS from "@/components/PathFinder/Algos/BFS";

const algos = {
  DFS: useDFS,
  BFS: useBFS,
} as const;

type AlgoType = keyof typeof algos;

export default algos;
export type { AlgoType };
