import { EmailOutlined, PhoneOutlined } from "@mui/icons-material";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      id="contact"
      className="flex md:flex-row flex-col text-center items-center md:px-8 px-2 py-4"
    >
      <div className="flex flex-col md:w-3/4 w-full items-center justify-center mb-4">
        <h1 className="hidden md:block text-2xl font-semibold">Allan Kirui</h1>
        <p>&copy; {currentYear} All Rights Reserved</p>
        <a
          href="https://www.upwork.com/freelancers/~01353b004ba45b9a74?mp_source=share"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 py-4 px-8 rounded-full m-2 bg-blue-900 font-bold text-white"
        >
          Book
        </a>
      </div>
      <div className="space-y-2 lg:text-left w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Contact</h1>
        <div className="space-x-4">
          <PhoneOutlined />
          &nbsp;
          <a href="tel:+254112391809">+254112391809</a>
        </div>
        <div className="space-x-4">
          <EmailOutlined />
          <a href="mailto:info@kiruiallan.tech">info@kiruiallan.tech</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
