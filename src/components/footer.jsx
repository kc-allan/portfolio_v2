import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="flex flex-col md:flex-row items-center justify-between md:px-16 px-4 py-8 text-white"
    >
      {/* Left section */}
      <div className="flex flex-col md:w-1/2 w-full items-center md:items-start text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-3xl font-bold mb-2">Allan Kirui</h1>
        <p className="mb-4">&copy; {currentYear} All Rights Reserved</p>
        <a
          href="https://calendly.com/kiruiallan"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition-colors duration-300 py-3 px-8 rounded-full font-semibold text-white"
        >
          Book a Consultation
        </a>
      </div>

      {/* Right section */}
      <div className="flex flex-col md:w-1/2 w-full items-center md:items-end space-y-4 text-center md:text-right">
        <h1 className="text-2xl font-semibold mb-4">Contact</h1>
        <div className="flex items-center space-x-4">
          <PhoneOutlined />
          <a href="tel:+254112391809" className="hover:underline">
            +254112391809
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <EmailOutlined />
          <a href="mailto:info@kiruiallan.tech" className="hover:underline">
            info@kiruiallan.tech
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
