import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUserAlt, FaEnvelope, FaHornbill, FaProjectDiagram } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

interface MenuItem {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  sectionId: string;
}

interface SocialLink {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  url: string;
  color: string;
}

const menuItems: MenuItem[] = [
  { id: "home", icon: FaHome, label: "Home", sectionId: "home" },
  { id: "about", icon: FaUserAlt, label: "About", sectionId: "about" },
  { id: "skill", icon: FaHornbill, label: "Languages & Technologies", sectionId: "skill" },
  { id: "project", icon: FaProjectDiagram, label: "Projects", sectionId: "project" },
  { id: "contact", icon: FaEnvelope, label: "Contact", sectionId: "contact" },
];

const socialLinks: SocialLink[] = [
  {
    id: "github",
    icon: FaGithub,
    label: "GitHub",
    url: "https://github.com/yourusername",
    color: "hover:text-gray-300",
  },
  {
    id: "linkedin",
    icon: FaLinkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    color: "hover:text-blue-300",
  },
  {
    id: "facebook",
    icon: FaFacebook,
    label: "Facebook",
    url: "https://facebook.com/yourusername",
    color: "hover:text-blue-300",
  },
  {
    id: "twitter",
    icon: FaTwitter,
    label: "Twitter",
    url: "https://twitter.com/yourusername",
    color: "hover:text-blue-300",
  },
  {
    id: "instagram",
    icon: FaInstagram,
    label: "Instagram",
    url: "https://instagram.com/yourusername",
    color: "hover:text-pink-300",
  },
  {
    id: "youtube",
    icon: FaYoutube,
    label: "YouTube",
    url: "https://youtube.com/@yourusername",
    color: "hover:text-red-300",
  },
];

export default function FloatingMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("home");

  // Handle scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Update active item based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map((item) => item.sectionId);
      const scrollPosition = window.scrollY + 100; // Offset for better detection

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveItem(menuItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Menu Button */}
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={`fixed bottom-6 right-6 w-10 h-10 bg-black dark:bg-white border-2 border-white dark:border-black text-white dark:text-black rounded-full shadow-lg flex items-center justify-center ${isMenuOpen ? "z-30" : "z-50"}`}>
        <div className="w-6 h-6 flex flex-col items-center justify-center">
          <div className="w-6 h-0.5 bg-current mb-1"></div>
          <div className="w-6 h-0.5 bg-current mb-1"></div>
          <div className="w-6 h-0.5 bg-current"></div>
        </div>
      </button>

      {/* Full Screen Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div className="fixed bottom-20 right-0 inset-0 z-40" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
            {/* Backdrop */}
            <motion.div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} />
            {/* Menu Panel - Slide from right */}
            <motion.div className="absolute top-0 right-0 h-full w-80 bg-black dark:bg-white" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 25, stiffness: 200 }}>
              <div className="p-6 h-full flex flex-col">
                {/* Close Button */}
                <motion.button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-6 text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-600" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>

                {/* Menu Items */}
                <div className="flex-1 flex flex-col justify-center space-y-4 mt-5">
                  {menuItems.map((item, index) => {
                    const Icon = item.icon;
                    const isActive = activeItem === item.id;

                    return (
                      <motion.button
                        key={item.id}
                        onClick={() => {
                          setActiveItem(item.id);
                          scrollToSection(item.sectionId);
                          setIsMenuOpen(false);
                        }}
                        className={`relative flex items-center justify-between p-4 rounded-lg transition-all duration-300 group ${isActive ? "text-white dark:text-black" : "text-gray-300 dark:text-gray-700 hover:text-white dark:hover:text-black"}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Label */}
                        <span className={`font-medium transition-colors duration-300 ${isActive ? "text-white dark:text-black" : "text-gray-300 dark:text-gray-700 group-hover:text-white dark:group-hover:text-black"}`}>{item.label}</span>

                        {/* Icon */}
                        <div className={`transition-colors duration-300 ${isActive ? "text-white dark:text-black" : "text-gray-400 dark:text-gray-600 group-hover:text-white dark:group-hover:text-black"}`}>
                          <Icon className="text-xl" />
                        </div>

                        {/* Active indicator - border bottom */}
                        {isActive && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white dark:bg-black rounded-full" layoutId="activeIndicator" initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.3 }} />}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Contact Info */}
                <div className="mt-8">
                  <div className="p-4 bg-black dark:bg-white rounded-xl border-2">
                    <div className="p-3">
                      <p className="font-medium text-gray-200 dark:text-gray-800 mb-2">Contact Info</p>
                      <div className="space-y-2 text-sm text-gray-400 dark:text-gray-600">
                        <div>
                          <p className="font-medium text-white dark:text-black">Phone:</p>
                          <span>+(84) 346 062 720</span>
                        </div>
                        <div>
                          <p className="font-medium text-white dark:text-black">Email:</p>
                          <span>quy073880@gmail.com</span>
                        </div>
                      </div>
                    </div>
                    <hr></hr>
                    <div className="p-3">
                      <p className="font-medium text-gray-200 dark:text-gray-800 mb-3">Social Media</p>
                      <div className="flex justify-between">
                        {socialLinks.map((social) => {
                          const SocialIcon = social.icon;
                          return (
                            <motion.a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center w-10 h-10 bg-black dark:bg-white rounded-xl transition-all duration-300 group hover:border-2 hover:border-white dark:hover:border-black ${social.color}`} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <SocialIcon className="text-white dark:text-black text-lg" />
                            </motion.a>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
