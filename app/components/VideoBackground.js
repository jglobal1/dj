'use client';

import { useState, useEffect, useRef } from 'react';

const VideoBackground = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoading(false);
      video.play().catch(error => {
        console.error('Autoplay failed:', error);
        setHasError(true);
      });
    };

    const handleError = (error) => {
      console.error('Video error:', error);
      setHasError(true);
      setIsLoading(false);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-50">
          <div className="w-12 h-12 border-4 border-t-white border-opacity-25 rounded-full animate-spin"></div>
        </div>
      )}
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source src="/videos/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30" /> {/* Overlay */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <button
            onClick={() => {
              setHasError(false);
              videoRef.current?.play().catch(() => setHasError(true));
            }}
            className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg 
                     backdrop-blur-sm transition-all duration-300 z-50 
                     flex items-center space-x-2"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
            </svg>
            <span>Click to Play Video</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default VideoBackground; 