"use client";

import { Link, Text } from "@radix-ui/themes";
import NextLink from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  name: string;
}

export const NavLink = ({ href, name }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link asChild weight="medium">
      <NextLink href={href}>
        <Text style={{ textDecoration: isActive ? "underline" : "none" }}>
          {name}
        </Text>
      </NextLink>
    </Link>
  );
};
