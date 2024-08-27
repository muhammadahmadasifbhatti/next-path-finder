import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    if (typeof window !== "undefined")
      window.addEventListener("resize", handleResize);

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export { useScreenSize };
