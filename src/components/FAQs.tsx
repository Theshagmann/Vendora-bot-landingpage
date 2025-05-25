import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const FAQContactPage = () => {
  // FAQ data
  const faqData = [
    {
      question: "What is this bot?",
      answer: "This bot helps you create your own telegram E-commerce bot to sell your products."
    },
    {
      question: "What can Vendora bot do for me and my business?",
      answer: "vendora bot can help you create a powerful and easy-to-use Telegram E-commerce bot for your business. With Vendora Bot, you can Sell yoour products online, Manage orders and payment, Automate customer commuincation and Grow your busines."
    },
    {
      question: "Is Vendora safe?",
      answer: "Yes,Vendora uses secure payment gateways to protect your financial information. We also take steps to prevent fraud and scams."
    },
    {
      question: "What payment methods can i accept?",
      answer: "Yon can accept payments throungh popular options like Stripe, PayPal and more."
    },
    {
      question: "How do i manage orders?",
      answer: "Easy, you'll receive  notifications about new orders and can track their status through your bot's dashboard."
    },
    {
      question: "How do i promote my bot?",
      answer: "You can share your bot's unique link with customers on social media or through our Telegram Community that helps customers relate with with vendors bot."
    },
    {
      question: "What platform does my bot work on?",
      answer: "Your bot will be accessible to all Telegram users,regardless of their location and device."
    },
    {
      question: "Do I need any coding Knowledge?",
      answer: "No, you don't ned any coding skills to create your bot. I hande all the technical aspects."
    }
  ];

  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  // Toggle FAQ open/close
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="bg-gradient-to-l min-h-screen" id='faqs'>
      {/* Header */}
      <header className="">
        <div className="container mx-auto px-7 py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800  bg-clip-text bg-gradient-to-b from-black via-black to-[var(--primary)] mb-2  leading-tight italic">FAQs</h1>
          <p className="text-gray-600 max-w-lg mx-auto text-center font-bold text-lg mb-1">Find answers to your questions</p>
        </div>
      </header>

      <div className="container mx-auto px-2 sm:px-4 py-4 flex flex-col lg:flex-row">
        <div className="w-full lg:w-3/4 px-2 sm:px-0">
          <motion.div 
            className="bg-white rounded-3xl shadow-lg p-4 sm:p-6 mb-8 bg-gradient-to-b from-[var(--primary)]/20 to-[var(--white)]/10"
            initial={{ y: -10, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b border-gray-200 pb-4 last:border-b-0"
                >
                  <button 
                    className="flex justify-between items-center w-full text-left py-2 focus:outline-none"
                    onClick={() => toggleFAQ(index)}
                  >
                    <span className="text-sm sm:text-lg text-gray-800 hover:underline font-bold">{faq.question}</span>
                    {openFAQ === index ? 
                      <FaChevronUp className="text-indigo-600" /> : 
                      <FaChevronDown className="text-gray-400" />
                    }
                  </button>
                  <div 
                    className={`mt-2 text-gray-600 overflow-hidden transition-all duration-300 ${
                      openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="py-2">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          
        </div>
        
        {/* Lottie Animation */}
        <div className="w-full lg:w-1/4 mt-8 lg:mt-0">
          <div className="sticky top-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full lg:min-h-[800px] mb-10 rounded-3xl p-4"
            >
              <DotLottieReact
                src="https://lottie.host/2078688b-f5bc-45f4-bc4a-ec120dc0aedf/fqMBHMzEf5.lottie"
                autoplay
                loop
                className="w-full h-full scale-200"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQContactPage;
