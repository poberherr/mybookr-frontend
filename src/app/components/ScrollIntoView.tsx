import React, { useEffect, useRef } from "react";

interface ScrollIntoViewProps {
  children: React.ReactNode;
}

const ScrollIntoView: React.FC<ScrollIntoViewProps> = ({ children }) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (divRef.current) {
      divRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return <div ref={divRef}>{children}</div>;
};

export default ScrollIntoView;
