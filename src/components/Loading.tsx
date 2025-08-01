import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const letters = "Loading...".split("");

  return (
    <motion.div className="fixed inset-0 bg-white flex items-center justify-center z-50" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <div className="text-center">
        <div className="flex justify-center">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              className="text-4xl font-bold text-black opacity-35 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
                repeat: Infinity,
                repeatDelay: 1.5,
              }}
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
