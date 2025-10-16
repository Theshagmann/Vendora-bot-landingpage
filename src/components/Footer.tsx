import { FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-l text-gray-300">
      <motion.div 
        className='contain bg-gray-900 py-2 mx-1 sm:mx-2 my-2 rounded-2xl sm:rounded-4xl'
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
        viewport={{ once: true }}
      >
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 sm:px-4 py-6 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
            {/* Company Info */}
            <motion.div 
              className="col-span-1 sm:col-span-2 lg:col-span-1 text-center sm:text-left"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className=' flex  gap-2'>
              <img src="/src/assets/Pictures/tele11.png" alt="" className="mb-4 sm:mb-6 mx-auto sm:mx-0" />
              <p>VENDORA</p>
              </div>
              <p className="mb-4 text-sm sm:text-base leading-relaxed">
                We're a team of passionate innovators dedicated to making online selling easy and accessible for everyone.
              </p>
              <div className="flex justify-center sm:justify-start space-x-4 mb-4 sm:mb-6">
                <a href="#" className="hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full">
                  <FaTwitter size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="https://www.instagram.com/vendorahq?igsh=bjlkN25lemdydGJt" className="hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full">
                  <FaInstagram size={18} className="sm:w-5 sm:h-5" />
                </a>
                <a href="https://youtube.com/@vendorahq?si=sdFWTlumjh40ApsD" className="hover:text-white transition-colors duration-300 p-2 hover:bg-gray-800 rounded-full">
                  <FaYoutube size={18} className="sm:w-5 sm:h-5" />
                </a>
              </div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div
              className="text-center sm:text-left"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <a href="#about" className="hover:text-white transition-colors duration-300 py-1 block">About Us</a>
                </li>
                <li>
                  <a href="#how-to" className="hover:text-white transition-colors duration-300 py-1 block">How To</a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-white transition-colors duration-300 py-1 block">Pricing</a>
                </li>
                <li>
                  <a href="#faqs" className="hover:text-white transition-colors duration-300 py-1 block">FAQs</a>
                </li>
              </ul>
            </motion.div>
            
            {/* Customer Service */}
            <motion.div
              className="text-center sm:text-left"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Customer Service</h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <a href="https://t.me/vendorahq" className="hover:text-white transition-colors duration-300 py-1 block">Help Center</a>
                </li>
              </ul>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              className="text-center sm:text-left"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm sm:text-base">
                <li className="flex items-start justify-center sm:justify-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-indigo-400 flex-shrink-0" size={14} />
                  <span className="text-left">S23U46 Inoyo Havens, Ogombo Road, Ajah, Lagos</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start">
                  <FaPhone className="mr-3 text-indigo-400 flex-shrink-0" size={14} />
                  <a href="tel:+2349124405859" className="hover:text-white transition-colors duration-300">
                    +234 912 440 5859
                  </a>
                </li>
                <li className="flex items-center justify-center sm:justify-start">
                  <FaEnvelope className="mr-3 text-indigo-400 flex-shrink-0" size={14} />
                  <a href="mailto:vendorahq@gmail.com" className="hover:text-white transition-colors duration-300">
                    vendorahq@gmail.com
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Footer - Copyright & Legal */}
        <motion.div 
          className="bg-gray-950 my-2 sm:my-4 py-3 sm:py-4 px-4 sm:px-6 mx-2 sm:mx-3 rounded-2xl sm:rounded-4xl"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="container text-center">
            <div className="flex flex-col md:flex-row justify-center md:justify-between items-center">
              <div className="mb-0 text-center mx-auto text-sm sm:text-base">
                <p>&copy; {currentYear} VENDORA. All rights reserved.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;