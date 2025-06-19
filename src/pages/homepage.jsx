import { useState } from "react";
import Header from "../components/header";
import Projects from "./projects";
import Footer from "../components/footer";

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
            <section id="about" className="pb-8">
              <h2 className="text-3xl font-bold text-gray-200 mb-8">
                About Me
              </h2>
              <div className="space-y-6 text-gray-400">
                <p className="leading-relaxed">
                  Hey there, I'm Batman!...just kidding. I'm Allan, a software developer with a passion for
                  creating innovative solutions and a love for problem-solving.
                </p>

                <p className="leading-relaxed">
                  With 3+ years of experience, I've
                  honed my skills in various programming languages and
                  frameworks but beyond the code, I'm a continuous learner, an avid explorer and a lover of Caïssa's game.
                </p>

                <div
                  className={`space-y-6 transition-all duration-300 ${
                    isExpanded
                      ? "opacity-100"
                      : "lg:opacity-100 opacity-0 h-0 lg:h-auto overflow-hidden"
                  }`}
                >
                  <p className="leading-relaxed">
                    I thrive on the excitement of new challenges,
                    developing pet projects for the fun of bug hunting, indie-hacking real-world solutions, diving into
                    the latest tech events, hackathons and everything in between.
                  </p>

                  <p className="leading-relaxed">
                    In the long run, I aim to make significant strides in
                    software research and development as well as cybersecurity. My journey is driven by
                    my passion for tech and a commitment to making a
                    positive impact.
                  </p>

                  <p className="leading-relaxed">
                    Welcome to my portfolio. Let's build the next big thing!
                  </p>
                </div>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="lg:hidden text-blue-400 hover:text-blue-500 font-medium transition-colors duration-300"
                >
                  {isExpanded ? "Show Less" : "Read More"}
                </button>
              </div>
            </section>
            <Projects />
            <Footer />
          </div>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
