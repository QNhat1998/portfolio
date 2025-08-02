import React from "react";
import Menu from "../components/Menu";
import FloatingMenu from "../components/FloatingMenu";
import HomeSection from "../sections/HomeSection";
import AboutSection from "../sections/AboutSection";
import SkillSection from "../sections/SkillSection";
import ContactSection from "../sections/ContactSection";
import ProjectSection from "../sections/ProjectSection";

export default function HomePage() {
  const handleMenuClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="bg-black dark:bg-white rounded-xl flex justify-between items-center">
        <img src="XQ.png" className="object-contain h-24 w-24" width={40} height={40} />
        <h1 className="lg:text-4xl text-2xl font-bold mb-4 text-white dark:text-black">Welcome to Portfolio</h1>
        <img src="XQ.png" className="object-contain h-24 w-24" width={40} height={40} />
      </div>
      <div className="relative w-full h-full">
        {/* Floating Menu - chỉ hiển thị trên mobile */}
        <div className="lg:hidden">
          <FloatingMenu />
        </div>

        {/* Menu cố định ở góc trái trên - chỉ hiển thị trên desktop */}
        <div className="hidden lg:block">
          <Menu />
        </div>

        {/* Content area với scroll */}
        <div className="w-full lg:ml-auto lg:w-[calc(100%-350px)] rounded-xl">
          <div className="flex flex-col gap-8 h-full overflow-y-auto">
            {/* Section Home */}
            <HomeSection id={"home"} />
            <AboutSection id={"about"} />
            <SkillSection id={"skill"} />
            <ProjectSection id={"project"} />
            <ContactSection id={"contact"} />
          </div>
        </div>
      </div>
    </div>
  );
}
