import { useState } from "react";
import Projects from "./projects";
import Footer from "../components/footer";

const HomePage = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="lg:overflow-y-scroll lg:p-8 p-4 lg:w-2/3 w-full lg:py-16">
      <h3 className="lg:hidden font-bold text-sm my-8">ABOUT</h3>
      <div id="about" className="space-y-4 text-gray-400 lg:p-8">
        <p>
          Hey there! I’m Allan, a software engineer with a passion for creating
          innovative solutions and a love for problem-solving.
        </p>
        <p>
          Based in Nairobi, Kenya, I’m a curious tech enthusiast. I’ve honed my
          skills in various programming languages and frameworks. But beyond the
          code, I’m a dedicated learner and an avid explorer.
        </p>

        {!isExpanded && (
          <div className="lg:hidden">
            <button
              onClick={toggleReadMore}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Read More
            </button>
          </div>
        )}

        {isExpanded && (
          <>
            <p>
              I thrive on the excitement of new challenges, from developing
              groundbreaking software solutions to diving into the latest tech
              trends and events.
            </p>
            <p>
              In the long run, I aim to make significant strides in
              cybersecurity, protecting the digital world from threats and
              ensuring a safer online environment. My journey is driven by a
              passion for technology and a commitment to making a positive
              impact.
            </p>
            <p>Welcome to my portfolio. Let’s build the next big thing!</p>

            <div className="lg:hidden">
              <button
                onClick={toggleReadMore}
                className="text-blue-500 hover:underline focus:outline-none"
              >
                Show Less
              </button>
            </div>
          </>
        )}

        <div className="hidden lg:block">
          <p>
            I thrive on the excitement of new challenges, from developing
            groundbreaking software solutions to diving into the latest tech
            trends and events.
          </p>
          <p>
            In the long run, I aim to make significant strides in cybersecurity,
            protecting the digital world from threats and ensuring a safer
            online environment. My journey is driven by a passion for
            technology and a commitment to making a positive impact.
          </p>
          <p>Welcome to my portfolio. Let’s build the next big thing!</p>
        </div>

        <Projects />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
