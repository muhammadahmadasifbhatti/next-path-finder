import { Box, Flex } from "@radix-ui/themes";

import { HeroSectionContent } from "@/components/home/sections/hero/HeroSectionContent";
import { HeroSectionImage } from "@/components/home/sections/hero/HeroSectionImage";

export const HeroSection = () => {
  return (
    <Flex
      direction={{ initial: "column", lg: "row" }}
      align="center"
      justify="center"
      gap={{ initial: "8", lg: "4" }}
      width="100%"
    >
      <Box width={{ initial: "100%", lg: "50%" }}>
        <HeroSectionContent />
      </Box>
      <Box width={{ initial: "100%", lg: "50%" }}>
        <HeroSectionImage />
      </Box>
    </Flex>
  );
};
