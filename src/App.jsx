import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Music, RefreshCw, Sparkles, Star, Camera, 
  MessageCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Images
import photo1 from './assets/photo1.jpg';
import photo3 from './assets/photo3.jpeg';
import birthdaySong from './assets/Audio.mpeg';

const FloatingSparkle = ({ delay }) => (
  <motion.div
    initial={{ y: "100vh", x: Math.random() * 100 + "vw", scale: 0, opacity: 0 }}
    animate={{ 
      y: "-10vh", 
      scale: [0, 1.2, 1], 
      opacity: [0, 0.5, 0],
      rotate: [0, 360]
    }}
    transition={{ 
      duration: 10 + Math.random() * 5, 
      delay, 
      repeat: Infinity,
      ease: "linear"
    }}
    className="fixed pointer-events-none z-0 text-royal-gold/40"
  >
    <Star size={16 + Math.random() * 16} fill="currentColor" className="glowing-star" />
  </motion.div>
);

const App = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [candlesBlown, setCandlesBlown] = useState(false);
  const [envelopeOpen, setEnvelopeOpen] = useState(false);
  const [letterRevealed, setLetterRevealed] = useState(false);
  const audioRef = useRef(null);
  
  const searchParams = new URLSearchParams(window.location.search);
  const name = searchParams.get('name') || "Pooojaa";
  const message = searchParams.get('message') || "To my dearest friend,\nLife feels so much brighter with you in it. Thank you for always standing by me and for making every moment so special.\nYou mean more to me than I can ever truly express.\nI hope this year brings you all the joy, love, and happiness you deserve, and fills your life with beautiful memories.\nHappy Birthday! 🎂✨💖";

  useEffect(() => {
    if (showContent) {
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#d4af37', '#f59e0b', '#b76e79', '#ffffff']
      });
    }
  }, [showContent]);

  const handleStart = () => {
    setShowContent(true);
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log("Audio play blocked", e));
    }
  };

  const handleBlowCandles = () => {
    setCandlesBlown(true);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#ffffff', '#facc15']
    });
    
    // Step-by-step reveal
    setTimeout(() => {
      setEnvelopeOpen(true);
    }, 1500);

    setTimeout(() => {
      setLetterRevealed(true);
    }, 3000);
  };

  const handleBackToHome = () => {
    setCandlesBlown(false);
    setEnvelopeOpen(false);
    setLetterRevealed(false);
    setShowContent(false);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Audio Setup */}
      <audio ref={audioRef} src={birthdaySong} loop />

      {/* Royal Sparkles Background */}
      {[...Array(20)].map((_, i) => (
        <FloatingSparkle key={i} delay={i * 0.8} />
      ))}

      {/* Main Content Interface */}
      <section className="min-h-screen flex flex-col items-center justify-center relative z-10 px-4">
        {!showContent ? (
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="mb-12 flex justify-center"
            >
              <div className="relative group perspective-1000">
                <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-full border border-white/20 shadow-[0_0_50px_rgba(212,175,55,0.3)] group-hover:shadow-[0_0_80px_rgba(212,175,55,0.5)] transition-all">
                  <Star size={80} className="text-royal-gold glowing-star" fill="#d4af37" />
                </div>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-6xl md:text-8xl font-serif gold-text mb-6 drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
            >
              Happy Birthday {name}🎉
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-xl md:text-3xl text-gray-400 font-light tracking-widest uppercase mb-12"
            >
              Exclusively for a truly irreplaceable soul ✨
            </motion.p>
            
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              onClick={handleStart}
              className="glass-card px-10 py-5 rounded-full flex items-center gap-4 hover:scale-105 hover:bg-white/10 active:scale-95 transition-all text-royal-gold group border-royal-gold/20"
            >
              <Music className="group-hover:rotate-12 transition-transform" />
              <span className="font-bold tracking-wider">ENTER THE SURPRISE 🔑</span>
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full max-w-5xl space-y-32 py-24 px-4"
          >

            {/* Gallery Section */}
            <div className="space-y-12">
              <div className="flex flex-col items-center gap-4 text-center">
                <h2 className="gold-text text-xl md:text-2xl italic font-serif whitespace-pre-line leading-relaxed">
                  "You’re not just my friend, you’re my favorite person.
I hope this year brings you all the joy, love, and happiness you truly deserve.
Wishing you a year ahead filled with as much happiness as you bring to everyone around you.
Happy Birthday! 💖🎂✨👫"
                </h2>
                <div className="w-40 h-px bg-white/20"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 mt-12">
                <motion.div 
                  whileHover={{ scale: 1.03, y: -10 }}
                  className="group relative perspective-1000"
                >
                  <div className="absolute inset-0 bg-royal-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="glass-card p-3 rounded-3xl overflow-hidden relative z-10">
                    <img src={photo1} alt="Memories 1" className="w-full h-[600px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                </motion.div>
                
                <motion.div 
                  whileHover={{ scale: 1.03, y: -10 }}
                  className="group relative perspective-1000 md:mt-12"
                >
                  <div className="absolute inset-0 bg-royal-gold/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="glass-card p-3 rounded-3xl overflow-hidden relative z-10">
                    <img src={photo3} alt="Memories 2" className="w-full h-[600px] object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Virtual Cake & Envelope Section */}
            <div className="py-20 flex flex-col items-center text-center">
              {!candlesBlown ? (
                <div className="space-y-10">
                  <h2 className="gold-text text-3xl">Time for a Birthday Wish! 🕯️</h2>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    onClick={handleBlowCandles}
                    className="cursor-pointer flex flex-col items-center gap-4"
                  >
                    <div className="text-9xl animate-bounce">🎂</div>
                    <div className="flex gap-2">
                      {[...Array(3)].map((_, i) => (
                        <motion.div key={i} animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, delay: i*0.2 }} className="text-3xl">🔥</motion.div>
                      ))}
                    </div>
                    <span className="text-royal-gold mt-6 font-serif tracking-widest animate-pulse uppercase text-sm">Tap to Blow Out Candles</span>
                  </motion.div>
                </div>
              ) : (
                <div className="w-full max-w-4xl mx-auto mt-20 min-h-[600px] flex items-center justify-center">
                  <AnimatePresence mode="wait">
                    {!envelopeOpen ? (
                      <motion.h3 
                        key="arriving"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="gold-text text-2xl italic"
                      >
                        A special message is arriving... ✨
                      </motion.h3>
                    ) : (
                      <motion.div 
                        key="reveal-container"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="relative w-full"
                      >
                        {/* Envelope & Letter Group */}
                        <div className="relative w-full max-w-2xl mx-auto aspect-[4/3] perspective-1000">
                          {/* Envelope Back */}
                          <motion.div 
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ 
                              y: 0, 
                              opacity: letterRevealed ? 0 : 1, 
                              scale: letterRevealed ? 0.8 : 1 
                            }}
                            className="envelope-layer envelope-back h-full w-full"
                          ></motion.div>
                          
                          {/* The Letter (Message Card) */}
                          <motion.div 
                            initial={{ y: 0, opacity: 0 }}
                            animate={{ 
                              y: letterRevealed ? -100 : (envelopeOpen ? -150 : 0), 
                              opacity: 1,
                              scale: 1,
                              zIndex: letterRevealed ? 50 : 10
                            }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            className="absolute left-4 right-4 top-1/2 -translate-y-1/2"
                          >
                            <div className={`letter-content ${letterRevealed ? 'shadow-[0_0_50px_rgba(212,175,55,0.2)]' : ''}`}>
                              <MessageCircle size={32} className="mx-auto mb-6 text-royal-gold" />
                              <p className="text-lg md:text-2xl font-handwritten leading-relaxed text-white italic whitespace-pre-line transition-all duration-700">
                                "{message}"
                              </p>
                              {letterRevealed && (
                                <motion.div 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="mt-8 flex justify-center gap-2"
                                >
                                  <Sparkles className="text-royal-gold animate-pulse" size={20} />
                                  <Heart className="text-rose-gold animate-bounce" size={20} fill="currentColor" />
                                  <Sparkles className="text-royal-gold animate-pulse" size={20} />
                                </motion.div>
                              )}
                            </div>
                          </motion.div>

                          {/* Envelope Front */}
                          <motion.div 
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ 
                              y: 0, 
                              opacity: letterRevealed ? 0 : 1, 
                              scale: letterRevealed ? 0.8 : 1 
                            }}
                            className="envelope-layer envelope-front h-full w-full"
                          ></motion.div>

                          {/* Envelope Flap & Seal */}
                          <motion.div 
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ 
                              y: 0, 
                              opacity: letterRevealed ? 0 : 1 
                            }}
                            className={`envelope-layer envelope-flap h-1/2 w-full ${envelopeOpen ? 'open' : ''}`}
                          >
                            {!envelopeOpen && (
                              <div className="envelope-seal">
                                <Heart size={20} className="text-white" fill="white" />
                              </div>
                            )}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Final Footer Section */}
            <div className="text-center space-y-12 pb-20">
              <div className="flex justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: [0, -2, 2, 0] }}
                  onClick={handleBackToHome}
                  className="glass-card px-10 py-4 rounded-full flex items-center justify-center gap-3 text-royal-gold border-royal-gold/30 hover:bg-white/10"
                >
                  <RefreshCw size={24} className={candlesBlown ? "animate-spin-slow" : ""} />
                  <span className="font-bold tracking-wider">BACK TO HOME</span>
                </motion.button>
              </div>
              <p className="mt-20 text-gray-700 font-light tracking-[0.5em] text-xs">EST. 2026 • BIRTHDAY CELEBRATION</p>
            </div>
          </motion.div>
        )}
      </section>

      {/* Wave Visualizer Footer */}
      {showContent && isPlaying && (
        <div className="fixed bottom-0 left-0 right-0 flex items-end justify-center gap-1.5 h-16 z-50 pointer-events-none pb-2">
          {[...Array(40)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ height: [5, 30 + Math.random() * 40, 5] }}
              transition={{ repeat: Infinity, duration: 0.6 + Math.random()*0.4, delay: i * 0.02 }}
              className="w-1 bg-royal-gold/30 rounded-full"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
