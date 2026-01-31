import React from 'react';
import { motion } from 'framer-motion';
import { Scale, Mic2, Dumbbell, Briefcase, ArrowUpRight } from 'lucide-react';

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-end mb-16">
                    <h2 className="text-5xl md:text-7xl font-nike font-bold uppercase tracking-tighter leading-none">
                        What We Do
                    </h2>
                    <div className="hidden md:block text-xl font-medium max-w-xs text-right">
                        Providing elite level support for the next generation of icons.
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[800px]">

                    {/* Main Large Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-[#f5f5f5] rounded-3xl p-8 flex flex-col justify-between"
                    >
                        <div className="absolute inset-0 bg-[url('/assets/image-4.jpg')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 md:scale-105 group-hover:scale-100 opacity-90"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                        <div className="relative z-10 flex justify-between items-start">
                            <Dumbbell className="text-white w-12 h-12" />
                            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <ArrowUpRight className="text-white" />
                            </div>
                        </div>

                        <div className="relative z-10 text-white">
                            <h3 className="text-4xl md:text-6xl font-nike uppercase mb-2">Performance<br />Training</h3>
                            <p className="max-w-md text-lg text-gray-200">Personalized programs from elite coaches to maximize your physical potential on the field.</p>
                        </div>
                    </motion.div>

                    {/* Secondary Card 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-[#f5f5f5] rounded-3xl p-8 flex flex-col justify-between group hover:bg-black hover:text-white transition-colors duration-500"
                    >
                        <div className="flex justify-between items-start">
                            <Briefcase className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-nike uppercase mb-2">Athlete Representation</h3>
                            <p className="text-sm font-medium opacity-70">Contract & Career Mgmt</p>
                        </div>
                    </motion.div>

                    {/* Secondary Card 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-[#f5f5f5] rounded-3xl p-8 flex flex-col justify-between group hover:bg-black hover:text-white transition-colors duration-500"
                    >
                        <div className="flex justify-between items-start">
                            <Mic2 className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-nike uppercase mb-2">Talent Management</h3>
                            <p className="text-sm font-medium opacity-70">For Artists & Entertainers</p>
                        </div>
                    </motion.div>

                    {/* Secondary Card 3 */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-1 bg-black text-white rounded-3xl p-8 flex flex-col justify-between group overflow-hidden relative"
                    >
                        <div className="absolute top-0 right-0 p-32 bg-red-600 blur-[80px] rounded-full opacity-20"></div>
                        <div className="relative z-10 flex justify-between items-start">
                            <Scale className="w-8 h-8 text-red-500" />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-3xl font-nike uppercase mb-2">Legal Advisory</h3>
                            <p className="text-sm font-medium text-gray-400">Contracts, Real Estate, Assets</p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Services;
