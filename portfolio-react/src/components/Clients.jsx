import { useEffect } from "react";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Clients = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, Tech Company",
      image: "/client-avt.avif",
      text: "Working with Minh Đạt was an absolute pleasure. His attention to detail and technical expertise helped us launch our platform ahead of schedule.",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Product Manager",
      image: "/client-avt.avif",
      text: "Exceptional developer with great communication skills. Delivered a high-quality solution that exceeded our expectations.",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "Startup Founder",
      image: "/client-avt.avif",
      text: "His full-stack capabilities and problem-solving approach made our project a success. Highly recommend!",
    },
  ];

  return (
    <section data-aos="fade-up" className="py-10 md:py-16 lg:py-20 relative">
      <h2 className="mb-8 md:mb-12 lg:mb-16 text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight">
        What Clients Say <br /> About My{" "}
        <span className="text-primary">Work</span>
      </h2>

      <div className="relative max-w-2xl">
        <Swiper
          modules={[Navigation]}
        //   navigation={{
        //     nextEl: ".button-arrow-right",
        //     prevEl: ".button-arrow-left",
        //   }}
        navigation={false}
          loop
          speed={600}
          grabCursor
          centeredSlides={true}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 28,
            },
            1280: {
              slidesPerView: 1,
              spaceBetween: 32,
            },
          }}
          className="mySwiper pb-16 md:pb-0 opacity-50 scale-95 transition-all duration-300 swiper-slide-active:opacity-100 swiper-slide-active:scale-100"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-dark-card p-6 md:p-7 lg:p-8 rounded-xl md:rounded-2xl flex flex-col gap-4 md:gap-5 shadow-lg">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-gray-200">
                  {testimonial.text}
                </p>
                <div className="flex gap-3 md:gap-4 items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] object-cover rounded-full border-2 border-primary/20"
                  />
                  <div>
                    <h6 className="text-lg md:text-xl lg:text-2xl font-semibold">
                      {testimonial.name}
                    </h6>
                    <p className="text-sm md:text-base text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
