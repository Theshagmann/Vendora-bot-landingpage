import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const ScrollingText = ({ 
  text = "INSTANT • AUTOMATION • SEAMLESS • SCALABLE • EFFORTLESS • CUSTOMIZABLE  ", 
  speed = 10, 
  textColor = "#b39ddb" 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [duplicateCount, setDuplicateCount] = useState(1);

  useEffect(() => {
    if (!containerRef.current || !textRef.current) return;
    
    // Calculate how many copies of text we need to fill the container width
    const calculateDuplicates = () => {
      const containerWidth = containerRef.current?.offsetWidth || 0;
      const textWidth = textRef.current ? textRef.current.offsetWidth : 0;
      // We need at least 2 copies to create continuous effect, more for wider screens
      const count = Math.max(2, Math.ceil((containerWidth * 2) / textWidth));
      setDuplicateCount(count);
    };

    calculateDuplicates();
    window.addEventListener('resize', calculateDuplicates);
    
    return () => window.removeEventListener('resize', calculateDuplicates);
  }, [text]);

  // Create animation keyframes
  const keyframes = `
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-${100 / duplicateCount}%);
      }
    }
    @keyframes scrollReverse {
      0% {
        transform: translateX(-${100 / duplicateCount}%);
      }
      100% {
        transform: translateX(0);
      }
    }
  `;

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        overflow: 'hidden',
        padding: '0px 0',
        position: 'relative'
      }}
    >
      <style>{keyframes}</style>
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] to-transparent z-10"></div>
      
      <motion.div
        style={{
          display: 'flex',
          width: `${duplicateCount * 100}%`,
          animation: `scroll ${speed * duplicateCount}s linear infinite`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        {[...Array(duplicateCount)].map((_, index) => (
          <div
            key={index}
            ref={index === 0 ? textRef : null}
            style={{
              flex: `0 0 ${100 / duplicateCount}%`,
              color: textColor,
              fontSize: '2rem',
              fontWeight: 'bold',
              display: 'inline-block',
              paddingLeft: '0px',
              background: 'linear-gradient(to right, #b39ddb, #9575cd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {text}
          </div>
        ))}
      </motion.div>
      <motion.div
        style={{
          display: 'flex',
          width: `${duplicateCount * 100}%`,
          animation: `scrollReverse ${speed * duplicateCount}s linear infinite`,
          marginTop: '0px'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        {[...Array(duplicateCount)].map((_, index) => (
          <div
            key={index}
            style={{
              flex: `0 0 ${100 / duplicateCount}%`,
              color: textColor,
              fontSize: '2rem',
              fontWeight: 'bold',
              display: 'inline-block',
              paddingLeft: '0px',
              background: 'linear-gradient(to right, #b39ddb, #9575cd)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            {text}
          </div>
        ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-l from-[var(--background)] to-transparent z-10"></div>
    </div>
  );
};

export default ScrollingText;
