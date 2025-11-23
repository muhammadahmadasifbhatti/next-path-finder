import { Flex } from "@radix-ui/themes";
import Image from "next/image";

export const HeroSectionImage = () => {
  return (
    <Flex
      justify="center"
      align="center"
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(ellipse at center, rgba(189, 255, 77, 0.15) 0%, rgba(189, 255, 77, 0.08) 40%, transparent 70%)",
          filter: "blur(1000px)",
          zIndex: 0,
        }}
      />
      <Image
        src="/images/subject.png"
        alt="Hero"
        width={400}
        height={400}
        style={{
          position: "relative",
          zIndex: 1,
          filter: "drop-shadow(0 0 60px rgba(189, 255, 77, 0.2))",
        }}
      />
    </Flex>
  );
};
