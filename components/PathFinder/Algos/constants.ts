import useDFS from "@/components/PathFinder/Algos/DFS";

const algos = {
  DFS: useDFS,
} as const;

type AlgoType = keyof typeof algos;

export default algos;
export type { AlgoType };
