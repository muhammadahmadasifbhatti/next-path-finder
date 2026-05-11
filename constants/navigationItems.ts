import { NavigationItemType } from "@/constants/types";

const navigationItems: NavigationItemType[] = [
  {
    name: "Home",
    route: "/",
    default: true,
  },
  {
    name: "Path Finder",
    route: "/pathfinder",
  },
  {
    name: "Chat",
    route: "/chat",
  },
];

export default navigationItems;
