import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.header 
      className={`fixed top-2 left-1/2  -translate-x-1/2 flex justify-between items-center ${isScrolled ? 'bg-[var(--background)]/75 text-[var(--text)] shadow-lg backdrop-blur' : 'bg-transparent/75 text-[var(--text)]'} z-50 mt-2 py-3 rounded-4xl max-w-6xl w-full px-4 transition-colors duration-100 italic`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <h1 className="text-2xl font-bold ml-8 text-transparent bg-clip-text bg-gradient-to-b from-black via-black to-[var(--primary)]">
        Vendora
      </h1>
      <nav className="space-x-6">
        <motion.a href="#about" className="hover:text-[var(--white)] rounded-lg px-2 py-1" whileHover={{ scale: 1.1 }}>About</motion.a>
        <motion.a href="#how-to" className="hover:text-[var(--white)] rounded-lg px-2 py-1" whileHover={{ scale: 1.1 }}>How To</motion.a>
        <motion.a href="#pricing" className="hover:text-[var(--white)] rounded-lg px-2 py-1" whileHover={{ scale: 1.1 }}>Pricing</motion.a>
        <motion.a href="#faqs" className="hover:text-[var(--white)] rounded-lg px-2 py-1" whileHover={{ scale: 1.1 }}>FAQs</motion.a>
      </nav>
      <motion.button className="bg-[var(--primary)]/40 px-4 py-2 rounded-2xl mr-8" whileHover={{ scale: 1.1 }}>
        Sign In!
      </motion.button>
    </motion.header>
  );
};

export default Header;
