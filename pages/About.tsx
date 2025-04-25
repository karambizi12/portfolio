{/* About Section */}
import Link from 'next/link'
const About = () => {
  return (
<section id="about" className="section bg-white dark:bg-slate-800">
  <div className="container">
    <h2 className="text-center mb-12 text-4xl font-bold">
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
            className="inline-flex items-center text-primary hover:text-cyan-600 font-medium"
          >
            Download Resume
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
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
                {group.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="bg-primary/10 text-primary dark:bg-primary/20 px-4 py-2 rounded-full text-sm font-medium flex items-center"
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
  );
}
export default About;