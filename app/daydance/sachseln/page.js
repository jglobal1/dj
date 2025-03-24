'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ScrollToTop from '../../../components/ScrollToTop';

const SachselnPage = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-screen">
          <Image
            src="/images/sachseln.jpeg"
            alt="Sachseln Daydance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black">
            <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
              <h1 className="text-6xl md:text-8xl font-bold text-center mb-6">
                SACHSELN
                <span className="block text-4xl md:text-5xl mt-2">DAYDANCE</span>
              </h1>
              <p className="text-xl md:text-2xl text-center max-w-2xl mx-auto">
                Mountain vibes meet electronic beats
              </p>
            </div>
          </div>
        </section>

        {/* Info Section with Diagonal Design */}
        <section className="relative py-20">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-900/90 to-red-900/90 transform -skew-y-3"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="backdrop-blur-sm bg-black/20 p-8 rounded-lg">
                <h2 className="text-4xl font-bold mb-6">NEXT EVENT</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>8. Juni 2024</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>11:00 - 23:00</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>Sachseln Mountain, 6072 Sachseln</span>
                  </div>
                </div>
                <Link 
                  href="https://tickets.harmlos-techno.ch" 
                  target="_blank"
                  className="inline-block mt-8 px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-full hover:from-orange-600 hover:to-red-600 transition-all duration-300"
                >
                  GET TICKETS
                </Link>
              </div>
              <div className="relative h-[450px] rounded-lg overflow-hidden transform rotate-2 shadow-2xl">
                <Image
                  src="/images/alvin.jpg"
                  alt="Sachseln Venue"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Lineup Section with Staggered Grid */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">LINEUP</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Main Artists */}
              <div className="md:col-span-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Artist 1 */}
                  <div className="group relative h-[300px] overflow-hidden rounded-lg">
                    <Image
                      src="/images/gallery1.jpg"
                      alt="Artist 1"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold">MECAGOTHITS</h3>
                      <p className="text-orange-400">11:00 - 13:00</p>
                    </div>
                  </div>
                  {/* Artist 2 */}
                  <div className="group relative h-[300px] overflow-hidden rounded-lg mt-12">
                    <Image
                      src="/images/gallery2.jpg"
                      alt="Artist 2"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-6">
                      <h3 className="text-2xl font-bold">MECAGOTHITS</h3>
                      <p className="text-orange-400">13:00 - 15:00</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Side Artists */}
              <div className="space-y-6">
                {[3, 4, 5].map((i) => (
                  <div key={i} className="group relative h-[200px] overflow-hidden rounded-lg">
                    <Image
                      src={`/images/artist${i}.jpg`}
                      alt={`Artist ${i}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-xl font-bold">MECAGOTHITS</h3>
                      <p className="text-orange-400">Set Time</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-center text-2xl md:text-3xl mb-16 tracking-wider">
              HERZLICHEN DANK<br />AN UNSERE SPONSOREN
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 items-center">
              <div className="aspect-[3/2] relative">
                <Image
                  src="/images/sponsor.jpeg"
                  alt="Länderpark"
                  fill
                  className="object-contain filter invert"
                />
              </div>
              <div className="aspect-[3/2] relative">
                <Image
                  src="/images/sponsor2.png"
                  alt="DiWisa"
                  fill
                  className="object-contain filter invert"
                />
              </div>
              <div className="aspect-[3/2] relative">
                <Image
                  src="/images/sponsor3.jpeg"
                  alt="IPS"
                  fill
                  className="object-contain filter invert"
                />
              </div>
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
};

export default SachselnPage; 