'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const daydanceLocations = [
    { name: 'KLEWEN', path: '/daydance/klewen' },
    { name: 'RIGI', path: '/daydance/rigi' },
    { name: 'SACHSELN', path: '/daydance/sachseln' },
    { name: 'PILATUS', path: '/daydance/pilatus' }
  ];

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = isMenuOpen ? 'unset' : 'hidden';
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 
                 ${scrolled ? 'bg-black/90 backdrop-blur-lg py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="relative w-32 h-12 md:w-40 md:h-14">
            <Image
              src="/images/logo.jpg"
              alt="Mecagothits"
              fill
              style={{ objectFit: 'contain' }}
              className="hover:brightness-125 transition-all duration-300"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Daydance Dropdown */}
            <div className="relative group">
              <Link
                href="/daydance"
                className="text-white uppercase tracking-wider text-sm hover:text-gray-300 
                         transition-colors duration-300 py-2"
              >
                daydance
              </Link>
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible 
                            group-hover:opacity-100 group-hover:visible transition-all duration-300">
                <div className="bg-black/90 backdrop-blur-md rounded-lg border border-white/10 
                              shadow-xl py-2 min-w-[160px]">
                  {daydanceLocations.map((location) => (
                    <Link
                      key={location.name}
                      href={location.path}
                      className={`block px-6 py-2 text-white text-sm hover:bg-white/10 
                               transition-colors duration-200 text-center ${
                                 isActive(location.path) ? 'font-bold' : ''
                               }`}
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Other Nav Links */}
            {['artists', 'crew', 'contact'].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className={`text-white uppercase tracking-wider text-sm hover:text-gray-300 
                         transition-colors duration-300 ${
                           isActive(`/${item}`) ? 'font-bold' : ''
                         }`}
              >
                {item}
              </Link>
            ))}

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/instagram.svg" alt="Instagram" width={20} height={20} className="invert" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/facebook.svg" alt="Facebook" width={20} height={20} className="invert" />
              </Link>
              <Link href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/soundcloud.svg" alt="SoundCloud" width={20} height={20} className="invert" />
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg 
                     bg-white/10 backdrop-blur-sm border border-white/20"
          >
            <div className="relative w-6 h-4">
              <span
                className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300
                          ${isMenuOpen ? 'rotate-45 top-2' : 'top-0'}`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-white top-2 transition-all duration-300
                          ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              ></span>
              <span
                className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300
                          ${isMenuOpen ? '-rotate-45 top-2' : 'top-4'}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-gradient-to-br from-[#1a1a1a]/95 via-[#2a2a2a]/98 to-[#1a1a1a] 
                     backdrop-blur-md transform transition-all duration-500 ease-in-out md:hidden
                     ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}
          style={{ top: '64px' }}
        >
          <div className="flex flex-col items-center pt-8 h-full">
            {/* Daydance with Locations */}
            <div className="flex flex-col items-center space-y-4 mb-8">
              <Link
                href="/daydance"
                className="text-2xl text-white uppercase tracking-wider"
                onClick={toggleMenu}
              >
                daydance
              </Link>
              <div className="flex flex-col items-center space-y-3">
                {daydanceLocations.map((location) => (
                  <Link
                    key={location.name}
                    href={location.path}
                    className={`text-lg text-white/80 uppercase tracking-wide hover:text-white ${
                      isActive(location.path) ? 'font-bold' : ''
                    }`}
                    onClick={toggleMenu}
                  >
                    {location.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Nav Links */}
            {['artists', 'crew', 'contact'].map((item) => (
              <Link
                key={item}
                href={`/${item}`}
                className={`text-2xl text-white uppercase tracking-wider py-4 ${
                  isActive(`/${item}`) ? 'font-bold' : ''
                }`}
                onClick={toggleMenu}
              >
                {item}
              </Link>
            ))}

            {/* Mobile Social Links */}
            <div className="flex space-x-6 mt-auto mb-12">
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/instagram.svg" alt="Instagram" width={24} height={24} className="invert" />
              </Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} className="invert" />
              </Link>
              <Link href="https://soundcloud.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/soundcloud.svg" alt="SoundCloud" width={24} height={24} className="invert" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 