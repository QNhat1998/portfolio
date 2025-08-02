import { HomeSectionProps } from "./HomeSection";
import { Link } from "react-router-dom";
import { mockProjects } from "../project";

export default function ProjectSection({ id }: HomeSectionProps) {
  return (
    <section id={id} className="flex items-center justify-center bg-black dark:bg-white p-10 rounded-xl">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-white dark:text-black mb-4">My Projects</h2>
          <p className="text-gray-300 dark:text-gray-700 max-w-2xl mx-auto">Explore my latest work and creative solutions. Each project represents my passion for clean code and innovative design.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {mockProjects.map((project) => (
            <div key={project.id} className="bg-black dark:bg-white border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white dark:bg-black text-black dark:text-white text-xs font-medium rounded-full">{project.id === "food-ordering" ? "Full Stack" : project.id === "chat-app" ? "Real-time" : "E-commerce"}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white dark:text-black mb-2">{project.title}</h3>

                <p className="text-gray-300 dark:text-gray-600 text-sm mb-4 leading-relaxed">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-2 py-1 border border-gray-600 dark:border-gray-300 text-gray-300 dark:text-gray-600 text-xs rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white dark:bg-black text-black dark:text-white px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-200">
                      Live Demo
                    </a>
                  )}
                  <Link to={`/project/${project.id}`} className="flex-1 border border-gray-600 dark:border-gray-300 text-gray-300 dark:text-gray-600 px-4 py-2 rounded-lg text-sm font-medium text-center hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200">
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a href="https://github.com/sarah111-art" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-black dark:bg-white border-2 border-white dark:border-black text-white dark:text-black px-8 py-3 rounded-full transition-all duration-300 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white font-medium">
            <span>View More Projects</span>
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
