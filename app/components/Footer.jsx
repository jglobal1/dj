'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <Link href="/" className="block">
              <Image 
                src="/images/logo.jpg" 
                alt="MECAGOTHITS" 
                width={150} 
                height={40} 
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Creating unforgettable electronic music experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/artists" className="text-gray-400 hover:text-white transition-colors">
                  Artists
                </Link>
              </li>
              <li>
                <Link href="/crew" className="text-gray-400 hover:text-white transition-colors">
                  Crew
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-white font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/mecagothits" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Image 
                  src="/images/instagram.svg" 
                  alt="Instagram" 
                  width={24} 
                  height={24} 
                  className="invert"
                />
              </a>
              <a 
                href="https://t.me/MecagothitsSoftwarecompany" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Image 
                  src="/images/telegram.svg" 
                  alt="Telegram" 
                  width={24} 
                  height={24} 
                  className="invert"
                />
              </a>
              <a 
                href="https://soundcloud.com/mecagothits" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Image 
                  src="/images/soundcloud.svg" 
                  alt="SoundCloud" 
                  width={24} 
                  height={24} 
                  className="invert"
                />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} MECAGOTHITS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 