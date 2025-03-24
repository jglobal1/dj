'use client';

import Image from 'next/image';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const CrewPage = () => {
  const upcomingReleases = [
    {
      title: "NEW Infested EP",
      date: "25.10.24",
      description: "Available on all platforms"
    },
    {
      title: "HEAVY IS THE CROWN",
      date: "20.12.24",
      description: "Second EP of 2024"
    }
  ];

  const pastGigs = [
    "13. März - Italien Parma, Tabu",
    "14. September - @ravesandvibes.events",
    "16. November - @ravesandvibes.events (ZH)",
    "22. November - @nebel_bar (Basel)"
  ];

  const labels = [
    "Objection",
    "MTRPLS",
    "Phobia Project",
    "Hard Vision",
    "Schissma Rave Show"
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/images/background.jpg"
          alt="Meca performing"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80">
          <div className="container mx-auto h-full flex items-center justify-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-center">CREW</h1>
          </div>
        </div>
      </section>

      {/* Artist Bio Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Artist Image */}
              <div className="relative aspect-square">
                <Image
                  src="/images/alvin.jpg"
                  alt="Meca"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Bio Content */}
              <div className="space-y-6">
                <h2 className="text-4xl font-bold">MECAGOTHITS</h2>
                <p className="text-white/80">
                  Originating from Berlin, Meca lets his multinational heritage influence his sets. 
                  His signature sound consists of raw industrial endurance mixed with melodic and vocal elements.
                </p>
                <p className="text-white/80">
                  Now residing in Zürich, Meca continues to shape his style and expand his audience. 
                  As a Mixed Child with Asian/African/German roots, he brings diverse influences to his music.
                </p>
                <div className="flex space-x-4">
                  <a 
                    href="https://t.me/MecagothitsSoftwarecompany" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <Image src="/images/telegram.svg" alt="Telegram" width={24} height={24} className="invert" />
                  </a>
                  <a 
                    href="https://soundcloud.com/mecagothits" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <Image src="/images/soundcloud.svg" alt="SoundCloud" width={24} height={24} className="invert" />
                  </a>
                  <a 
                    href="https://beacons.ai/mecagothits" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    <Image src="/images/beacons.svg" alt="Beacons" width={24} height={24} className="invert" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Releases Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">UPCOMING RELEASES</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingReleases.map((release, index) => (
                <div key={index} className="bg-black/50 p-8 backdrop-blur-sm">
                  <h3 className="text-xl font-bold mb-2">{release.title}</h3>
                  <p className="text-white/60 mb-4">{release.date}</p>
                  <p className="text-white/80">{release.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Past Gigs Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">PAST GIGS</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {pastGigs.map((gig, index) => (
                <div key={index} className="border border-white/10 p-6">
                  <p className="text-white/80">{gig}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Labels Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">FEATURED ON</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {labels.map((label, index) => (
                <div key={index} className="border border-white/10 p-6 text-center">
                  <p className="text-white/80">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Release Feature */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">LATEST RELEASE</h2>
            <div className="bg-zinc-900 p-8">
              <h3 className="text-2xl font-bold mb-4">HATAMOTO EP</h3>
              <p className="text-white/80 mb-6">
                The 2nd EP is dark, Hard, FAST and RAW into the circles of Japanese arts. 
                "HATAMOTO" is a high rank Japanese edition from the 1600s (guardian of the flag). 
                Expect a long journey into the manifestation of a high bread reality.
              </p>
              <p className="text-white/60">
                Unnerving melodies and distortion sounds. Less harmony to satisfy your cravings 
                for hard and addictable emotions. Hunting the eternal incarnation!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Genre Tags */}
      <section className="py-12 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">
            <span className="px-6 py-2 border border-white/20 text-sm">HARD TECHNO</span>
            <span className="px-6 py-2 border border-white/20 text-sm">HARDCORE</span>
            <span className="px-6 py-2 border border-white/20 text-sm">INDUSTRIAL</span>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default CrewPage; 