import React from "react";
import Menu from "../components/Menu";
import HomeSection from "../sections/HomeSection";
import AboutSection from "../sections/AboutSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-8">
      <div className="bg-white rounded-xl flex justify-between items-center">
        <img src="XQ.png" className="object-contain h-24 w-24" width={40} height={40} />
        <h1 className="text-4xl font-bold mb-4">Welcome to Portfolio</h1>
        <img src="XQ.png" className="object-contain h-24 w-24" width={40} height={40} />
      </div>
      <div className="relative w-full h-full">
        {/* Menu cố định ở góc trái trên */}

        <Menu />
        {/* Content area với scroll */}
        <div className="ml-auto w-[calc(100%-350px)] rounded-xl">
          <div className="flex flex-col gap-8 h-full overflow-y-auto">
            {/* Section Home */}
            <HomeSection id={"home"} />
            <AboutSection id={"about"} />

            {/* Section About */}
            <section id="about" className="min-h-screen flex items-center justify-center bg-gray-50">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">About</h2>
                <p className="text-lg text-gray-600">Thông tin về tôi</p>
              </div>
            </section>

            {/* Section Contact */}
            <section id="contact" className="min-h-screen flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Contact</h2>
                <p className="text-lg text-gray-600">Liên hệ với tôi</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
