import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <section id="hero" className="relative h-screen overflow-hidden flex items-center justify-center">
            {/* Background with Parallax */}
            <motion.div
                style={{ y }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
                <img
                    src="/assets/image-4.jpg"
                    alt="Athlete Training"
                    className="w-full h-full object-cover object-center scale-110"
                />
            </motion.div>

            {/* Content */}
            <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-red-600/20 text-red-500 text-sm font-bold tracking-widest uppercase mb-6 border border-red-600/30 backdrop-blur-sm">
                        Welcome to the Future
                    </span>
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-nike font-bold text-white leading-none mb-8 uppercase tracking-tighter mix-blend-difference">
                        INSPIRING <br />
                        <span className="text-white">GREATNESS</span><br />
                        & EXCELLENCE
                    </h1>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
                        <motion.a
                            href="#shop"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-red-600 text-white font-bold rounded-full text-lg shadow-[0_0_20px_rgba(220,38,38,0.5)] hover:bg-red-700 transition-colors w-full sm:w-auto"
                        >
                            JOIN THE TEAM
                        </motion.a>
                        <motion.a
                            href="#about"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/20 font-bold rounded-full text-lg hover:bg-white/20 transition-colors w-full sm:w-auto"
                        >
                            DISCOVER MORE
                        </motion.a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-20"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
