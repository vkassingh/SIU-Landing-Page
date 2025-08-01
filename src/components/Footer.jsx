import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <img
              src="/favicon.png"
              alt="Saroj University Logo"
              className="h-12"
            />
            <h3 className="text-xl font-bold">Saroj University</h3>
          </div>
          <p className="text-gray-400">
            Empowering students through quality education and
            industry-relevant skills since 2005.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
          <div className="space-y-3 text-gray-400">
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              <a href="tel:+919513731275">+91-9513731275</a>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              <span>info@sarojuniversity.edu.in</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-10 h-10 mr-2" />
              <span>
                12th Km Stone, Sultanpur Road, Near Purvanchal Expressway,
                Gosaiganj, Lucknow, Uttar Pradesh - 226022
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-8 mt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Saroj University. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;