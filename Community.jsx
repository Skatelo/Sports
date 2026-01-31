import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, Calendar } from 'lucide-react';

const Community = () => {
    const locations = [
        { city: "Raleigh, NC", active: true },
        { city: "Los Angeles, CA", active: true },
        { city: "Dallas, TX", active: true },
        { city: "Orlando, FL", active: true },
    ];

    return (
        <section id="community" className="py-24 bg-zinc-950 text-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Spotlight Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-row-reverse mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="order-first lg:order-last"
                    >
                        {/* Using a placeholder for Daykwon since I don't have his specific pic identified, maybe image-4 or just a generic placeholder or the group one */}
                        <div className="relative rounded-2xl overflow-hidden border-2 border-white/10">
                            <img src="/assets/image-1.jpg" alt="Community Event" className="w-full h-[500px] object-cover" />
                            <div className="absolute top-4 right-4 bg-red-600 text-white p-3 rounded-full">
                                <Heart fill="white" />
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-red-500 font-bold tracking-widest uppercase mb-2 block">Community Impact</span>
                        <h2 className="text-4xl md:text-5xl font-black mb-6">VOLUNTEER SPOTLIGHT</h2>

                        <div className="bg-zinc-900/80 p-8 rounded-2xl border border-zinc-800 mb-8">
                            <h3 className="text-2xl font-bold text-white mb-2">Daykwon Smith</h3>
                            <p className="text-red-500 mb-4 font-medium">Community Champion</p>
                            <p className="text-gray-400 italic mb-6">
                                "Completed over 75 hours of service helping with toy drives and community events in Raleigh."
                            </p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                                <div className="flex items-center gap-1"><Calendar size={16} /> Since 2023</div>
                                <div className="flex items-center gap-1"><Heart size={16} /> 75+ Hours</div>
                            </div>
                        </div>

                        <p className="text-gray-400 text-lg leading-relaxed">
                            At AGAB, we believe in giving back to the neighborhoods that raised us. Success isn't just about what you achieve—it's about what you contribute.
                        </p>
                    </motion.div>
                </div>

                {/* Locations */}
                <div className="bg-gradient-to-r from-red-900/20 to-black p-12 rounded-3xl border border-red-900/30 text-center">
                    <h3 className="text-2xl font-bold mb-8">OUR FOOTPRINT</h3>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-12">
                        {locations.map((loc, index) => (
                            <div key={index} className="flex items-center gap-2 text-xl font-medium text-gray-300 hover:text-white transition-colors">
                                <MapPin className="text-red-500" /> {loc.city}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Community;
