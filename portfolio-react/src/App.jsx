import Sidebar from './components/Sidebar';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Clients from './components/Clients';
import FAQ from './components/FAQ';
import Collaborate from './components/Collaborate';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#111] text-white">
      <div className="max-w-[1440px] mx-auto px-5 py-5 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-8">
          {/* Sidebar */}
          <div className="w-full lg:w-[344px] lg:shrink-0">
            <div className="lg:sticky lg:top-10">
              <Sidebar />
            </div>
          </div>

          {/* Main Content */}
          <main className="w-full lg:flex-1">
            <Intro />
            <Projects />
            <Clients />
            <FAQ />
            <Collaborate />
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;

