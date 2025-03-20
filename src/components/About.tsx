import { FaCreditCard, FaChartLine, FaCog, FaClipboardList, FaUserFriends } from 'react-icons/fa';
import { motion } from 'framer-motion';
import '../styles/flip-card.css';
import YoutubeEmbed from './YoutubeEmbed';

const AboutPage = () => {
  return (
    <div className="bg-gradient-to-l " id='about'>
      {/* Hero Section */}
      <motion.section 
        className="container relative mx-2 sm:mx-7 inset-2 rounded-3xl bg-gradient-to-t from-[var(--white)]/30 to-[var(--secondary)]/30 text-white py-10 sm:py-20 px-4 sm:px-15"
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.95, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container relative mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div>
              <motion.h1 
                className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-b from-black via-black to-[var(--primary)] mb-2 text-left leading-tight italic"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.95, delay: 0.7 }}
                viewport={{ once: true }}
              >
                About Vendora
              </motion.h1>
              <motion.p 
                className="text-sm sm:text-xl font-bold text-[var(--text)] text-justify text-left leading-tight opacity-90 mb-8"
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.95, delay: 0.9 }}
                viewport={{ once: true }}
              >
                Our platform enables you to easily create an online store within your Telegram bot, offering seamless shopping experience for your customers. Manage your products, track orders, and process payments, all from the convenience of your favourite messaging app.
              </motion.p>
              <motion.button 
                className="bg-[var(--secondary)] text-[var(--text)] px-6 py-3 rounded-3xl hover:bg-[var(--accent)] italic font-medium"
                whileHover={{ scale: 1.1 }}
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.95, delay: 1.1 }}
                viewport={{ once: true }}
              >
                Get Started!
              </motion.button>
            </div>
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-300 rounded-full opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16" style={{ clipPath: 'polygon(0 100%, 100% 100%, 0 0)' }}></div>
      </motion.section>

      {/* Values Section */}
      <motion.section 
        className="py-20"
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.95, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-2xl text-center border-2 mx-auto rounded-lg shadow-lg max-w-fit mb-2">•Everything You Need•</h2>
          <p className="text-gray-600 max-w-lg mx-auto text-center font-bold text-lg mb-10">
              Basic features we offer to make your online selling simple and efficient 
            </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            <div className="grid md:grid-rows-2 bg-shadow-xl rounded-3xl gap-8 h-120">
              {[
                {
                  icon: <FaCreditCard className="text-green-500" size={32} />,
                  title: "Multi-Payment Options",
                  description: "Offer your customers multiple payment options for a seamless checkout experience.",
                  backContent: "Support for popular payment methods including credit cards, PayPal, and cryptocurrency. Secure payment processing with end-to-end encryption."
                },
                {
                  icon: <FaChartLine className="text-blue-500" size={32} />,
                  title: "Real-Time Analytics",
                  description: "Get real-time insights into your sales and customer behavior.",
                  backContent: "Track sales trends, customer preferences, and inventory levels. Make data-driven decisions with detailed reports and visualizations."
                }
              ].map((value, index) => (
                <motion.div 
                  key={index} 
                  className="group bg-gray-50 rounded-2xl h-full perspective-1000"
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.95, delay: 0.7 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-full h-full transition-all duration-500 transform-style-3d group-hover:rotate-y-180">
                    {/* Front side */}
                    <div className="card-front absolute w-full h-full p-8 shadow-lg rounded-2xl backface-hidden">
                      <div className="flex items-center mb-4">
                        {value.icon}
                        <h3 className="text-xl font-semibold ml-3">{value.title}</h3>
                      </div>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                    {/* Back side */}
                    <div className="card-back w-full h-full p-8 shadow-lg rounded-2xl backface-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <p className="text-gray-700 font-medium">{value.backContent}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            {/* Middle grid item - Easy Setup */}
            <motion.div 
              className="h-full flex flex-col gap-4 bg-gray-50 shadow-lg rounded-2xl p-8 hover:shadow-2xl"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.95, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-4">
                <FaCog className="text-green-500" size={32} />
                <h3 className='text-xl font-semibold ml-3'>Easy Setup</h3>
              </div>
              <div className='relative w-full h-[calc(100%-4rem)] rounded-lg overflow-hidden'>
                <YoutubeEmbed embedId="YOUR_SETUP_VIDEO_ID" />
              </div>
            </motion.div>
            <div className="grid md:grid-rows-2 bg-shadow-2xl rounded-3xl gap-8 h-120 ">
              {[
                {
                  icon: <FaClipboardList className="text-yellow-500" size={32} />,
                  title: "Flexible Subscriptions",
                  description: "Choose from a variety of subscription plans to suit your business needs.",
                  backContent: "Monthly and annual plans available. Scale your business with premium features and priority support. Cancel or upgrade anytime."
                },
                {
                  icon: <FaUserFriends className="text-purple-500" size={32} />,
                  title: "Community",
                  description: (
                    <div>
                      <p className="text-gray-600 mb-4">Join a community of vendors and customers for support and growth.</p>
                    </div>
                  ),
                  backContent: (
                    <div className="flex flex-col h-full justify-between">
                      <p className="text-gray-700 font-medium mb-4">Connect with successful vendors, share experiences, and learn best practices. Access exclusive webinars and training materials.</p>
                      <a href="#" className="text-purple-500 font-medium hover:text-purple-600 flex items-center gap-2 mt-auto">
                        Join Community
                        <span className="text-lg">→</span>
                      </a>
                    </div>
                  )
                }
              ].map((value, index) => (
                <motion.div 
                  key={index} 
                  className="group bg-gray-50 rounded-2xl h-full perspective-1000"
                  initial={{ y: -20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.95, delay: 0.7 + index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="relative w-full h-full transition-all duration-500 transform-style-3d group-hover:rotate-y-180">
                    {/* Front side */}
                    <div className="card-front absolute w-full h-full p-8 shadow-lg rounded-2xl backface-hidden">
                      <div className="flex items-center mb-4">
                        {value.icon}
                        <h3 className="text-xl font-semibold ml-3">{value.title}</h3>
                      </div>
                      {value.description}
                    </div>
                    {/* Back side */}
                    <div className="card-back w-full h-full p-8 shadow-lg rounded-2xl backface-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                      <p className="text-gray-700 font-medium">{value.backContent}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        className="py-20 bg-gradient-to-l"
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.95, delay: 0.5 }}
        viewport={{ once: true }}
        id='how-to'
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl border-2 mx-auto rounded-lg shadow-lg max-w-fit mb-4">•How To•</h2>
            <p className="text-gray-600 max-w-lg mx-auto text-center font-bold text-lg mb-8">
              Quick demonstration of how to setup your bot
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <YoutubeEmbed embedId="YOUR_YOUTUBE_VIDEO_ID" />
          </div>
        </div>
      </motion.section>

      {/* Journey Timeline */}
      <motion.section 
        className="py-20"
        initial={{ y: -10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.95, delay: 0.5 }}
        viewport={{ once: true }}
        id='pricing'
      >
        <div className=" mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-black via-black to-[var(--primary)] leading-tight italic mb-2">Pricing</h2>
          <p className='text-gray-600 max-w-lg mx-auto text-center font-bold text-lg mb-10 '>Forever Free. Upgrade for NO transaction fees, analytics and other exclusive features.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <motion.div 
              className="h-130 w-100 mx-51 flex flex-col gap-4 bg-gray-50 shadow-lg rounded-2xl p-8 hover:shadow-2xl bg-gradient-to-t from-[var(--primary)]/20 to-[var(--white)]/50"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.95, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <p className='text-xl font-semibold mb-3'>Free</p>
              <div className="flex mx-auto">
                <p className=" text-xl font-semibold ">$</p>
                <p className=" text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-black via-black/60 to-[var(--primary)]/40 leading-tight italic ">0.00</p>
                <p className="text-xl font-semibold py-8">/mo</p>
              </div>
              <div className='text-left'>
                <p className=" text-xl font-semibold mx-auto ">Perfect for beginners</p>
                <p className=" text-xl font-semibold mx-auto "> • Up to 7 products upload</p>
                <p className='text-xl font-semibold mx-auto '>• Inventory Tracking </p>
                <p className='text-xl font-semibold mx-auto '>• Order Management </p>
                <p className='text-xl w-full text-sm font-semibold mx-auto '>• 4% commission on any transaction</p>
                <p className='text-xl font-semibold mx-auto '>• Unlimited sales </p>
              </div>
              <button className='my-18 flex bg-gradient-to-tl from-[var(--primary)]/50 to-[var(--white)]/45 text-[var(--text)] mx-auto px-13 py-3 rounded-3xl hover:bg-[var(--primary)]/20 italic font-medium'>Choose plan</button>
            </motion.div>
            <motion.div 
              className="h-130 w-100 mx-9.5 flex flex-col gap-4 bg-gray-50 shadow-lg rounded-2xl p-8 hover:shadow-2xl bg-gradient-to-t from-[var(--white)]/50 to-[var(--secondary)]/20"
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.95, delay: 0.9 }}
              viewport={{ once: true }}
            >
              <p className='text-xl font-semibold mb-3'>Premium</p>
              <div className="flex mx-auto">
                <p className=" text-xl font-semibold ">$</p>
                <p className=" text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-black via-black/60 to-[var(--primary)]/40 leading-tight italic ">2.99</p>
                <p className="text-xl font-semibold py-8">/mo</p>
              </div>
              <div className='text-left'>
                <p className=" text-xl font-semibold mx-auto ">• All features from free</p>
                <p className=" text-xl font-semibold mx-auto ">• Unlimited products upload</p>
                <p className='text-xl font-semibold mx-auto '>• Dashboard Analytics </p>
                <p className='text-xl font-semibold mx-auto '>• Inventory Tracking </p>
                <p className='text-xl font-semibold mx-auto '>• Order Management </p>
                <p className='text-xl font-semibold mx-auto '>• Unlimited sales </p>
                <button className='my-21 flex bg-gradient-to-br from-[var(--white)]/50 to-[var(--secondary)]/45 text-[var(--text)] mx-15 px-15 py-3 rounded-3xl hover:bg-[var(--accent)] italic font-medium'>Choose plan</button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;