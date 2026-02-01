"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 1100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9998] flex items-center justify-center bg-[#02030a]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <motion.div
            initial={{ width: "15%" }}
            animate={{ width: "75%" }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="h-px bg-gradient-to-r from-transparent via-white to-transparent"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

