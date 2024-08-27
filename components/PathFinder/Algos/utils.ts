import { DimensionsType } from "@/constants/types";
import { getId } from "@/components/PathFinder/utils";

const displayPath = (path: DimensionsType[]) => {
  path.forEach((p) => {
    const element = document.getElementById(getId(p));
    if (element) {
      element.classList.remove("bg-red-500");
      element.classList.add("bg-green-500");
    }
  });
};

export { displayPath };
