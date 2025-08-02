import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HomeSectionProps } from "./HomeSection";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaFigma, FaNodeJs, FaDatabase, FaGithub, FaCode } from "react-icons/fa6";
import { SiNextdotjs, SiTailwindcss, SiSocketdotio, SiWebpack, SiVite, SiEslint, SiExpress, SiMongodb, SiMysql, SiVercel, SiRender } from "react-icons/si";

interface TabData {
  id: string;
  label: string;
  content: Array<{
    name: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
  }>;
}

const tabs: TabData[] = [
  {
    id: "frontend",
    label: "Frontend",
    content: [
      { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "React.js", icon: FaReact, color: "text-cyan-400" },
      { name: "Redux", icon: FaCode, color: "text-purple-500" },
      { name: "Next.js", icon: SiNextdotjs, color: "text-white dark:text-black" },
      { name: "TypeScript", icon: FaCode, color: "text-blue-600" },
      { name: "Framer Motion", icon: FaCode, color: "text-pink-500" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
      { name: "Figma", icon: FaFigma, color: "text-purple-400" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "text-white dark:text-black" },
      { name: "Webpack", icon: SiWebpack, color: "text-blue-600" },
      { name: "Vite", icon: SiVite, color: "text-purple-500" },
      { name: "ESLint", icon: SiEslint, color: "text-purple-600" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    content: [
      { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
      { name: "Express.js", icon: SiExpress, color: "text-gray-600 dark:text-gray-400" },
      { name: "JWT", icon: FaCode, color: "text-red-500" },
      { name: "bcrypt", icon: FaCode, color: "text-blue-500" },
      { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
      { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
      { name: "SQL Server", icon: FaDatabase, color: "text-red-600" },
      { name: "Socket.IO", icon: SiSocketdotio, color: "text-white dark:text-black" },
    ],
  },
  {
    id: "general",
    label: "General",
    content: [
      { name: "Vercel", icon: SiVercel, color: "text-white dark:text-black" },
      { name: "Render", icon: SiRender, color: "text-orange-500" },
      { name: "GitHub", icon: FaGithub, color: "text-white dark:text-black" },
      { name: "Git", icon: FaGithub, color: "text-orange-600" },
    ],
  },
];

export default function SkillSection({ id }: HomeSectionProps) {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section id={id} className="flex items-center justify-center bg-black dark:bg-white p-10 rounded-xl">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold mb-8 text-center text-white dark:text-black">Languages and Technologies</h2>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => (
            <motion.button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-6 py-3 font-medium transition-all duration-300 ${activeTab === tab.id ? "text-white dark:text-black border-b-2 border-white dark:border-black" : "text-gray-400 dark:text-gray-600 hover:text-gray-300 dark:hover:text-gray-500"}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="">
          <AnimatePresence mode="wait">
            <motion.div key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
              {tabs
                .find((tab) => tab.id === activeTab)
                ?.content.map((skill, index) => {
                  const IconComponent = skill.icon;
                  return (
                    <motion.div
                      key={`${activeTab}-${skill.name}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                        ease: "easeOut",
                      }}
                      className="flex flex-col items-center p-4 bg-transparent border border-white dark:border-black rounded-xl transition-all duration-300 group"
                    >
                      <motion.div className={`w-12 h-12 mb-3 flex items-center justify-center text-2xl ${skill.color} group-hover:scale-110 transition-transform duration-300`} whileHover={{ rotate: 360 }} transition={{ duration: 0.6, ease: "easeInOut" }}>
                        <IconComponent />
                      </motion.div>
                      <span className="text-sm font-medium text-white dark:text-black text-center">{skill.name}</span>
                    </motion.div>
                  );
                })}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
