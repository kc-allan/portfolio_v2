import { useState } from 'react';
import Header from '../components/header';
import Projects from './projects';
import Footer from '../components/footer';

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-200">
      <div className="lg:flex">
        <Header />
        
        {/* Add overflow-y-auto to enable scrolling on the main content area */}
        <main className="lg:w-2/3 lg:ml-auto lg:h-screen lg:overflow-y-auto">
          <div className="max-w-4xl mx-auto px-6 py-12">
            {/* Each section needs a proper id and min-height to ensure smooth scrolling */}
            <section id="about" className="min-h-screen py-16 lg:pt-24">
              <h2 className="text-3xl font-bold text-gray-200 mb-8">About Me</h2>
              <div className="space-y-6 text-gray-400">
                <p className="leading-relaxed">
                  Hey there! I'm Allan, a software engineer with a passion for creating
                  innovative solutions and a love for problem-solving.
                </p>
                
                <p className="leading-relaxed">
                  Based in Nairobi, Kenya, I'm a curious tech enthusiast. I've honed my
                  skills in various programming languages and frameworks. But beyond the
                  code, I'm a dedicated learner and an avid explorer.
                </p>

                <div className={`space-y-6 transition-all duration-300 ${
                  isExpanded ? 'opacity-100' : 'lg:opacity-100 opacity-0 h-0 lg:h-auto overflow-hidden'
                }`}>
                  <p className="leading-relaxed">
                    I thrive on the excitement of new challenges, from developing
                    groundbreaking software solutions to diving into the latest tech
                    trends and events.
                  </p>
                  
                  <p className="leading-relaxed">
                    In the long run, I aim to make significant strides in cybersecurity,
                    protecting the digital world from threats and ensuring a safer online
                    environment. My journey is driven by a passion for technology and a
                    commitment to making a positive impact.
                  </p>
                  
                  <p className="leading-relaxed">
                    Welcome to my portfolio. Let's build the next big thing!
                  </p>
                </div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="lg:hidden text-blue-400 hover:text-blue-500 font-medium transition-colors duration-300"
                >
                  {isExpanded ? 'Show Less' : 'Read More'}
                </button>
              </div>
            </section>

            {/* Projects section with proper id and spacing */}
            <section id="projects" className="min-h-screen py-16">
              <Projects />
            </section>

            {/* Contact section with proper id */}
            <section id="contact" className="min-h-screen py-16">
              <Footer />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;