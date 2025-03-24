'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'HOME' },
    { href: '/daydance', label: 'DAYDANCE', dropdown: [
      { href: '/daydance/klewen', label: 'KLEWEN' },
      { href: '/daydance/rigi', label: 'RIGI' },
      { href: '/daydance/sachseln', label: 'SACHSELN' },
      { href: '/daydance/pilatus', label: 'PILATUS' },
    ]},
    { href: '/artists', label: 'ARTISTS' },
    { href: '/crew', label: 'CREW' },
    { href: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        hasScrolled ? 'bg-black/80 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-50 hover-lift">
            <Image 
              src="/images/logo.jpg" 
              alt="MECAGOTHITS" 
              width={150} 
              height={40} 
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center space-x-12">
              {navLinks.map((link, index) => (
                <div key={link.href} className="relative group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  {link.dropdown ? (
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="text-white hover:text-white/70 transition-colors py-2 hover-lift text-sm tracking-wider"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-white hover:text-white/70 transition-colors py-2 hover-lift text-sm tracking-wider"
                    >
                      {link.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.dropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 glass-dark
                                   opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                                   transition-all duration-300 transform translate-y-2 group-hover:translate-y-0
                                   rounded-md overflow-hidden">
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-white hover:bg-white/10 transition-colors
                                   animate-fade-in text-sm tracking-wider"
                          style={{ animationDelay: `${idx * 50}ms` }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Social Media Links */}
          <div className="hidden md:flex items-center space-x-4">
            {[
              { href: "https://instagram.com/mecagothits", icon: "/images/instagram.svg", alt: "Instagram" },
              { href: "https://t.me/MecagothitsSoftwarecompany", icon: "/images/telegram.svg", alt: "Telegram" },
              { href: "https://soundcloud.com/mecagothits", icon: "/images/soundcloud.svg", alt: "SoundCloud" }
            ].map((social, index) => (
              <a 
                key={social.href}
                href={social.href}
                target="_blank" 
                rel="noopener noreferrer"
                className="hover-lift animate-fade-in"
                style={{ animationDelay: `${(navLinks.length + index) * 100}ms` }}
              >
                <Image src={social.icon} alt={social.alt} width={20} height={20} className="invert" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center hover-lift"
          >
            <div className="w-6 flex flex-col items-end space-y-1.5">
              <span 
                className={`block h-0.5 bg-white transform transition-all duration-300 ${
                  isOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                }`}
              />
              <span 
                className={`block h-0.5 bg-white transition-all duration-300 ${
                  isOpen ? 'w-0 opacity-0' : 'w-4'
                }`}
              />
              <span 
                className={`block h-0.5 bg-white transform transition-all duration-300 ${
                  isOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 glass-dark transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col space-y-6">
            {navLinks.map((link, index) => (
              <div key={link.href} 
                   className={`animate-slide-in-right`}
                   style={{ animationDelay: `${index * 100}ms` }}>
                {link.dropdown ? (
                  <div className="space-y-4">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="text-2xl font-bold text-white hover-lift"
                    >
                      {link.label}
                    </button>
                    <div className={`space-y-4 pl-4 ${isDropdownOpen ? 'block' : 'hidden'}`}>
                      {link.dropdown.map((item, idx) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block text-xl text-white/80 hover:text-white transition-colors hover-lift"
                          style={{ animationDelay: `${(index * 100) + (idx * 50)}ms` }}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-2xl font-bold text-white hover:text-white/80 transition-colors hover-lift"
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}

            {/* Mobile Social Links */}
            <div className="flex space-x-6 pt-8">
              {[
                { href: "https://instagram.com/mecagothits", icon: "/images/instagram.svg", alt: "Instagram" },
                { href: "https://t.me/MecagothitsSoftwarecompany", icon: "/images/telegram.svg", alt: "Telegram" },
                { href: "https://soundcloud.com/mecagothits", icon: "/images/soundcloud.svg", alt: "SoundCloud" }
              ].map((social, index) => (
                <a 
                  key={social.href}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover-lift animate-slide-in-right"
                  style={{ animationDelay: `${(navLinks.length + index) * 100}ms` }}
                >
                  <Image src={social.icon} alt={social.alt} width={24} height={24} className="invert" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 