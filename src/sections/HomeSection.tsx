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
    <section id={id} className="flex items-start justify-center p-14 bg-black dark:bg-white rounded-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center w-full gap-8">
        <div className="flex justify-center items-center order-1 md:order-2">
          <div
            className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 border-2 border-white dark:border-black rounded-full shadow-md dark:shadow-gray-200 aspect-auto"
            style={{
              backgroundImage: "url('./avatar/avatar1.png')",
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>
        <div className="flex flex-col gap-4 order-2 md:order-1">
          <h3 className="text-white dark:text-black">Hi there! 👋</h3>
          <h1 className="text-4xl text-white dark:text-black">Quy Nguyen</h1>
          <h3 className="text-gray-300 dark:text-gray-700 mt-5">Frontend Developer</h3>
          <div className="text-gray-400 dark:text-gray-600">I specialize in building beautiful and performant web interfaces. Passionate about clean code and responsive design.</div>

          {/* Download CV Button */}
          <button onClick={handleDownloadCV} className="group bg-black dark:bg-white border-2 border-white dark:border-black text-white dark:text-black px-6 py-3 rounded-full transition-all duration-300 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white w-fit mt-4 font-medium flex items-center gap-2">
            <span>Download CV</span>
          </button>
        </div>
      </div>
    </section>
  );
}
