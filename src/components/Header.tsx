import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import { FaBars, FaTimes } from 'react-icons/fa';
import { TfiClose } from "react-icons/tfi";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <motion.header 
      className={`fixed top-2 left-1/2 -translate-x-1/2 flex justify-between items-center ${
        isScrolled ? 'bg-[var(--background)]/75 text-[var(--text)] shadow-lg backdrop-blur' : 'bg-transparent/75 text-[var(--text)]'
      } z-50 mt-2 py-3 px-5 rounded-3xl sm:max-w-6xl max-w-[370px] w-full transition-colors duration-100 italic`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <a href="/">
        <h1 className="text-3xl sm:text-2xl font-bold ml-2 sm:ml-8 text-transparent bg-clip-text bg-gradient-to-b from-black via-black to-[var(--primary)]">
          Vendora
        </h1>
      </a>
      
      {/* Mobile menu button */}
      <div className="block lg:hidden">
        <button 
          onClick={toggleMobileMenu}
          className="text-[var(--text)] focus:outline-none"
        >
          {mobileMenuOpen ? 
          <TfiClose size={20} 
          className=" text-primary transition-transform transform rotate-180" /> : 
          <CiMenuFries size={28} 
          className=" text-primary transition-transform transform rotate-0" 
          />}
        </button>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex lg:-translate-x-100 space-x-6">
        <motion.a href="#about" className="hover:text-[var(--white)] rounded-lg px-2 py-1" whileHover={{ scale: 1.1 }}>About</motion.a>
        <motion.a href="#how-to" className="hover:text-[var(--white)] rounded-lg px-2 py-1" whileHover={{ scale: 1.1 }}>How To</motion.a>
        <motion.a href="#pricing" className="hover:text-[var(--white)] rounded-lg px-2 py-1" whileHover={{ scale: 1.1 }}>Pricing</motion.a>
        <motion.a href="#faqs" className="hover:text-[var(--white)] rounded-lg px-2 py-1" whileHover={{ scale: 1.1 }}>FAQs</motion.a>
      </nav>
      
      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-auto right-0 bg-[var(--background)]/90 backdrop-blur-md mt-2 rounded-xl shadow-lg py-4 px-4 text-center w-1/2">
          <div className="flex flex-col space-y-3">
            <a href="#about" className="hover:text-[var(--white)] py-2" onClick={toggleMobileMenu}>About</a>
            <a href="#how-to" className="hover:text-[var(--white)] py-2" onClick={toggleMobileMenu}>How To</a>
            <a href="#pricing" className="hover:text-[var(--white)] py-2" onClick={toggleMobileMenu}>Pricing</a>
            <a href="#faqs" className="hover:text-[var(--white)] py-2" onClick={toggleMobileMenu}>FAQs</a>
          
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;