"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      animate={{
        x: mouse.x - 100,
        y: mouse.y - 100,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className="pointer-events-none fixed z-[999] h-[200px] w-[200px] rounded-full bg-white/20 blur-3xl"
    />
  );
}