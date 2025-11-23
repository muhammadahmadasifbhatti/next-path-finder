import { Box, Flex } from "@radix-ui/themes";

import { NavLink } from "@/components/NavLink";
import navigationItems from "@/constants/navigationItems";

const Navigation = () => {
  return (
    <Box asChild style={{ backgroundColor: "var(--gray-3)" }}>
      <nav>
        <Flex direction="row" justify="center" py="4" gap="6">
          {navigationItems.map((item) => (
            <NavLink key={item.route} href={item.route} name={item.name} />
          ))}
        </Flex>
      </nav>
    </Box>
  );
};

export default Navigation;
