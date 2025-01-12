import { Mail, Phone, Calendar } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="pt-24 border-t border-gray-800">
      <div className="space-y-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
              Let's Connect
            </h2>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Whether you have a project in mind or just want to chat about technology,
              I'm always open to new opportunities and collaborations.
            </p>
            <a
              href="https://calendly.com/kiruiallan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors duration-300"
            >
              <Calendar size={18} />
              <span>Schedule a Consultation</span>
            </a>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-200">Contact Details</h3>
            <div className="space-y-4">
              <a
                href="tel:+254112391809"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Phone size={18} />
                <span>+254 112 391 809</span>
              </a>
              <a
                href="mailto:info@kiruiallan.me"
                className="flex items-center space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300"
              >
                <Mail size={18} />
                <span>info@kiruiallan.me</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <p className="text-gray-400">
            © {currentYear} Allan Kirui. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm mt-2 lg:mt-0">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;