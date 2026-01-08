import { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm(
      'service_vf5sfz7',    // Service ID
      'template_2gf6q0k',   // Template ID
      e.target,
      'KdhRbOkQw5R5-d_vn'   // Public Key
    ).then(
      () => {
        alert('Gửi email thành công!');
        setFormData({ name: '', email: '', message: '' });
      },
      (error) => {
        alert('Lỗi: ' + JSON.stringify(error));
      }
    );
  };

  return (
    <section className="py-10 md:py-16 lg:py-20" id="contact-section">
      <h2 className="text-center mb-5 md:mb-8 text-3xl md:text-4xl lg:text-5xl xl:text-[58px] leading-tight">
        Let's Create <br /> Something <span className="text-[#a855f7]">Amazing</span>
      </h2>
      <form 
        className="mt-5 bg-[#1a1a1a] p-5 md:p-6 lg:p-8 rounded-[10px]"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-2 md:gap-2.5 mb-4">
          <label className="text-sm md:text-[0.9rem] font-medium">Name</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full bg-[#2a2a2a] border-none p-3 md:p-3.5 text-white text-sm md:text-base rounded-[5px] outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>
        
        <div className="flex flex-col gap-2 md:gap-2.5 mb-4">
          <label className="text-sm md:text-[0.9rem] font-medium">Email</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your.email@example.com"
            required
            className="w-full bg-[#2a2a2a] border-none p-3 md:p-3.5 text-white text-sm md:text-base rounded-[5px] outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>
        
        <div className="flex flex-col gap-2 md:gap-2.5 mb-4">
          <label className="text-sm md:text-[0.9rem] font-medium">Message</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your message..."
            required
            className="w-full bg-[#2a2a2a] border-none p-3 md:p-3.5 text-white text-sm md:text-base rounded-[5px] min-h-[120px] md:min-h-[150px] resize-none outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>
        
        <button 
          type="submit"
          className="w-full p-3 md:p-4 bg-[#a855f7] text-white text-base md:text-lg font-bold border-none rounded-[5px] cursor-pointer hover:bg-[#9333ea] transition-all hover:scale-[1.02] active:scale-[0.98]"
        >
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
