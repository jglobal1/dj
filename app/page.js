'use client';

import { useState, useEffect } from 'react';
import ScrollAnimation from './components/ScrollAnimation';
import VideoBackground from './components/VideoBackground';
import Navigation from './components/Navigation';
import YouTubePlayer from './components/YouTubePlayer';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TrackList from './components/TrackList';
import Image from 'next/image';
import ScrollToTop from './components/ScrollToTop';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [trendingTracks, setTrendingTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const fetchTrendingTracks = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch('/api/spotify-trending');
        if (!response.ok) {
          throw new Error('Failed to fetch tracks');
        }
        const data = await response.json();
        setTrendingTracks(data.tracks || []);
      } catch (error) {
        console.error('Error fetching trending tracks:', error);
        setError('Failed to load trending tracks');
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingTracks();

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <main className="relative min-h-screen">
      <VideoBackground />
      <div className="relative z-10">
        <Navigation />
        
        {/* Hero Section */}
        <ScrollAnimation>
          <section className="min-h-screen flex items-center justify-center">
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 tracking-wider text-white">
                MECAGOTHITS
              </h1>
              <p className="text-lg sm:text-2xl md:text-3xl mb-8 uppercase tracking-widest text-white">
                ELECTRONIC MUSIC
              </p>
              <button 
                onClick={scrollToAbout}
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-white text-white 
                         hover:bg-white hover:text-black transition-all duration-300 
                         uppercase tracking-wider rounded-full text-sm sm:text-base
                         transform hover:scale-105 active:scale-95"
              >
                mehr erfahren
              </button>
            </div>
          </section>
        </ScrollAnimation>

        {/* Trending Tracks Section */}
        <section className="py-20 bg-black/80 backdrop-blur-lg">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-4 text-center">
              NEW RELEASES
            </h2>
            {isLoading ? (
              // Loading skeleton
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Array(6).fill(null).map((_, index) => (
                  <div 
                    key={index} 
                    className="bg-white/5 animate-pulse rounded-lg p-4 h-[120px] flex items-center space-x-4"
                  >
                    <div className="w-20 h-20 bg-white/10 rounded flex-shrink-0"></div>
                    <div className="flex-grow space-y-3">
                      <div className="h-4 bg-white/10 rounded w-3/4"></div>
                      <div className="h-3 bg-white/10 rounded w-1/2"></div>
                      <div className="h-3 bg-white/10 rounded w-1/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center text-white/60 py-10">
                {error}
              </div>
            ) : trendingTracks.length === 0 ? (
              <div className="text-center text-white/60 py-10">
                No tracks available at the moment
              </div>
            ) : (
              <>
                <p className="text-center text-white/60 mb-12">
                  Latest releases from Swiss charts, updated daily
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {trendingTracks.map((track, index) => (
                    <div
                      key={track.id}
                      className="group bg-white/5 hover:bg-white/10 rounded-lg p-4 transition-all duration-300
                               transform hover:-translate-y-1"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="relative">
                          <div className="relative w-20 h-20 flex-shrink-0">
                            <Image
                              src={track.albumArt}
                              alt={track.title}
                              fill
                              className="object-cover rounded"
                            />
                          </div>
                          <div className="absolute -top-2 -left-2 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-bold text-lg mb-1 truncate">{track.title}</h3>
                          <p className="text-white/60 text-sm mb-1">{track.artist}</p>
                          {track.albumName && (
                            <p className="text-white/40 text-xs mb-2 truncate">
                              Album: {track.albumName}
                            </p>
                          )}
                          <div className="flex items-center space-x-2 text-sm text-white/40">
                            <span>Released: {new Date(track.releaseDate).toLocaleDateString()}</span>
                          </div>
                        </div>
                      </div>
                      {track.previewUrl && (
                        <div className="mt-4">
                          <audio
                            className="w-full h-8"
                            controls
                            src={track.previewUrl}
                          />
                        </div>
                      )}
                      <a 
                        href={track.spotifyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 text-sm text-spotify-green hover:text-spotify-green/80 flex items-center justify-center space-x-2 py-2"
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                        </svg>
                        <span>Open in Spotify</span>
                      </a>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen bg-black flex items-center justify-center px-4 py-20">
          <div className="container mx-auto max-w-5xl text-center">
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider">
                <motion.span 
                  className="text-blue-400 inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                >
                  ABOUT
                </motion.span>{" "}
                <motion.span 
                  className="inline-block"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  THE ARTIST
                </motion.span>
              </h2>

              <motion.div 
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mb-8">
                  MECA GOTHITS is more than just a DJ - it's an experience. 
                  Blending cutting-edge electronic music with raw energy and passion,
                  creating unforgettable moments on the dancefloor.
                </p>
                
                <Link 
                  href="/artists"
                  className="inline-block px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base 
                            border border-white/20 rounded-full bg-white/10 backdrop-blur-sm 
                            hover:bg-white/20 transition-all duration-300 uppercase tracking-wider
                            transform hover:scale-105 active:scale-95"
                >
                  READ MORE
                </Link>
              </motion.div>

              {/* YouTube Player */}
              <div className="mt-12">
                <YouTubePlayer videoId="H_Dex3ONx-Y" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Music Section */}
        <section id="music" className="relative min-h-screen bg-black py-20">
          <div className="absolute inset-0">
            <img 
              src="/images/dj-setup.jpg" 
              alt="DJ Setup" 
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black to-black/80" />
          </div>
          <ScrollAnimation className="relative z-10">
            <h2 className="text-4xl sm:text-5xl font-bold mb-12 tracking-wider text-center">
              <span className="text-blue-400 animate-text-glow">LATEST</span> TRACKS
            </h2>
            <TrackList />
          </ScrollAnimation>
        </section>

        
        {/* Contact Section */}
        <section className="relative min-h-screen bg-black">
          <div className="absolute inset-0">
            <img 
              src="/images/background.jpg" 
              alt="Contact Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
          </div>
          
          <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-wider text-white">
                KONTAKT
              </h2>
              <p className="text-xl sm:text-2xl text-white/80 tracking-wide">
                Hier erreichst du uns...
              </p>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Link 
                  href="/contact"
                  className="inline-block px-12 py-3 mt-6 border border-white/30 rounded-full 
                           bg-black/30 backdrop-blur-sm hover:bg-white/10 
                           transition-all duration-300 text-white text-lg
                           uppercase tracking-wider"
                >
                  weiter
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black py-8 px-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <img src="/images/logo.jpg" alt="MECAGOTHITS" className="h-12" />
            <div className="flex space-x-6">
              <a href="https://instagram.com/mecagothits" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Instagram</a>
              <a href="https://t.me/MecagothitsSoftwarecompany" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Telegram</a>
              <a href="https://soundcloud.com/mecagothits" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">SoundCloud</a>
            </div>
            <p className="text-sm text-gray-400">&copy; 2025 MECAGOTHITS. All rights reserved.</p>
          </div>
        </footer>
      </div>

      <ScrollToTop />
    </main>
  );
} 