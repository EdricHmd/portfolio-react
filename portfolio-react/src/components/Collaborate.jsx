import { useEffect } from 'react';
import AOS from 'aos';

const Collaborate = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section data-aos="fade-up" className="py-10 md:py-16 lg:py-20">
      <div className="bg-[#1e1e1e] rounded-[20px] p-6 md:p-8 lg:p-10 relative">
        <div className="flex flex-col gap-3 md:gap-4 pr-12 md:pr-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight">
            Let's <span className="text-primary">Collaborate</span>
          </h2>
          <p className="text-base md:text-lg text-[#d9d9d9] leading-relaxed">
            Have a project in mind? Let's discuss how we can work together to bring your vision to life.
          </p>
        </div>
        <a href="#contact-section" className="absolute top-5 right-5 md:top-8 md:right-8">
          <div className="bg-[#b057ff] w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-full flex items-center justify-center cursor-pointer hover:bg-primary-dark transition-colors">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white" className="md:w-[34px] md:h-[34px]">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Collaborate;
