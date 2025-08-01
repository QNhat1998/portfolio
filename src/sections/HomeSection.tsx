export interface HomeSectionProps {
  id: string;
}

export default function HomeSection({ id }: HomeSectionProps) {
  const handleDownloadCV = () => {
    // Tạo link download CV
    const link = document.createElement("a");
    link.href = "/path-to-your-cv.pdf"; // Thay đổi đường dẫn tới file CV của bạn
    link.download = "Quy-Nguyen-CV.pdf";
    link.click();
  };

  return (
    <section id={id} className="flex items-start justify-center p-14 bg-white rounded-xl">
      <div className="flex flex-wrap items-center justify-center w-full">
        <div className="flex-1 ">
          <div className="flex flex-col gap-4">
            <h3>Hi there! 👋</h3>
            <h1 className="text-4xl">Quy Nguyen</h1>
            <h3 className="text-gray-700 mt-5">Frontend Developer</h3>
            <div className="text-gray-600">I specialize in building beautiful and performant web interfaces. Passionate about clean code and responsive design.</div>

            {/* Download CV Button */}
            <button onClick={handleDownloadCV} className="group bg-white border-2 border-black text-black px-6 py-3 rounded-full transition-all duration-300 hover:bg-black hover:text-white w-fit mt-4 font-medium flex items-center gap-2">
              <span>Download CV</span>
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <div
            className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full shadow-md aspect-auto"
            style={{
              backgroundImage: "url('./avatar/avatar1.png')",
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
      </div>
    </section>
  );
}
