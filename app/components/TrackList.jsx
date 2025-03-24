'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tracks = [
  {
    category: "Latest Releases",
    tracks: [
      "Vacant - Vesper",
      "Magisterium - Broken Radio",
      "Shft.rar - Maldicho",
      "Premiere: Footclan - Like a Boss",
      "Premiere: AnD - Chaos Ascending",
      "Premiere: Tarnish - Black Hole Factory"
    ]
  },
  {
    category: "Featured Artists",
    tracks: [
      "CMRK - Dahaka",
      "Decadence - Sunset in Bret",
      "Ecus - Connex - Second Force",
      "Premiere: Exos - Mocoa Beats",
      "NHLS - Metamorphose",
      "Premiere: Rohrschack - Postcard From 1985"
    ]
  },
  {
    category: "Pakard Collection",
    tracks: [
      "Pakard - Verso de Nostalgia",
      "Pakard - Swomp",
      "Pakard - Tension",
      "Pakard - El Hombre Girls",
      "Pakard - Do You Hear Me",
      "Pakard - Reflejos",
      "Pakard - Mi Destibo Es Lo Que Soy",
      "Pakard, Augustina Alkover - Soul Tribe",
      "Pakard - No Stress"
    ]
  },
  {
    category: "Electronic Vibes",
    tracks: [
      "Aldos - Isi",
      "BXTR & Diazepin - First Scape",
      "Danny Wabbit - Muay",
      "Fhase 87 - La Rage",
      "Semente Da Vida",
      "Paul Begge - 4 Fingers Methods",
      "HDER - Grain Pluck",
      "Ku-etzal - Evolution"
    ]
  },
  {
    category: "Bass & Beats",
    tracks: [
      "RVRSRVR - Hasty",
      "AXLR - Limitless",
      "I Got the Music - GRAVEKID",
      "NVNS - I Don't Know to Be Save",
      "Damp - Fire",
      "Marco Kanda - Levitate",
      "Nekro TFFV - Capitalism Means Getting Fucked",
      "Bollmann - Prime Nexus"
    ]
  },
  {
    category: "Party Anthems",
    tracks: [
      "Matron & Gewoonraves - Knock Knock",
      "Mayska - Only Party",
      "Parapher - Y",
      "Parapher - X",
      "2Vne - Make You Mine",
      "Chateaux - All Problems Solved",
      "DICA - Gemini",
      "RDMTN - Street Soul"
    ]
  }
];

export default function TrackList() {
  const [selectedCategory, setSelectedCategory] = useState(tracks[0].category);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const filteredTracks = tracks.map(category => ({
    ...category,
    tracks: category.tracks.filter(track =>
      track.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.tracks.length > 0);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tracks..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setIsSearching(true);
            }}
            className="w-full px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full
                     text-white placeholder-white/50 focus:outline-none focus:border-blue-400
                     transition-all duration-300"
          />
          <button
            onClick={() => {
              setSearchQuery('');
              setIsSearching(false);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white
                     transition-colors duration-300"
          >
            {searchQuery ? '×' : '🔍'}
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-4 mb-8">
        {tracks.map((category) => (
          <button
            key={category.category}
            onClick={() => setSelectedCategory(category.category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                     ${selectedCategory === category.category
                       ? 'bg-blue-500 text-white'
                       : 'bg-white/5 text-white/70 hover:bg-white/10'
                     }`}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Track List */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredTracks
            .find(cat => cat.category === selectedCategory)
            ?.tracks.map((track, index) => (
              <motion.div
                key={track}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group relative p-6 bg-white/5 backdrop-blur-sm rounded-xl
                         border border-white/10 hover:border-blue-400/50
                         transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-white font-medium">{track}</h3>
                  <span className="text-white/30 group-hover:text-blue-400 transition-colors">
                    →
                  </span>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </AnimatePresence>

      {/* No Results Message */}
      {filteredTracks.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-12"
        >
          <p className="text-white/50 text-lg">No tracks found matching your search.</p>
        </motion.div>
      )}
    </div>
  );
} 