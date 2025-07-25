import {
  CheckSquare,
  Hotel,
  Gavel,
  Film,
  Phone,
  Mail,
  ChevronRight,
  Check,
  GraduationCap,
  Users,
  Briefcase,
  FlaskConical,
  Microscope,
  Laptop,
  BookOpen,
  Scale,
  MapPin,
} from "lucide-react";
import { useEffect, useState } from "react";
import sarojLogo from "./assets/sarojLogo.png";
import { FileText, Upload, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Animation variants for RESEARCH SECTION starts
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3, // Delay before individual items start animating
      staggerChildren: 0.2, // Stagger the animation of each child item
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const hoverEffect = {
  scale: 1.05, // Scale up the card slightly on hover
  boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", // Add a subtle shadow
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 20,
  },
};

// Data for departments including programs offered
const departments = [
  {
    icon: <Laptop className="w-8 h-8 text-blue-600" />,
    title: "Engineering & Technology",
    institute: "Institute of Technology & Management",
    programs: ["B.Tech (CSE, ECE, ME, CE)", "M.Tech", "Diploma"],
  },
  {
    icon: <Briefcase className="w-8 h-8 text-green-600" />,
    title: "Management Studies",
    institute: "Institute of Management Studies",
    programs: ["MBA", "BBA", "PGDM"],
  },
  {
    icon: <Laptop className="w-8 h-8 text-indigo-600" />, // Using Laptop for Computer Applications as well
    title: "Computer Applications",
    institute: "Institute of Computer Applications",
    programs: ["BCA", "MCA", "DCA"],
  },
  {
    icon: <FlaskConical className="w-8 h-8 text-orange-600" />, // Changed color for variety
    title: "Sciences",
    institute: "Institute of Science & Technology",
    programs: ["B.Sc (PCS, PCM, CBZ)", "M.Sc", "B.Sc (Hons)"],
  },
  {
    icon: <Hotel className="w-8 h-8 text-pink-600" />, // New icon for Hotel Management
    title: "Hotel Management",
    institute: "Institute of Hotel Management",
    programs: ["BHMCT", "DHM", "Food Technology"],
  },
  {
    icon: <Gavel className="w-8 h-8 text-red-600" />, // New icon for Law
    title: "Law",
    institute: "Institute of Law",
    programs: ["BA LLB", "LLB", "LLM"],
  },
  {
    icon: <Film className="w-8 h-8 text-teal-600" />, // New icon for Media Studies
    title: "Media Studies",
    institute: "Institute of Media & Communication",
    programs: ["BJMC", "MJMC", "Digital Media"],
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-yellow-600" />, // New icon for Education
    title: "Education",
    institute: "Institute of Education",
    programs: ["B.Ed", "D.El.Ed", "M.Ed"],
  },
];

// Star particle effect for apply section background
const StarParticle = () => {
  const [x] = useState(Math.random() * 100);
  const [delay] = useState(Math.random() * 5);
  const [duration] = useState(Math.random() * 4 + 3); // Faster
  const [size] = useState(Math.random() * 8 + 7); // Larger

  // Multiple color options
  const colors = ["#FFD700", "#FFA500", "#FF6347", "#FF69B4"];
  const color = colors[Math.floor(Math.random() * colors.length)];

  return (
    <motion.div
      className="absolute pointer-events-none select-none"
      style={{
        left: `${x}%`,
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
        clipPath:
          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
        boxShadow: `0 0 ${size}px ${size / 2}px ${color}`,
      }}
      initial={{ y: -10, opacity: 0 }}
      animate={{
        y: "100vh",
        opacity: [0, 0.8, 0],
        rotate: 360, // Add rotation
      }}
      transition={{
        delay,
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

const App = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      if (
        document.querySelector(
          'script[src="https://widgets.in8.nopaperforms.com/emwgts.js"]'
        )
      ) {
        setScriptLoaded(true);
        return;
      }

      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widgets.in8.nopaperforms.com/emwgts.js";

      s.onload = () => {
        setScriptLoaded(true);
        setTimeout(() => {
          const widgetElement = document.querySelector(".npf_wgts");
          if (widgetElement && widgetElement.innerHTML.trim()) {
            setWidgetLoaded(true);
          }
        }, 1000);
      };

      s.onerror = () => console.error("Failed to load NoPaperForms script");
      document.body.appendChild(s);
    };

    loadScript();
  }, []);

  //APPLY SECTION state for start particles
  const [particles, setParticles] = useState([]);
  useEffect(() => {
    setParticles(Array.from({ length: 80 }, (_, i) => i));
  }, []);

  // Animation variants for the looping words
  const wordVariants = {
    enter: {
      opacity: 0,
      y: 20,
    },
    center: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.5,
        ease: "easeIn",
      },
    },
  };

  //drop in effect for hero section text
  const dropIn = {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 8.8,
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  const words = ["Educate...", "Empower...", "Excel..."];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    // Set up a timer to cycle through the words every 3 seconds
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2300); // 3 seconds delay

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className="font-sans text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="w-full md:mx-auto flex justify-center md:justify-start ">
            <img src={sarojLogo} alt="Saroj University Logo" className="h-12" />
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

      {/* Hero Section - Image and text */}
      {/* Hero Section - Image and text with form */}
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
            <div className="lg:w-1/2 text-white">
              <motion.div
                variants={dropIn}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5, ...dropIn.visible.transition }}
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
                    <span>NAAC Accredited</span>
                  </div>
                  <div className="flex items-center text-green-300">
                    <Check className="w-5 h-5 mr-2" />
                    <span>Industry Partnerships</span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:w-2/4 bg-sky-400/60 py-2 rounded-xl shadow-sm opacity-50 border "
            >
              <h3 className="text-2xl my-4 font-bold text-center text-white ">
                Admission Inquiry Form
              </h3>

              <div
                className="npf_wgts"
                data-height="500"
                data-width="80%"
                data-w="c4686ca3db50effadb9f24fc7ca22401"
              ></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Application Section */}
      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              How to Apply
            </h2>
            <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
              Follow these simple steps to begin your journey at Saroj
              International University
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-md border-l-4 border-blue-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="bg-blue-100 text-blue-600 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Online Application
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Fill out our online application form with your personal and
                academic details.
              </p>
              <button className="flex items-center text-blue-600 font-medium">
                Start Application <ChevronRight className="ml-1 w-5 h-5" />
              </button>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-md border-l-4 border-green-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="bg-green-100 text-green-600 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Document Submission
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Upload scanned copies of your academic transcripts and
                identification documents.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <FileText className="w-4 h-4 mr-2" />
                <span>PDF, JPG, or PNG formats</span>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-md border-l-4 border-purple-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 text-purple-600 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Application Review
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Our admissions team will review your application within 5-7
                working days.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Users className="w-4 h-4 mr-2" />
                <span>Expert evaluation</span>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-xl shadow-md border-l-4 border-yellow-500 hover:shadow-lg transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="bg-yellow-100 text-yellow-600 font-bold rounded-full w-10 h-10 flex items-center justify-center mr-4">
                  4
                </div>
                <h3 className="text-xl font-bold text-gray-800">
                  Admission Offer
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Successful applicants will receive an offer letter via email.
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Mail className="w-4 h-4 mr-2" />
                <span>Digital & physical copies</span>
              </div>
            </motion.div>
          </div>

          {/* Additional CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <p className="text-lg text-gray-600 mb-6">
              Have questions about the application process?
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-full shadow-md transition-all flex items-center mx-auto">
              <Phone className="w-5 h-5 mr-2" />
              Contact Admissions
            </button>
          </motion.div>
        </div>
      </section>

      {/* Research Excellence */}
      <section className="relative bg-gradient-to-br from-blue-900 to-violet-700 text-white py-20 px-4 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')]"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-light tracking-wider">
                RESEARCH EXCELLENCE
              </h3>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Join Our Pioneering <br /> Research Community
              </h2>
              <p className="text-lg text-blue-100 max-w-lg">
                At Saroj International University, we're shaping the future
                through groundbreaking discoveries.
              </p>
            </motion.div>

            {/* Right content */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20"
            >
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">
                  SAROJ RESEARCH INITIATIVES
                </h3>
                <p className="text-blue-100">
                  Recognized by the Ministry of Education for excellence in
                  Sustainable Energy and Environmental Research
                </p>
              </div>

              <div className="mb-6">
                <p className="text-blue-100">
                  Our faculty includes 12 Awardees and 65 Fellows of National
                  Academies.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="text-3xl font-bold mb-1">40K+</h4>
                  <p className="text-sm text-blue-100">
                    National Ranking for Patents
                  </p>
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold mb-1">Recognized by</h4>
                  <p className="text-sm text-blue-100">Government of India</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialized Departments */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Specialized Departments
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-24 h-1 bg-blue-600 mx-auto rounded-full"
            />
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" // Adjusted grid columns for more items
          >
            {departments.map((dept, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={hoverEffect}
                className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all shadow-md flex flex-col" // Added flex-col for better layout
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    className="w-12 h-12 bg-blue-100 rounded-full shadow-sm flex items-center justify-center mr-4" // Changed bg-white to bg-blue-100 for consistency
                  >
                    {dept.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">
                      {dept.title}
                    </h3>
                    <p className="text-sm text-gray-500">{dept.institute}</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm font-semibold text-gray-700 mb-2">
                    PROGRAMS OFFERED
                  </p>
                  <ul className="space-y-2">
                    {dept.programs.map((program, pIndex) => (
                      <li
                        key={pIndex}
                        className="flex items-center text-gray-600 text-sm"
                      >
                        <CheckSquare className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />{" "}
                        {/* Checkmark icon */}
                        {program}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-25 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">
              What Our Students Say
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Testimonial 1 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
            >
              <p className="text-purple-800 italic mb-4">
                "The faculty support for research projects with industry
                collaborations has been exceptional."
              </p>
              <p className="font-medium text-blue-900">Rahul Sharma</p>
              <p className="text-sm text-pink-600">
                B.Tech Computer Science, 2022
              </p>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
            >
              <p className="text-purple-800 italic mb-4">
                "Secured my dream job at a top IT company with the placement
                cell's guidance."
              </p>
              <p className="font-medium text-blue-900">Priya Patel</p>
              <p className="text-sm text-pink-600">MBA, 2021</p>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
            >
              <p className="text-purple-800 italic mb-4">
                "Published multiple research papers with guidance from our
                award-winning faculty."
              </p>
              <p className="font-medium text-blue-900">Arjun Mehta</p>
              <p className="text-sm text-pink-600">PhD Research, 2023</p>
            </motion.div>

            {/* Testimonial 4 */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-sm border border-blue-100"
            >
              <p className="text-purple-800 italic mb-4">
                "The patent support team helped me file 3 patents during my
                engineering program."
              </p>
              <p className="font-medium text-blue-900">Neha Gupta</p>
              <p className="text-sm text-pink-600">M.Tech, 2022</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-16 bg-gray-50 h-auto">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Our Hiring Partners
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading organizations that recruit Saroj University graduates
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 rounded-lg shadow-md border border-gray-200 ">
            {[
              { name: "TCS", logo: "/logos/tcs.png" },
              { name: "Infosys", logo: "/logos/infosys.png" },
              { name: "Wipro", logo: "/logos/wipro.png" },
              { name: "Amazon", logo: "/logos/amazon.png" },
              { name: "Microsoft", logo: "/logos/microsoft.png" },
              { name: "HCL", logo: "/logos/hcl.png" },
              { name: "", logo: "/logos/accenture.png" },
              { name: "", logo: "/logos/capgemini.png" },
              { name: "", logo: "/logos/deloitte.png" },
              { name: "", logo: "/logos/tech_mahindra.png" },
            ].map((company, index) => (
              <div
                key={index}
                className="bg-white p-4  flex items-center justify-center"
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-16 object-cover transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default App;
