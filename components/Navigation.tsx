"use client";

import React, { useState } from "react";
import navItems from "@/constants/navigationItems";
import { NaigationItemType } from "@/constants/types";
import { useRouter, usePathname } from "next/navigation";

const Navigation = () => {
  const router = useRouter();
  const pathName = usePathname();

  const [currentNavItem, setCurrentNavItem] = useState<NaigationItemType>(
    navItems.filter((item) => item.route === pathName)[0] ||
      navItems.filter((item) => item.default)[0]
  );

  return (
    <nav className="flex justify-center py-3 space-x-12 bg-gray-900 sticky top-0">
      {navItems.map((item, i) => (
        <div
          className={`hover:cursor-pointer ${item.name === currentNavItem.name ? "text-gray-50 underline" : "text-gray-300"}`}
          key={i}
          onClick={() => {
            setCurrentNavItem(item);
            router.push(item.route);
          }}
        >
          {item.name}
        </div>
      ))}
    </nav>
  );
};

export default Navigation;
