import { useState } from 'react';
import { motion } from 'framer-motion';

const YouTubePlayer = ({ videoId = "YOUR_VIDEO_ID" }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <motion.div 
      className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-black/30 backdrop-blur-sm"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="relative pt-[56.25%]"> {/* 16:9 Aspect Ratio */}
        {!isPlaying ? (
          <div className="absolute inset-0 cursor-pointer group" onClick={() => setIsPlaying(true)}>
            <img 
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Video Thumbnail"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div 
                className="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg 
                  className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-current" 
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </motion.div>
            </div>
          </div>
        ) : (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}
      </div>
    </motion.div>
  );
};

export default YouTubePlayer; 