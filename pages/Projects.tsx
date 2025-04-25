{/* Projects Section */}
import Link from 'next/link'
const Projects = () => {
  return (
<section id="projects" className="section bg-slate-50 dark:bg-slate-900">
  <div className="container">
    <h2 className="text-center mb-12 text-4xl font-bold">
      My <span className="text-primary">Projects</span>
    </h2>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "E-commerce Platform",
          description: "Full-featured online store with payment integration",
          tags: ["React", "Node.js", "MongoDB"],
          link: "#"
        },
        {
          title: "Portfolio Website",
          description: "Custom portfolio for a creative professional",
          tags: ["Next.js", "Tailwind CSS"],
          link: "#"
        },
        {
          title: "Task Management App",
          description: "Productivity app with real-time collaboration",
          tags: ["React", "Firebase"],
          link: "#"
        }
      ].map((project, index) => (
        <div 
          key={index} 
          className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
        >
          <div className="h-48 bg-gradient-to-r from-primary to-cyan-500 flex items-center justify-center">
            <span className="text-white text-4xl font-bold">{project.title.charAt(0)}</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <Link 
              href={project.link} 
              className="text-primary font-medium inline-flex items-center hover:text-cyan-600"
            >
              View Project
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-12">
      <Link 
        href="/projects" 
        className="btn btn-primary px-8 py-3 text-lg hover:shadow-lg hover:-translate-y-1 transition-all"
      >
        View All Projects
      </Link>
    </div>
  </div>
</section>
  );
}