'use client';

import Navigation from '../../components/Navigation';
import Image from 'next/image';

export default function TracklistPage() {
  const tracks = [
    "Vacant - Vesper", "Magisterium - Broken Radio", "Shft.rar - Maldicho",
    "Premiere: Footclan - Like a Boss", "Premiere: AnD - Chaos Ascending",
    "Premiere: Tarnish - Black Hole Factory", "CMRK - Dahaka",
    "Decadence - Sunset in Bret", "Ecus - Connex - Second Force",
    "Premiere: Exos - Mocoa Beats", "NHLS - Metamorphose",
    "Premiere: Rohrschack - Postcard From 1985", "Pakard - Verso de Nostalgia",
    "Pakard - Swomp", "Pakard - Tension", "Pakard - El Hombre Girls",
    "Pakard - Do You Hear Me", "Pakard - Reflejos", "Aldos - Isi",
    "BXTR & Diazepin - First Scape", "Danny Wabbit - Muay", "Fhase 87 - La Rage",
    "Semente Da Vida", "Pakard - Mi Destibo Es Lo Que Soy",
    "Pakard, Augustina Alkover - Soul Tribe", "Pakard - No Stress",
    "Paul Begge - 4 Fingers Methods", "HDER - Grain Pluck", "Ku-etzal - Evolution",
    "RVRSRVR - Hasty", "AXLR - Limitless", "I Got the Music - GRAVEKID",
    "NVNS - I Don't Know to Be Save", "Damp - Fire", "Marco Kanda - Levitate",
    "Nekro TFFV - Capitalism Means Getting Fucked", "Bollmann - Prime Nexus",
    "Matron & Gewoonraves - Knock Knock", "Mayska - Only Party", "Parapher - Y",
    "Parapher - X", "2Vne - Make You Mine", "Chateaux - All Problems Solved",
    "DICA - Gemini", "RDMTN - Street Soul", "Comrave & Ternash - F*ck It",
    "Comrade & Ternash - King Return", "Ternash - Black Hole",
    "Ternash - Arrogant Maron", "Ternash - Belial", "Ternash - Cyber Whistler",
    "ECZODIA - Give Em Hell", "QUASFAR - Hell Damage", "HERESYS - Free Your Mind",
    "Muzan - Algorithm", "Storm - Bass Mind", "CADZOWN - Satisfaction",
    "GALLO - Bass Drop", "Joey Risdon - Perception", "Unholy Devotion - Dogma",
    "Simon - Music Is My Religion", "Eczko - Even When I Lie",
    "Neodrama - Brazila", "Tempot - Grin Macabre", "R-Nin - Transmitted",
    "Jubatus - Korean Eyes", "Dr:Sound - Atache", "Ternash - Midnight Crysis",
    "Comrade & Ternash - F*ck It", "Mounem - Not Like Us",
    "AM - Destructive Strike", "Koda - 369", "DRos - Encore",
    "Klofama - Error", "Ikkhi - Everybody Break Down", "Raxeller - Malicious",
    "YESOLO - Nuclear Fallout", "Mike Steventon - Take Me There",
    "CDRC - All You Got", "Klofama x USH - Fueled On Vodka",
    "Nirvana - Smells Like Teen Spirit", "Outerkult - Hollow Faith",
    "Eczko, Renox - Domination", "Vino - All I Know Is Pain",
    "Hans Zimmer - Dune Theme", "Notax - I Don't Care", "Perle - IRma",
    "Moshpit FRDL", "Psychotik - Evil Incarnate", "NVNS - I Don't Know to Be Save",
    "To Infinity and Beyond", "Lady Gaga - Bad Romance",
    "Rorey - Echoes of Darkness", "KXCHR - Do You Wanna Dance",
    "KYCHR - Hou Hou", "Ceejay - Demons Taking Over Me",
    "Dometech - Everyone Lies", "DNNS - Curse Me with a Kickdrum",
    "Rythemboy x Selenite - Shut Your Eyes", "Mahtal - Clap That",
    "Indeed - Freedom Inside Your Illness", "Comrave & Ternash - King Return",
    "State of Minds - Mr Sandman", "Santos & Jxln - Absolute Destruction",
    "Occult Awakening", "2fel - Hijack Mission Ill", "Frik - She's Gone Psycho",
    "Miyuki Omaru - You & Me", "CDRC - All You Got", "Klofama x USH - Fueled on Vodka",
    "Low Impact - F*ck It"
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[50vh]">
        <Image
          src="/images/tracklist-hero.jpg"
          alt="DJ Setup"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70">
          <div className="container mx-auto h-full flex flex-col items-center justify-center px-4">
            <h1 className="text-6xl md:text-8xl font-bold text-center mb-4">TRACKLIST</h1>
            <p className="text-xl text-white/60">Latest Releases & Sets</p>
          </div>
        </div>
      </section>

      {/* Tracklist Section */}
      <section className="py-20 bg-zinc-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {tracks.map((track, index) => (
                <div 
                  key={index} 
                  className="flex items-center space-x-4 p-4 border border-white/10 hover:border-white/20 transition-colors"
                >
                  <span className="text-2xl font-bold text-white/20">{(index + 1).toString().padStart(2, '0')}</span>
                  <span className="text-lg text-white/80">{track}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Listen Now Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Listen Now</h2>
            <div className="flex justify-center space-x-8">
              <a 
                href="https://soundcloud.com/mecagothits" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image src="/images/soundcloud.svg" alt="SoundCloud" width={24} height={24} className="invert" />
                <span>SoundCloud</span>
              </a>
              <a 
                href="https://beacons.ai/mecagothits" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 opacity-80 hover:opacity-100 transition-opacity"
              >
                <Image src="/images/beacons.svg" alt="Beacons" width={24} height={24} className="invert" />
                <span>Beacons</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 