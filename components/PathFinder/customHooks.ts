import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = (_sh: boolean = false) => {
      setScreenSize((prev) => ({
        width: window.innerWidth,
        height: _sh ? window.innerHeight : prev.height,
      }));
    };

    handleResize(true);
    if (typeof window !== "undefined")
      window.addEventListener("resize", () => handleResize());

    return () => {
      if (typeof window !== "undefined")
        window.removeEventListener("resize", () => handleResize());
    };
  }, []);

  return screenSize;
};

export { useScreenSize };
