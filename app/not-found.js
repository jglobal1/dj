'use client';

import Link from 'next/link';
import Navigation from './components/Navigation';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      <div className="relative min-h-screen flex items-center justify-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-900/20 to-black"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-8xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-8">
            Page Not Found
          </h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            href="/"
            className="inline-block px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 
                     rounded-full hover:bg-white/20 transition-all duration-300 
                     transform hover:scale-105 active:scale-95"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
} 