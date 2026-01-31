import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, ShieldCheck } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-zinc-950 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* CEO Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                        <img
                            src="/assets/carnell.jpg"
                            alt="Carnell Lewis CEO"
                            className="relative rounded-2xl shadow-2xl w-full h-[600px] object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                        />
                        <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-6 rounded-xl border border-white/10">
                            <h3 className="text-2xl font-bold text-white">Carnell Lewis</h3>
                            <p className="text-red-500 font-medium">CEO & Founder</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-red-500 font-bold tracking-wider uppercase mb-2 block">The Visionary</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                            FROM THE FIELD <br /> TO THE BOARDROOM
                        </h2>
                        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                            As a former two-sport college athlete with over four years of specialized experience in the sports and entertainment industry, Carnell Lewis understands what it takes to win.
                        </p>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            AGAB (Attitude Greatness Aspirations Blessings) was built on the foundation that talent needs more than just opportunity—it needs cultivation, protection, and strategic direction to reach the pinnacle of success.
                        </p>

                        <div className="p-6 bg-white/5 rounded-xl block border-l-4 border-red-600">
                            <p className="text-xl text-white italic font-light">"Our mission is to help athletes, artists, and actors reach their full potential through expert guidance and luxury gear."</p>
                        </div>
                    </motion.div>
                </div>

                {/* Core Values */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">OUR CORE VALUES</h2>
                    <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <ShieldCheck size={40} />,
                            title: "Integrity",
                            desc: "We operate with unshakeable honesty and transparency in every deal."
                        },
                        {
                            icon: <Users size={40} />,
                            title: "Teamwork",
                            desc: "Success is a collective effort. We win together, always."
                        },
                        {
                            icon: <Award size={40} />,
                            title: "Commitment",
                            desc: "A relentless pursuit of quality and excellence in everything we do."
                        }
                    ].map((value, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            className="bg-zinc-900/50 p-8 rounded-2xl border border-white/5 hover:border-red-600/50 hover:bg-zinc-900 transition-all group"
                        >
                            <div className="w-16 h-16 bg-red-600/10 rounded-full flex items-center justify-center text-red-500 mb-6 group-hover:bg-red-600 group-hover:text-white transition-all">
                                {value.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                            <p className="text-gray-400">{value.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default About;
