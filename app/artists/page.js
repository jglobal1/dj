'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function ArtistsPage() {
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const artists = [
    {
      name: "MECAGOTHITS",
      genre: "Techno",
      image: "/images/gallery1.jpg",
      socialLinks: {
        instagram: "https://instagram.com/mecagothits",
        soundcloud: "https://soundcloud.com/mecagothits"
      },
      description: "Pioneer of the Swiss electronic music scene, known for deep, hypnotic techno sets."
    },
    {
      name: "MECAGOTHITS",
      genre: "House",
      image: "/images/gallery2.jpg",
      socialLinks: {
        instagram: "https://instagram.com/mecagothits",
        soundcloud: "https://soundcloud.com/mecagothits"
      },
      description: "Bringing fresh house vibes with a unique blend of classic and modern elements."
    },
   
    {
      name: "MECAGOTHITS",
      genre: "House",
      image: "/images/artist4.jpg",
      socialLinks: {
        instagram: "https://instagram.com/djalvin",
        soundcloud: "https://soundcloud.com/djalvin"
      },
      description: "Crafting energetic house sets that keep the dance floor moving."
    },
    {
      name: "MECAGOTHITS",
      genre: "Techno",
      image: "/images/artist5.jpg",
      socialLinks: {
        instagram: "https://instagram.com/djterritory",
        soundcloud: "https://soundcloud.com/djterritory"
      },
      description: "Pushing boundaries with innovative techno and electronic soundscapes."
    }
  ];

  const genres = ['all', ...new Set(artists.map(artist => artist.genre))];

  const filteredArtists = selectedGenre === 'all' 
    ? artists 
    : artists.filter(artist => artist.genre === selectedGenre);

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/background.jpg"
            alt="Artists Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        <div className="relative container mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-down opacity-0 [animation-delay:300ms]">
            ARTISTS
          </h1>
          <p className="text-xl md:text-2xl text-white/80 animate-fade-in opacity-0 [animation-delay:600ms]">
            Meet the talented artists behind the beats
          </p>
        </div>
      </section>

      {/* Genre Filter */}
      <section className="py-12 glass-dark">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 animate-slide-up opacity-0 [animation-delay:800ms]">
            {genres.map((genre, index) => (
              <button
                key={genre}
                onClick={() => setSelectedGenre(genre)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 hover-lift
                          ${selectedGenre === genre 
                            ? 'bg-white text-black border-white' 
                            : 'border-white/30 hover:border-white'}`}
                style={{ animationDelay: `${800 + (index * 100)}ms` }}
              >
                {genre.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtists.map((artist, index) => (
              <div
                key={artist.name}
                className="group relative overflow-hidden rounded-lg card-hover
                         animate-slide-up opacity-0"
                style={{ animationDelay: `${1000 + (index * 200)}ms` }}
              >
                <div className="aspect-[3/4] relative overflow-hidden">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-2">{artist.name}</h3>
                    <p className="text-white/80 mb-4">{artist.genre}</p>
                    <p className="text-white/60 mb-6 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {artist.description}
                    </p>
                    
                    <div className="flex space-x-4 transform translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      {Object.entries(artist.socialLinks).map(([platform, url]) => (
                        <a
                          key={platform}
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover-lift"
                        >
                          <Image
                            src={`/images/${platform}.svg`}
                            alt={platform}
                            width={24}
                            height={24}
                            className="invert opacity-80 hover:opacity-100 transition-opacity"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 glass-dark">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up opacity-0 [animation-delay:200ms]">
            BOOK AN ARTIST
          </h2>
          <p className="text-xl mb-8 text-white/80 max-w-2xl mx-auto animate-slide-up opacity-0 [animation-delay:400ms]">
            Interested in booking one of our artists for your event? Get in touch with us!
          </p>
          
          <Link
            href="/contact"
            className="btn-modern glass px-12 py-4 border border-white inline-block
                     hover:bg-white hover:text-black transition-all duration-300
                     animate-slide-up opacity-0 [animation-delay:600ms] hover-lift"
          >
            CONTACT US
          </Link>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
} 