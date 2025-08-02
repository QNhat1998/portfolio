import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { mockProjects } from "../project";

export default function ProjectDetailPage() {
  const { projectId } = useParams();
  const project = mockProjects.find((p) => p.id === projectId);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen p-3 bg-black dark:bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white dark:text-black mb-4">Project Not Found</h1>
          <p className="text-gray-300 dark:text-gray-700 mb-8">The project you're looking for doesn't exist.</p>
          <Link to="/" className="bg-black dark:bg-white border-2 border-white dark:border-black text-white dark:text-black px-6 py-3 rounded-full transition-all duration-300 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white font-medium">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 bg-black dark:bg-white rounded-xl">
      {/* Header */}
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-600 mb-8 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </Link>

        <div className="max-w-6xl mx-auto">
          {/* Project Header */}
          <div className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white dark:text-black mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300 dark:text-gray-700 leading-relaxed max-w-4xl">{project.description}</p>
          </div>

          {/* Project Image */}
          <div className="mb-12">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img src={project.imageUrl} alt={project.title} className="w-full h-auto object-cover" />
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Project Info */}
            <div className="space-y-8">
              {/* Technologies */}
              <div>
                <h2 className="text-2xl font-bold text-white dark:text-black mb-4">Technologies Used</h2>
                <div className="flex flex-wrap gap-3">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="px-3 py-1 border border-gray-300 dark:border-gray-600 text-white dark:text-black text-sm rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Links */}
              <div>
                <h2 className="text-2xl font-bold text-white dark:text-black mb-4">Project Links</h2>
                <div className="space-y-4">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-black dark:bg-white border-2 border-white dark:border-black text-white dark:text-black px-6 py-4 rounded-lg text-center font-medium transition-all duration-300 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white">
                      View Live Demo
                    </a>
                  )}

                  {project.demoUrlAdmin && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-black dark:bg-white border-2 border-white dark:border-black text-white dark:text-black px-6 py-4 rounded-lg text-center font-medium transition-all duration-300 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white">
                      View Admin Dashboard
                    </a>
                  )}

                  {project.sourceCode && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="block w-full bg-black dark:bg-white border-2 border-white dark:border-black text-white dark:text-black px-6 py-4 rounded-lg text-center font-medium transition-all duration-300 hover:bg-white dark:hover:bg-black hover:text-black dark:hover:text-white">
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-8">
              {/* Login Credentials (if available) */}
              {project.username && project.pass && (
                <div className=" border border-gray-200 dark:border-gray-700 rounded-xl p-6">
                  <h2 className="text-2xl font-bold text-white dark:text-black mb-4">Demo Credentials</h2>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-white dark:text-black font-bold">Username:</span>
                      <p className="font-mono text-white dark:text-black">{project.username}</p>
                    </div>
                    <div>
                      <span className="text-sm text-white dark:text-black font-bold">Password:</span>
                      <p className="font-mono text-white dark:text-black">{project.pass}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Project Features */}
              <div>
                <h2 className="text-2xl font-bold text-white dark:text-black mb-4">Key Features</h2>
                <div className="space-y-3">
                  {project.id === "food-ordering" && (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300 dark:text-gray-700">User authentication and registration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300 dark:text-gray-700">Menu browsing and food ordering</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300 dark:text-gray-700">Payment integration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300 dark:text-gray-700">Order tracking and management</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300 dark:text-gray-700">Admin dashboard for restaurant management</span>
                      </div>
                    </>
                  )}

                  {project.id === "chat-app" && (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300 dark:text-gray-700">Real-time messaging</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300 dark:text-gray-700">User authentication</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300 dark:text-gray-700">Online/offline status</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300 dark:text-gray-700">Message history</span>
                      </div>
                    </>
                  )}

                  {project.id === "bonsai-ecommerce" && (
                    <>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300 dark:text-gray-700">Product catalog and search</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300 dark:text-gray-700">Shopping cart functionality</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300 dark:text-gray-700">Order management</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-300 dark:text-gray-700">Admin dashboard for inventory</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
