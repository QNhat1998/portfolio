import { useState } from "react";
import { FaRegSun, FaRegMoon } from "react-icons/fa6";
import { motion } from "framer-motion";

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle("dark", newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <motion.button onClick={toggleTheme} className="fixed top-4 left-4 z-50 p-3 rounded-full bg-white/10 dark:bg-black/10 backdrop-blur-sm border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-white hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-300" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
      <motion.div initial={false} animate={{ rotate: isDark ? 180 : 0 }} transition={{ duration: 0.3 }}>
        {isDark ? <FaRegSun className="text-xl" /> : <FaRegMoon className="text-xl" />}
      </motion.div>
    </motion.button>
  );
}

export default ThemeToggle;
