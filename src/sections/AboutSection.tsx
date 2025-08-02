import { HomeSectionProps } from "./HomeSection";

export default function AboutSection({ id }: HomeSectionProps) {
  return (
    <section id={id} className="flex items-center justify-center bg-black dark:bg-white p-10 rounded-xl">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white dark:text-black mb-4">About Me</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 flex-col-reverse">
          {/* Left Column - Profile Summary */}
          <div className="space-y-8 flex flex-col justify-between h-full">
            {/* Name and Title */}
            <div className="space-y-2 flex-1 flex flex-col justify-center">
              <p className="text-gray-400 dark:text-gray-600 text-sm">I'm</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-white dark:text-black">Quy Nguyen</h1>
            </div>

            {/* Statistics */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 border-2 border-dashed border-white dark:border-black rounded-lg animate-dash">
                <span className="text-2xl font-bold text-white dark:text-black">1⁺</span>
                <span className="text-gray-400 dark:text-gray-600 text-sm text-right">Years Of Exp.</span>
              </div>
              <div className="flex items-center justify-between p-4 border-2 border-dashed border-white dark:border-black rounded-lg animate-dash">
                <span className="text-2xl font-bold text-white dark:text-black">5⁺</span>
                <span className="text-gray-400 dark:text-gray-600 text-sm text-right">Projects Done</span>
              </div>
              <div className="flex items-center justify-between p-4 border-2 border-dashed border-white dark:border-black rounded-lg animate-dash">
                <span className="text-2xl font-bold text-white dark:text-black">100⁺</span>
                <span className="text-gray-400 dark:text-gray-600 text-sm text-right">Work Hours</span>
              </div>
            </div>
          </div>

          {/* Right Column - Detailed About */}
          <div className="space-y-6">
            {/* Introduction */}
            <div className="space-y-4">
              <p className="text-gray-300 dark:text-gray-700 leading-relaxed">
                Hello! I'm <span className="font-bold text-white dark:text-black">Quy</span>, a <span className="font-bold text-white dark:text-black">Frontend Developer</span> with over <span className="font-bold text-white dark:text-black">one year of experience</span>. I specialize in creating beautiful and performant web interfaces that deliver exceptional user experiences.
              </p>
              <p className="text-gray-300 dark:text-gray-700 leading-relaxed">
                Meanwhile, my journey into Back-end exploration inspires me, with <span className="font-bold text-white dark:text-black">Node.js, Express.js, JWT/bcrypt</span> for secure authentication, and databases like <span className="font-bold text-white dark:text-black">MongoDB, MySQL, SQL Server</span>. I am committed to clean code, profound performance optimization, flexible deployment via <span className="font-bold text-white dark:text-black">Vercel/Render/GitHub</span>, and pursuing advanced technology trends to turn ideas into superior realities.
              </p>
            </div>

            {/* Personal Details */}
            <div className="space-y-3 border border-dashed border-white dark:border-black rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400 dark:text-gray-600">Nationality:</span>
                <span className="font-bold text-white dark:text-black">Vietnam</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 dark:text-gray-600">Phone:</span>
                <span className="font-bold text-white dark:text-black">+84 346 062 720</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 dark:text-gray-600">Email:</span>
                <span className="font-bold text-white dark:text-black">quy073880@gmail.com</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 dark:text-gray-600">Freelance:</span>
                <span className="font-bold text-white dark:text-black">Available</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400 dark:text-gray-600">Language:</span>
                <span className="font-bold text-white dark:text-black">Vietnamese, English</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
