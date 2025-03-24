'use client';

import { useState, useEffect } from 'react';
import ScrollAnimation from './components/ScrollAnimation';
import VideoBackground from './components/VideoBackground';
import Navigation from './components/Navigation';
import Link from 'next/link';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <main className="relative min-h-screen">
      <VideoBackground />
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <ScrollAnimation>
          <section className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-wider text-white">
                KLEWEN DAYDANCE
              </h1>
              <p className="text-2xl md:text-3xl mb-8 uppercase tracking-widest text-white">
                SOLD OUT
              </p>
              <button className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider">
                mehr erfahren
              </button>
            </div>
          </section>
        </ScrollAnimation>

        {/* About Section */}
        <section id="about" className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <ScrollAnimation>
              <div className="space-y-8">
                <h2 className="text-4xl sm:text-5xl font-bold tracking-wider">
                  <span className="text-blue-400 animate-text-glow">ABOUT</span> THE ARTIST
                </h2>
                <p className="text-lg sm:text-xl leading-relaxed">
                  MECA GOTHITS is more than just a DJ - it's an experience. 
                  Blending cutting-edge electronic music with raw energy and passion,
                  creating unforgettable moments on the dancefloor.
                </p>
                <button className="btn-primary hover-glow">
                  READ MORE
                </button>
              </div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="relative">
                <img 
                  src="/dj-portrait.jpg" 
                  alt="MECA GOTHITS Portrait" 
                  className="rounded-lg shadow-2xl image-hover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
              </div>
            </ScrollAnimation>
          </div>
        </section>

        {/* Music Section */}
        <section id="music" className="relative min-h-screen bg-black py-20">
          <div className="absolute inset-0">
            <img 
              src="/dj-setup.jpg" 
              alt="DJ Setup" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-black/80" />
          </div>
          <ScrollAnimation className="relative z-10 max-w-7xl mx-auto px-4">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 tracking-wider text-center">
              <span className="text-blue-400 animate-text-glow">LATEST</span> TRACKS
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Add track cards here with hover-glow class */}
            </div>
          </ScrollAnimation>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative h-screen">
          <div className="absolute inset-0">
            <img 
              src="/crowd.jpg" 
              alt="Contact" 
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
          </div>
          <ScrollAnimation className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h2 className="text-5xl sm:text-7xl font-bold mb-6 tracking-wider">
              <span className="text-blue-400 animate-text-glow">GET IN</span> TOUCH
            </h2>
            <p className="text-xl sm:text-2xl mb-12">Book me for your next event</p>
            <form className="w-full max-w-md space-y-4">
              <input 
                type="email" 
                placeholder="Your Email"
                className="form-input hover-glow"
              />
              <textarea 
                placeholder="Your Message"
                rows="4"
                className="form-input hover-glow"
              ></textarea>
              <button className="btn-secondary hover-glow w-full">
                SEND MESSAGE
              </button>
            </form>
          </ScrollAnimation>
        </section>

        {/* Footer */}
        <footer className="bg-black py-8 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <img src="/logo-white.png" alt="MECA GOTHITS" className="h-12" />
            <div className="flex space-x-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Instagram</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Facebook</a>
              <a href="#" className="hover:text-blue-400 transition-colors">SoundCloud</a>
            </div>
            <p className="text-sm text-gray-400">&copy; 2024 MECA GOTHITS. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </main>
  );
} 