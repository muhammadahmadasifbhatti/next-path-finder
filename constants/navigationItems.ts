import { NaigationItemType } from "@/constants/types";

const navigationItems: NaigationItemType[] = [
  {
    name: "Home",
    route: "/",
    default: true,
  },
  // {
  //   name: "Projects",
  //   route: "/projects",
  // },
  {
    name: "Path Finder",
    route: "/pathfinder",
  },
];

export default navigationItems;
