import React, { useEffect } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ThankYouPage = () => {

      useEffect(() => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'conversion',
    });
  }, []);


  // Animation variants for the checkmark
  const checkmarkVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.5, ease: "easeInOut" },
        opacity: { duration: 0.01 }
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden">
        {/* Main Content */}
        <div className="p-4 sm:p-6 md:p-8 lg:p-12">
          <div className="text-center mb-6 sm:mb-8">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <motion.svg
                className="w-8 h-8 sm:w-10 sm:h-10 text-green-600"
                viewBox="0 0 24 24"
                initial="hidden"
                animate="visible"
              >
                <motion.path
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                  variants={checkmarkVariants}
                />
              </motion.svg>
            </div>
            <motion.h2 
              className="text-2xl sm:text-3xl font-bold text-gray-800 mb-1 sm:mb-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Thank You!
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-sm sm:text-base max-w-lg mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Your submission has been received. We appreciate your interest in our professional
              programs and will respond to your inquiry shortly.
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {/* Next Steps */}
            <div className="bg-blue-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-3 sm:mb-4">
                Next Steps
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base">
                    You'll receive a confirmation call within 24 hours
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base">
                    Our team will review your information
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-blue-100 text-blue-800 rounded-full p-1 mr-2 sm:mr-3 mt-0.5 flex-shrink-0">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 5l7 7-7 7M5 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                  <span className="text-sm sm:text-base">
                    We'll contact you to discuss program details
                  </span>
                </li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="bg-gray-50 p-4 sm:p-6 rounded-lg">
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">
                Contact Information
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <FaEnvelope className="text-blue-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base break-all">
                    info@sarojuniversity.edu.in
                  </span>
                </li>
                <li className="flex items-start">
                  <FaPhone className="text-blue-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">+91-9513731275</span>
                </li>
                <li className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-600 mr-2 sm:mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-sm sm:text-base">
                    12th Km Stone, Sultanpur Road, Near Purvanchal Expressway, 
                    Gosaiganj, Lucknow, Uttar Pradesh - 226022
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Back to Home Button */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            <Link
              to="/"
              className="inline-block px-5 py-2 sm:px-6 sm:py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200 text-sm sm:text-base"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>

        {/* Footer */}
        <div className="bg-gray-100 py-3 sm:py-4 px-4 sm:px-8 text-center text-gray-600 text-xs sm:text-sm">
          <p>© {new Date().getFullYear()} Saroj International University. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;