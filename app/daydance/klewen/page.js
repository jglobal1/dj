'use client';

import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../../components/Navigation';
import Footer from '../../../components/Footer';
import ScrollToTop from '../../../components/ScrollToTop';

const KlewenPage = () => {
  const artists = [
    'THOMAS SCHUMACHER',
    'KHAINZ',
    'WHEREISVERO',
    'DISTANT SOUL',
    'TONY CASANOVA',
    'ANIMAL TRAINER'
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative h-screen">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/klewen.jpeg"
              alt="Klewen Mountains"
              fill
              className="object-cover"
              style={{ filter: 'brightness(0.6) saturate(1.2)' }}
            />
            <div className="absolute inset-0 bg-blue-900/30 mix-blend-color"></div>
          </div>
          
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 tracking-wider">
              KLEWEN
            </h1>
            <div className="text-4xl md:text-6xl font-light tracking-[0.2em] text-white/90">
              DAYDANCE
            </div>
            <div className="mt-8 text-xl font-semibold tracking-widest">
              SOLD OUT
            </div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl text-center mb-16 tracking-wider">
              TECHNO MIT BLICK ÜBER DEN VIERWALDSTÄTTERSEE
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Sold Out Card */}
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-white/10 text-center">
                <div className="w-12 h-12 mx-auto mb-4">
                  <Image
                    src="/images/ticket.svg"
                    alt="Ticket"
                    width={48}
                    height={48}
                    className="invert"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">SOLD OUT</h3>
                <p className="text-white/70">Alle Tickets sind restlos ausverkauft.</p>
              </div>

              {/* Date Card */}
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-white/10 text-center">
                <div className="w-12 h-12 mx-auto mb-4">
                  <Image
                    src="/images/clock.svg"
                    alt="Clock"
                    width={48}
                    height={48}
                    className="invert"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">22. MÄRZ 2025</h3>
                <p className="text-white/70">12 - 22 UHR</p>
              </div>

              {/* Location Card */}
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-white/10 text-center">
                <div className="w-12 h-12 mx-auto mb-4">
                  <Image
                    src="/images/location.svg"
                    alt="Location"
                    width={48}
                    height={48}
                    className="invert"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">KLEWENALP</h3>
                <p className="text-white/70">Erlebe elektronische Beats inmitten der Bergwelt auf 1600 Metern über Meer</p>
                <Link 
                  href="#location" 
                  className="inline-block mt-4 px-6 py-2 border border-white/20 rounded-full 
                           hover:bg-white/10 transition-all duration-300"
                >
                  zum Standort
                </Link>
              </div>

              {/* Artists Card */}
              <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-white/10 text-center">
                <div className="w-12 h-12 mx-auto mb-4">
                  <Image
                    src="/images/artists.svg"
                    alt="Artists"
                    width={48}
                    height={48}
                    className="invert"
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">6 ARTISTS</h3>
                <p className="text-white/70">Erlebe eine sorgfältig ausgewählte Mischung aus Talenten</p>
                <div className="mt-4 space-y-2">
                  {artists.map((artist) => (
                    <div key={artist} className="text-sm font-medium tracking-wider hover:text-white/80 cursor-pointer">
                      {artist}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-20 bg-white text-black">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-4xl font-bold mb-16 tracking-wider text-center">INFOS</h2>
            
            <div className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <h3 className="text-xl font-bold tracking-wider">BEI SCHLECHTEM WETTER</h3>
                <div className="md:col-span-2">
                  <p>Die Veranstaltung findet auch bei Schneefall wie geplant statt. Sollten jedoch extreme Wetterbedingungen auftreten, die die Sicherheit unserer Gäste und Mitarbeitenden gefährden, behalten wir uns vor, den Event abzusagen. In diesem Fall erstatten wir dir selbstverständlich den Ticketpreis zurück.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <h3 className="text-xl font-bold tracking-wider">ESSEN & GETRÄNKE</h3>
                <div className="md:col-span-2">
                  <p>Ein vielseitiges Angebot an Getränken findet ihr auf dem Eventgelände an der Bar. Verpflegung gibt es im Berggasthaus KlewenStube, unmittelbar neben dem Eventgelände.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <h3 className="text-xl font-bold tracking-wider">ZAHLUNGSMITTEL: CASHLESS</h3>
                <div className="md:col-span-2">
                  <p>Wir setzen auf ein Cashless-Erlebnis. Bequem und einfach mit Karte oder TWINT bezahlen.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                <h3 className="text-xl font-bold tracking-wider">AN- UND ABREISE</h3>
                <div className="md:col-span-2">
                  <p>Dein Gondelbahnticket ist im Preis inbegriffen. Die Talstation erreichst du bequem mit dem ÖV oder dem Auto.</p>
                </div>
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

        {/* Newsletter Section */}
        <section className="py-20 px-4 bg-black/50 backdrop-blur-lg">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-2xl md:text-3xl mb-8 tracking-wider">
              DU WILLST KEINEN EVENT<br />VERPASSEN?
            </h2>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Vorname"
                  className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 
                           focus:outline-none focus:border-white/40 transition-colors"
                />
                <input
                  type="text"
                  placeholder="Nachname"
                  className="bg-white/5 border border-white/20 rounded-lg px-4 py-3 
                           focus:outline-none focus:border-white/40 transition-colors"
                />
              </div>
              <input
                type="email"
                placeholder="E-Mail-Adresse *"
                className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 
                         focus:outline-none focus:border-white/40 transition-colors"
              />
              <div className="flex items-center justify-center space-x-2">
                <input
                  type="checkbox"
                  id="privacy"
                  className="rounded border-white/20"
                />
                <label htmlFor="privacy" className="text-sm text-white/80">
                  Ich habe die Datenschutzerklärung zur Kenntnis genommen.
                </label>
              </div>
              <button
                type="submit"
                className="px-8 py-3 bg-white text-black rounded-lg font-medium 
                         hover:bg-white/90 transition-colors duration-300"
              >
                Abonnieren
              </button>
            </form>
          </div>
        </section>

        {/* Artist Lineup */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-4xl font-bold mb-12 text-center">LINEUP</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Artist 3 */}
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <Image
                  src="/images/artist3.jpg"
                  alt="DJ Ruska"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold">MECAGOTHITS</h3>
                  <p className="text-gray-300">13:00 - 15:00</p>
                </div>
              </div>

              {/* Artist 4 */}
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <Image
                  src="/images/artist4.jpg"
                  alt="DJ Alvin"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold">MECAGOTHITS</h3>
                  <p className="text-gray-300">15:00 - 17:00</p>
                </div>
              </div>

              {/* Artist 5 */}
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <Image
                  src="/images/artist5.jpg"
                  alt="DJ Territory"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold">MECAGOTHITS</h3>
                  <p className="text-gray-300">17:00 - 19:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square relative overflow-hidden group">
                  <Image
                    src={`/images/gallery${i}.jpg`}
                    alt={`Gallery image ${i}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
};

export default KlewenPage; 