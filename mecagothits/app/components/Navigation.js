import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 p-4 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="w-32 h-8 relative">
          <Image
            src="/images/logo.jpg"
            alt="Mecagothits"
            fill
            style={{ objectFit: 'contain' }}
            className="hover:brightness-125 transition-all duration-300"
            priority
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-8 text-white uppercase tracking-wider text-sm">
          <Link href="/daydance" className="hover:opacity-70 transition-opacity">Daydance</Link>
          <Link href="/artists" className="hover:opacity-70 transition-opacity">Artists</Link>
          <Link href="/crew" className="hover:opacity-70 transition-opacity">Crew</Link>
          <Link href="/contact" className="hover:opacity-70 transition-opacity">Contact</Link>
        </div>

        {/* Social Links */}
        <div className="hidden md:flex space-x-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-100 hover:opacity-70 transition-opacity">
            <img src="/images/instagram.svg" alt="Instagram" className="w-6 h-6" />
          </a>
          <a href="https://t.me/mecagothits" target="_blank" rel="noopener noreferrer" className="opacity-100 hover:opacity-70 transition-opacity">
            <img src="/images/telegram.svg" alt="Telegram" className="w-6 h-6" />
          </a>
          <a href="https://soundcloud.com" target="_blank" rel="noopener noreferrer" className="opacity-100 hover:opacity-70 transition-opacity">
            <img src="/images/soundcloud.svg" alt="SoundCloud" className="w-6 h-6" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navigation; 