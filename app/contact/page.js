'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../components/Navigation';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    vorname: '',
    nachname: '',
    email: '',
    telefon: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ message: '', isError: false });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ message: '', isError: false });

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus({
        message: 'Thank you for your message. We will get back to you soon.',
        isError: false
      });
      setIsSubmitting(false);
      setFormData({
        vorname: '',
        nachname: '',
        email: '',
        telefon: '',
        message: ''
      });
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section with Form */}
      <section className="relative min-h-screen">
        <Image
          src="/images/background.jpg"
          alt="Contact Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80">
          <div className="container mx-auto min-h-screen flex flex-col items-center justify-center px-4 py-20">
            <div className="w-full max-w-xl mx-auto">
              <h1 
                className="text-6xl md:text-8xl font-bold text-center mb-16 
                         animate-slide-down opacity-0 [animation-delay:200ms]"
              >
                KONTAKT
              </h1>
              
              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="vorname"
                    value={formData.vorname}
                    onChange={handleInputChange}
                    placeholder="Vorname"
                    required
                    className="w-full glass border border-white/10 px-6 py-4 
                             text-white placeholder-white/50 focus:outline-none focus:border-white/30 
                             transition-all duration-300 animate-slide-in-left opacity-0 [animation-delay:400ms]
                             hover-glow"
                  />
                  
                  <input
                    type="text"
                    name="nachname"
                    value={formData.nachname}
                    onChange={handleInputChange}
                    placeholder="Nachname"
                    required
                    className="w-full glass border border-white/10 px-6 py-4 
                             text-white placeholder-white/50 focus:outline-none focus:border-white/30 
                             transition-all duration-300 animate-slide-in-right opacity-0 [animation-delay:500ms]
                             hover-glow"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E-Mail"
                    required
                    className="w-full glass border border-white/10 px-6 py-4 
                             text-white placeholder-white/50 focus:outline-none focus:border-white/30 
                             transition-all duration-300 animate-slide-in-left opacity-0 [animation-delay:600ms]
                             hover-glow"
                  />
                  
                  <input
                    type="tel"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleInputChange}
                    placeholder="Telefon"
                    className="w-full glass border border-white/10 px-6 py-4 
                             text-white placeholder-white/50 focus:outline-none focus:border-white/30 
                             transition-all duration-300 animate-slide-in-right opacity-0 [animation-delay:700ms]
                             hover-glow"
                  />
                </div>
                
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Gib hier deine Nachricht ein"
                  required
                  rows={6}
                  className="w-full glass border border-white/10 px-6 py-4 
                           text-white placeholder-white/50 focus:outline-none focus:border-white/30 
                           transition-all duration-300 animate-slide-up opacity-0 [animation-delay:800ms]
                           hover-glow"
                ></textarea>

                {submitStatus.message && (
                  <div 
                    className={`p-4 text-center rounded glass animate-fade-in ${
                      submitStatus.isError ? 'border-red-500/50 text-red-200' : 'border-green-500/50 text-green-200'
                    }`}
                  >
                    {submitStatus.message}
                  </div>
                )}

                <div className="flex justify-center animate-slide-up opacity-0 [animation-delay:900ms]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-modern glass px-12 py-3 border border-white text-white 
                             hover:bg-white hover:text-black transition-all duration-300
                             disabled:opacity-50 disabled:cursor-not-allowed
                             group relative overflow-hidden hover-lift"
                  >
                    <span className="relative z-10">
                      {isSubmitting ? 'SENDING...' : 'SENDEN'}
                    </span>
                  </button>
                </div>
              </form>

              {/* Company Info */}
              <div className="mt-16 text-center space-y-1 animate-slide-up opacity-0 [animation-delay:1000ms]">
                <p className="uppercase hover-lift">MECAGOTHITS</p>
                <p className="hover-lift">Bahnhofstrasse 1</p>
                <p className="hover-lift">6000 Luzern</p>
                <a 
                  href="mailto:info@mecagothits.ch" 
                  className="block hover-lift transition-all duration-300"
                >
                  info@mecagothits.ch
                </a>
              </div>

              {/* Social Links */}
              <div className="mt-8 flex justify-center space-x-6 animate-slide-up opacity-0 [animation-delay:1100ms]">
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
                    className="hover-lift transition-all duration-300"
                    style={{ animationDelay: `${1200 + (index * 100)}ms` }}
                  >
                    <Image 
                      src={social.icon} 
                      alt={social.alt} 
                      width={20} 
                      height={20} 
                      className="invert hover-glow" 
                    />
                  </a>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-8 flex justify-between items-center text-xs text-white/60 
                            animate-fade-in opacity-0 [animation-delay:1200ms]">
                <p className="hover-lift">© MECAGOTHITS</p>
                <Link href="/terms" className="hover-lift transition-colors">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage; 