import { useEffect } from 'react';
import AOS from 'aos';

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const projects = [
    {
      id: 1,
      image: '/project-revo.avif',
      title: 'MindFlow',
      tech: 'Html css javascript'
    },
    {
      id: 2,
      image: '/project-najmal.avif',
      title: 'E-commerce Platform',
      tech: 'React, Node.js, MongoDB'
    },
    {
      id: 3,
      image: '/project-stabraq.avif',
      title: 'Task Management App',
      tech: 'React Native, Firebase'
    },
    {
      id: 4,
      image: '/project-taskal.avif',
      title: 'Portfolio Website',
      tech: 'Next.js, Tailwind CSS'
    }
  ];

  return (
    <section data-aos="fade-up" className="py-10 md:py-16 lg:py-20">
      <h2 className="mb-5 text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight">
        Recent Projects <br /> and <span className="text-primary">Achievements</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
        {projects.map((project) => (
          <div key={project.id} className="bg-dark-card rounded-[20px] overflow-hidden hover:transform hover:scale-105 transition-transform">
            <img 
              src={project.image} 
              alt={project.title}
              className="rounded-t-[20px] h-[200px] md:h-[220px] w-full object-cover"
            />
            <div className="p-4 md:p-5 flex flex-col gap-2">
              <h3 className="text-xl md:text-2xl lg:text-[28px] font-semibold">{project.title}</h3>
              <p className="text-sm md:text-base text-gray-400">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
