import { motion } from 'framer-motion';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-gray-900 opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Main title with animation */}
        <motion.h1 
          className="text-6xl md:text-8xl font-bold tracking-wider mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          MECAGOTHITS
        </motion.h1>

        {/* Description with animation */}
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          MECA GOTHITS is more than just a DJ - it's an experience. Blending 
          cutting-edge electronic music with raw energy and passion, creating 
          unforgettable moments on the dancefloor.
        </motion.p>

        {/* CTA Button with animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Link 
            href="/about"
            className="inline-block px-8 py-3 text-sm border border-white/20 rounded-full 
                     bg-white/10 backdrop-blur-sm hover:bg-white/20 
                     transition-all duration-300 uppercase tracking-wider"
          >
            Read More
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.5, 
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero; 