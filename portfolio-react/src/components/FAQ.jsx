import { useEffect, useState } from 'react';
import AOS from 'aos';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const faqs = [
    {
      id: 1,
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in React, Node.js, MongoDB, PostgreSQL, and modern web technologies. I have experience with both frontend and backend development.'
    },
    {
      id: 2,
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary depending on complexity. A simple website might take 2-4 weeks, while a full-stack application could take 2-3 months.'
    },
    {
      id: 3,
      question: 'Do you work with international clients?',
      answer: 'Yes, I work with clients globally. I am comfortable with remote communication and have experience collaborating across different time zones.'
    },
    {
      id: 4,
      question: 'What is your development process?',
      answer: 'I follow an agile approach with regular check-ins, using modern tools for version control and project management to ensure transparency and quality.'
    },
    {
      id: 5,
      question: 'Do you provide ongoing support?',
      answer: 'Yes, I offer maintenance and support packages after project completion to ensure your application runs smoothly.'
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section data-aos="flip-up" className="py-10 md:py-16 lg:py-20">
      <h2 className="mb-5 text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight">
        Frequently <br /> Asked <span className="text-primary">Questions</span>
      </h2>

      <div className="space-y-2.5 md:space-y-3">
        {faqs.map((faq, index) => (
          <div 
            key={faq.id} 
            className={`bg-dark-card rounded-lg overflow-hidden ${activeIndex === index ? 'active' : ''}`}
          >
            <div 
              className="flex justify-between items-center gap-4 p-4 md:p-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="text-white text-sm md:text-base font-medium">{faq.question}</div>
              <div className="w-5 h-5 flex-shrink-0">
                <svg 
                  className={`w-full h-full transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="white" 
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </div>
            </div>
            <div 
              className={`transition-all duration-300 px-4 md:px-5 ${
                activeIndex === index ? 'max-h-[500px] pb-4 md:pb-5' : 'max-h-0'
              } overflow-hidden`}
            >
              <p className="my-3 text-[#bbb] text-sm md:text-[0.95rem] leading-relaxed">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
