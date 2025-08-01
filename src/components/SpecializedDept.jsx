import React from 'react'
import { motion } from 'framer-motion'
import {
  CheckSquare,
  Hotel,
  Gavel,
  Film,
  GraduationCap,
  Briefcase,
  FlaskConical,
  Laptop,
} from "lucide-react";

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

export default function Department() {
  return (
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
  )
}
