const Sidebar = () => {
  return (
    <aside className="bg-dark-sidebar p-5 rounded-2xl w-full">
      <div className="text-center flex flex-col items-center gap-6">
        <div className="w-full flex justify-center">
          <img 
            className="w-full max-w-[240px] rounded-xl object-cover" 
            src="/myavt.jpg"
            alt="Avatar" 
          />
        </div>
        <div className="flex flex-col items-center text-center gap-6 w-full">
          <div className="avatar-name">
            <h2 className="text-3xl md:text-4xl font-semibold">Hoàng Minh Đạt</h2>
            <p className="text-base md:text-lg mt-2">Fullstacks Developer</p>
            <p className="text-base md:text-lg">Quảng Trị , Việt Nam</p>
            <div className="mt-4 flex justify-center gap-3">
              <a href="https://www.facebook.com/edric.hmd" className="hover:opacity-80 transition-opacity">
                <img src="/facebook-svgrepo-com (1).svg" alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/_hwang.md.10/?hl=en" className="hover:opacity-80 transition-opacity">
                <img src="/instagram-svgrepo-com (1).svg" alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="mailto:minhdatskymtp@gmail.com" className="hover:opacity-80 transition-opacity">
                <img src="/email-svgrepo-com.svg" alt="Email" className="w-5 h-5" />
              </a>
              <a href="tel:+8438803551" className="hover:opacity-80 transition-opacity">
                <img src="/phone-call-svgrepo-com (1).svg" alt="Phone" className="w-5 h-5" />
              </a>
            </div>
          </div>
          <a href="#contact-section" className="w-full">
            <button className="bg-primary text-white rounded-xl w-full max-w-[180px] h-11 border-none cursor-pointer hover:bg-primary-dark transition-colors">
              Let's Talk
            </button>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
