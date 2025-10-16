import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Hero = () => {
  return (
    <motion.section
      className="relative w-full h-[100vh] flex items-start justify-between font-sans"
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75, delay: 0.2 }}
    >
      <div className="absolute inset-0 sm:inset-2 sm:rounded-2xl bg-gradient-to-b from-[var(--primary)]/20 to-[var(--white)]/10"></div>
      <div className="relative ml-8 mt-35 z-10">
        <motion.p
          className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black via-black to-[var(--primary)]/70 mb-2 text-left leading-tighter italic"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.4 }}
        >
          Start Your E-commerce Journey
        </motion.p>
        <motion.p
          className="-mt-3 text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black via-black to-[var(--primary)] mb-2 text-left leading-tight italic"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.6 }}
        >
          on Telegram
        </motion.p>

        <motion.p
          className="-mt-3 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-black via-black to-[var(--primary)] mb-2 text-left leading-tighter italic"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.8 }}
        >
          with Vendora.
        </motion.p>
        <motion.p
          className="text-lg font-bold mb-4 text-left pr-2  text-gray-800 leading-relaxed lg:leading-tight opacity-90"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 1.0 }}
        >
          With features like registration, product listings, order processing
          and more. <br />
          Vendors can easily setup and manage their online stores with our
          Telegram Bot.
        </motion.p>
        {/* <motion.p 
          className="text-lg font-bold text-[var(--text)] mb-4 text-left leading-tight"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 1.2 }}
        >
          Vendors can easily setup and manage their online stores with our Telegram Bot.
        </motion.p> */}
        <motion.p
          className="text-lg font-bold text-[var(--text)] mb-2 text-left leading-tight"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 1.4 }}
        >
          Join us and Start Earning!
        </motion.p>
        <motion.button
          className="mt-8 font-bold bg-[var(--primary)]/40 text-[var(--text)] px-6 py-3 rounded-3xl hover:bg-[var(--primary)]/40 italic shadow-md"
          whileHover={{ scale: 1.1 }}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 1.6 }}
        >
          Get Started!
        </motion.button>
      </div>
      <div className="relative mr-45 mt-40 z-10 hidden sm:block">
        <DotLottieReact
          src="https://lottie.host/cb52c2cd-547b-41cb-ac52-b5cacd7804e3/V23qv0EPxd.lottie"
          loop
          autoplay
          style={{ width: "400px", height: "400px" }}
        />
      </div>
      <div className="absolute ml-56 mt-38 z-10 sm:block hidden">
        <DotLottieReact
          src="https://lottie.host/91c9de1e-faa9-4ba1-a3be-b5e884cd74a5/w9u2eGCol6.lottie"
          loop
          autoplay
          style={{ width: "230px", height: "130px" }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;
