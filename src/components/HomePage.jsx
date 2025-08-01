import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ApplicationSection from "./ApplicationSection";
import Research from "./Research";
import Department from "./SpecializedDept";
import Testimonials from "./Testimonials";
import HiringPartner from "./HiringPartner";
import Footer from "./Footer";


const HomePage = () => {
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    setParticles(Array.from({ length: 80 }, (_, i) => i));
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Header />
      <HeroSection/>
      <ApplicationSection />
      <Research />
      < Department/>
      <Testimonials />
      <HiringPartner />
      <Footer />
    </div>
  );
};

export default HomePage;