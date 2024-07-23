import TypingEffect from "./TypingEffect";
import { Twitter, GitHub, LinkedIn } from "@mui/icons-material";

const Hero = () => {
  return (
    <div
      id="hero"
      className="pt-36 flex flex-col md:flex-row w-full justify-center px-4"
    >
      <div className="md:w-1/2 mb-8 flex flex-col items-center text-center gap-8">
        <img
          className="h-[100px] w-[100px] rounded-full"
          src={`${process.env.PUBLIC_URL}/assets/images/face-card.jpeg`}
          alt=""
        />
        <div>
          <h2 className="font-bold text-2xl">Allan C. Kirui</h2>
          <p className="text-lg">
            Software Engineer | Cybersecurity Enthusiast
          </p>
          <div className="my-6 py-2 *:m-2">
            <a
              href="https://x.com/allannnoo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://github.com/kc-allan"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub />
            </a>
            <a
              href="https://www.linkedin.com/in/allan-cheruiyot-214b6923a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn />
            </a>
          </div>
            <a
              href={`${process.env.PUBLIC_URL}/assets/downloads/resume.pdf`}
              download
              className="bg-[#253551] inline-block mb-4 text-white p-4 rounded-lg text-sm font-semibold"
            >
              Download Resume
            </a>
        </div>
      </div>
      <div className="md:w-1/2 text-justify">
        <TypingEffect text={"About Me"} speed={300} />
        <div className="space-y-4">
          <p>
            Hey there! I’m Allan Cheruiyot Kirui, a software engineer with a
            passion for creating innovative solutions and a love for
            problem-solving.
          </p>
          <p>
            Based in Nairobi, Kenya, I’m a curious. I’ve honed my skills in
            various programming languages and frameworks. But beyond the code,
            I’m a dedicated learner and an avid explorer. I thrive on the
            excitement of new challenges, from developing groundbreaking
            software solutions to diving into the latest tech trends and events.
          </p>
          <p>
            In the long run, I aim to make significant strides in cybersecurity,
            protecting the digital world from threats and ensuring a safer
            online environment. My journey is driven by a passion for technology
            and a commitment to making a positive impact.
          </p>
          <p>
            Welcome to my portfolio. Let’s build the next big thing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
