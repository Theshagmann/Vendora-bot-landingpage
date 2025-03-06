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
        <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div 
              className="col-span-1 sm:col-span-2 lg:col-span-1"
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img src="/api/placeholder/150/50" alt=" Vendora" className="mb-6" />
              <p className="mb-4">
                We're a team of passionate innovators dedicated to making online selling easy and accessible for everyone.
              </p>
              <div className="flex space-x-4 mb-6">
               
                <a href="#" className="hover:text-white transition-colors duration-300">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="hover:text-white transition-colors duration-300">
                  <FaInstagram size={20} />
                </a>
               
                <a href="#" className="hover:text-white transition-colors duration-300">
                  <FaYoutube size={20} />
                </a>
              </div>
            </motion.div>
            
            {/* Quick Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300">About Us</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300">How To</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300">Pricing</a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300">FAQs</a>
                </li>
              </ul>
            </motion.div>
            
            {/* Customer Service */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300">FAQ</a>
                </li>
               
                <li>
                  <a href="#" className="hover:text-white transition-colors duration-300">Help Center</a>
                </li>
              </ul>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.75, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-3 text-indigo-400" />
                  <span>S23U46 Inoyo Havens, Ogombo Road, Ajah, Lagos</span>
                </li>
                <li className="flex items-center">
                  <FaPhone className="mr-3 text-indigo-400" />
                  <span>+234 803 302 9314</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-3 text-indigo-400" />
                  <span>info@yourcompany.com</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
        
        {/* Bottom Footer - Copyright & Legal */}
        <motion.div 
          className="bg-gray-950 my-2 sm:my-4 py-2 sm:py-4 px-3 sm:px-6 mx-2 sm:mx-3 rounded-2xl sm:rounded-4xl"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="container text-center ">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0 text-center mx-auto md:text-center">
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
