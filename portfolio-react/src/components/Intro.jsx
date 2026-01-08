import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Intro = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section data-aos="flip-up" className="intro pb-10 md:pb-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[68px] font-bold leading-tight">
        Building Scalable Solutions from <span className="text-primary">Front to Back</span>
      </h1>
      <p className="text-base md:text-lg mt-4 leading-relaxed">
        Fullstack Developer passionate about designing seamless user
        experiences and powerful backend systems. Turning concepts into
        high-performance, production-ready applications.
      </p>
      <div className="grid grid-cols-3 gap-4 md:gap-8 mt-8">
        <div className="flex flex-col items-start">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-semibold">+8</div>
          <div className="uppercase text-xs md:text-sm lg:text-base mt-2">Years of <br />Development</div>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-semibold">+60</div>
          <div className="uppercase text-xs md:text-sm lg:text-base mt-2">Web & Mobile <br />Projects</div>
        </div>
        <div className="flex flex-col items-start">
          <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-semibold">+25</div>
          <div className="uppercase text-xs md:text-sm lg:text-base mt-2">Global <br />Clients</div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
