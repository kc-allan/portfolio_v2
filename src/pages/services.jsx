const Services = () => {
  return (
    <section id="services" className="px-4">
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-4xl font-bold">Services</h1>
        <div className="flex flex-col md:flex-row gap-10 mt-10">
          <div className="flex flex-col items-center">
            <img src={`${process.env.PUBLIC_URL}/assets/images/web-development.jpg`} alt="Service 1" />
            <h2 className="text-2xl font-semibold mt-5">Web Development</h2>
            <p className="text-center mt-5">
              Crafting modern, responsive websites that blend aesthetic appeal
              with robust functionality, ensuring a seamless user experience
              across all devices..
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={`${process.env.PUBLIC_URL}/assets/images/api.png`} alt="Service 2" />
            <h2 className="text-2xl font-semibold mt-5">
              API Development and Integration
            </h2>
            <p className="text-center mt-5">
              Designing and implementing efficient APIs to enable seamless
              communication between your applications, enhancing data exchange
              and workflow automation.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img src={`${process.env.PUBLIC_URL}/assets/images/consulting.jpg`} alt="Service 3" />
            <h2 className="text-2xl font-semibold mt-5">Software Consulting</h2>
            <p className="text-center mt-5">
              Providing expert advice and strategies to improve your software
              projects, leveraging industry best practices and cutting-edge
              technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
