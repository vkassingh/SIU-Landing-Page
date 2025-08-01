import { Facebook, Instagram, Linkedin, Phone, Mail } from "lucide-react";
import sarojLogo from "../assets/sarojLogo.png";

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="w-full md:mx-auto flex justify-center md:justify-start ">
          <img src={sarojLogo} alt="Saroj University Logo" className="h-12" />
        </div>

        {/* Social media icons */}
        <div className="hidden md:flex items-center space-x-4 mr-3">
          <a
            href="https://www.facebook.com/siulucknow"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Facebook className="w-4 h-4 text-gray-600" />
            </div>
          </a>
          <a
            href="https://www.instagram.com/siulucknow/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Instagram className="w-4 h-4 text-gray-600" />
            </div>
          </a>
          <a
            href="https://www.linkedin.com/company/siulucknow/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-500"
          >
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <Linkedin className="w-4 h-4 text-gray-600" />
            </div>
          </a>
        </div>

        {/* Contact Info */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
          <a
            href="tel:+919513731275"
            className="flex items-center text-gray-700 hover:text-blue-600"
          >
            <Phone className="w-5 h-5 mr-2" />
            <span>+919513731275</span>
          </a>
          <a
            href="mailto:info@sarojuniversity.edu.in"
            className="flex items-center text-gray-700 hover:text-blue-600"
          >
            <Mail className="w-5 h-5 mr-2" />
            <span>info@sarojuniversity.edu.in</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;