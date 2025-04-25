import Link from 'next/link';
import { FiDownload, FiArrowRight } from 'react-icons/fi';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500"> KARAMBIZI Deo</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-slate-600 dark:text-slate-300 font-medium">
                Full Stack Developer & UI/UX designer
              </h2>
              <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 leading-relaxed">
                I create beautiful, functional websites and web applications with modern technologies.
                Focused on delivering exceptional user experiences, so i'm able to help you with your project
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#projects"
                  className="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300 flex items-center gap-2"
                >
                  View My business <FiArrowRight />
                </Link>
                <Link
                  href="#contact"
                  className="px-6 py-3 bg-white dark:bg-slate-700 text-slate-800 dark:text-white rounded-lg font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  Contact Me i want to work with you
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center relative">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-gradient-to-br from-primary to-cyan-500 rounded-full flex items-center justify-center text-white text-8xl font-bold shadow-xl">
                <img src="images/deo.jpg" alt="no photo" className='rounded-full' />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-accent text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium">
                Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">Who I Am</h3>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                I'm a passionate full-stack developer with 5+ years of experience building scalable web applications. 
                I specialize in modern JavaScript frameworks and have a keen eye for design.
              </p>
              <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                My approach combines technical expertise with creative problem-solving to deliver 
                solutions that are both functional and delightful to use.
              </p>
              <div className="pt-4">
                <Link
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center text-primary hover:text-cyan-600 font-medium transition-colors duration-300"
                >
                  Download Resume <FiDownload className="ml-2" />
                </Link>
              </div>
            </div>
            <div className="bg-slate-100 dark:bg-slate-700 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 text-primary">My Skills</h3>
              <div className="space-y-6">
                {[
                  { category: 'Frontend', skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
                  { category: 'Backend', skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
                  { category: 'Tools', skills: ['Git', 'Docker', 'AWS', 'Figma'] }
                ].map((group) => (
                  <div key={group.category}>
                    <h4 className="text-lg font-medium mb-3 text-slate-800 dark:text-slate-200">
                      {group.category}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="bg-primary/10 text-primary dark:bg-primary/20 px-4 py-2 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            My <span className="text-primary">Business</span>
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
                link: "#",
                img: "images/deo.jpg"
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
                    {project.tags.map((tag) => (
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
                    className="text-primary font-medium inline-flex items-center hover:text-cyan-600 transition-colors duration-300"
                  >
                    View Project
                    <FiArrowRight className="ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>







          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors duration-300"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
            Ask for  <span className="text-primary">your problem</span>
          </h2>
          <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 sm:p-12">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-slate-700 dark:text-white"
                    placeholder="write your name here"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-slate-700 dark:text-white"
                    placeholder="karambizideo12@gmail.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-slate-700 dark:text-white"
                  placeholder="Let me know how I can help you"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-slate-700 dark:text-white"
                  placeholder="Hi you i'm ready to help you with your project "
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-primary text-white rounded-lg text-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
              >
                Send me your Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}