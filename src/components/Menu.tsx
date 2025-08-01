import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUserAlt, FaEnvelope } from "react-icons/fa";
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

export default function Menu() {
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
    <nav className="w-72 flex flex-col gap-4 fixed z-50">
      <div className="bg-white rounded-2xl shadow-lg p-4">
        <div className="flex flex-col space-y-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;

            return (
              <motion.button
                key={item.id}
                onClick={() => {
                  setActiveItem(item.id);
                  scrollToSection(item.sectionId);
                }}
                className={`relative flex items-center justify-between space-x-3 p-3 rounded-lg transition-all duration-300 group ${isActive ? "text-black" : "text-gray-700 hover:text-black "}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Label */}
                <span className={`font-medium transition-colors duration-300 ${isActive ? "text-black" : "text-gray-700 group-hover:text-black"}`}>{item.label}</span>

                {/* Icon */}
                <div className={`transition-colors duration-300 ${isActive ? "text-black" : "text-gray-600 group-hover:text-black"}`}>
                  <Icon className="text-xl" />
                </div>

                {/* Active indicator - border bottom */}
                {isActive && <motion.div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black rounded-full" layoutId="activeIndicator" initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ duration: 0.3 }} />}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-4">
        <div className="p-3">
          <p className="font-medium text-gray-800 mb-2">Contact Info</p>
          <div className="space-y-2 text-sm text-gray-600">
            <div>
              <p className="font-medium">Phone:</p>
              <span>+(84) 346 062 720</span>
            </div>
            <div>
              <p className="font-medium">Email:</p>
              <span>quy073880@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="p-3">
          <p className="font-medium text-gray-800 mb-3">Social Media</p>
          <div className="flex justify-between">
            {socialLinks.map((social) => {
              const SocialIcon = social.icon;
              return (
                <a key={social.id} href={social.url} target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center w-10 h-10 bg-white rounded-xl transition-all duration-300 group hover:border-2 hover:border-black ${social.color}`}>
                  <SocialIcon className="text-black text-lg" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
