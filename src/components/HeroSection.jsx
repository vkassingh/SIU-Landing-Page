import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";


// Animation variants
const dropIn = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
};

const wordVariants = {
  enter: {
    y: 20,
    opacity: 0,
  },
  center: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -20,
    opacity: 0,
  },
};

const HeroSection = () => {
  const navigate = useNavigate()
  const words = [
    "Innovative Learning",
    "Industry Exposure",
    "Global Opportunities",
    "Research Excellence",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    institute: "",
    course: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

 const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    

    try {
      navigate('/thank-you')
      const response = await fetch(
       import.meta.env.VITE_GOOGLE_SCRIPT_URL,
        {
          method: "POST",
           mode: "no-cors",
          body: JSON.stringify({
            name: formData.name,
            mobile: formData.mobile, 
            institute: formData.institute,
            course: formData.course,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

    setFormData({
      name: "",
      mobile: "",
      institute: "",
      course: "",
    });

    
  } catch (error) {
    console.error(error);
    toast.error("Error submitting form.");
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#4BB543",
            color: "#fff",
          },
          error: {
            style: {
              background: "#FF3333",
              color: "#fff",
            },
          },
        }}
      />

      <section className="relative w-full py-16 min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1496469888073-80de7e952517"
            alt="University Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply"></div>
        </div>

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Side - Text Content */}
            <div className="lg:w-1/2 text-white pr-6">
              <motion.div
                variants={dropIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-5xl font-extrabold">
                  SAROJ INTERNATIONAL UNIVERSITY
                </h1>

                <h2 className="text-2xl md:text-3xl font-medium text-blue-200">
                  India's Gateway to Next-Gen Education
                </h2>

                {/* Looping words */}
                <AnimatePresence mode="wait">
                  <motion.p
                    key={currentWordIndex}
                    variants={wordVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl font-semibold text-yellow-300"
                  >
                    {words[currentWordIndex]}
                  </motion.p>
                </AnimatePresence>

                <p className="text-lg text-blue-100">
                  Offering world-class education with state-of-the-art
                  facilities and industry-aligned programs.
                </p>

                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center text-green-300">
                    <Check className="w-5 h-5 mr-2" />
                    <span>UGC Recognized</span>
                  </div>
                  <div className="flex items-center text-green-300">
                    <Check className="w-5 h-5 mr-2" />
                    <span>AICTE Approved</span>
                  </div>
                  <div className="flex items-center text-green-300">
                    <Check className="w-5 h-5 mr-2" />
                    <span>Industry Partnerships</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Custom Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-1/3 bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl mb-6 font-bold text-center text-blue-800">
                Admission Inquiry Form
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your full name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="mobile"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Mobile Number *
        </label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your mobile number"
          value={formData.mobile}
          onChange={handleChange}
        />
      </div>

      <div>
        <label
          htmlFor="institute"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Select Institute *
        </label>
        <select
          id="institute"
          name="institute"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.institute}
          onChange={handleChange}
        >
          <option value="">Select Institute *</option>
          <option value="Saroj Institute of Agriculture Science">
            Saroj Institute of Agriculture Science
          </option>
          <option value="SAROJ INSTITUTE OF ARTIFICIAL INTELLIGENCE">
            SAROJ INSTITUTE OF ARTIFICIAL INTELLIGENCE
          </option>
          <option value="SAROJ INSTITUTE OF MANAGEMENT AND TECHNOLOGY">
            SAROJ INSTITUTE OF MANAGEMENT AND TECHNOLOGY
          </option>
          <option value="SAROJ INSTITUTE OF BASIC AND HEALTH SCIENCES">
            SAROJ INSTITUTE OF BASIC AND HEALTH SCIENCES
          </option>
          <option value="SAROJ INSTITUTE OF HUMANITIES AND EDUCATION">
            SAROJ INSTITUTE OF HUMANITIES AND EDUCATION
          </option>
          <option value="SAROJ INSTITUTE OF SPORTS SCIENCE AND RESEARCH">
            SAROJ INSTITUTE OF SPORTS SCIENCE AND RESEARCH
          </option>
          <option value="SAROJ INSTITUTE OF ENTREPRENEURSHIP AND BUSINESS">
            SAROJ INSTITUTE OF ENTREPRENEURSHIP AND BUSINESS
          </option>
          <option value="SAROJ INSTITUTE OF FILM AND FASHION">
            SAROJ INSTITUTE OF FILM AND FASHION
          </option>
          <option value="LIP">LUCKNOW INSTITUTE OF PHARMACY</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="course"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Course Interested In *
        </label>
        <select
          id="course"
          name="course"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          value={formData.course}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          <option value="B.Tech">B.Tech</option>
          <option value="M.Tech">M.Tech</option>
          <option value="BCA">BCA</option>
          <option value="MCA">MCA</option>
          <option value="BBA">BBA</option>
          <option value="MBA">MBA</option>
          <option value="B.Pharma">B.Pharma</option>
          <option value="D.Pharma">D.Pharma</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300 font-medium"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </button>
    </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
