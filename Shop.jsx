import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Shop = () => {
    const products = [
        { name: "AGAB Elite Tee", category: "Men's Training", price: "$45", img: "/assets/image-1.jpg" },
        { name: "Pro Track Suit", category: "Performance Gear", price: "$120", img: "/assets/image-4.jpg" },
        { name: "Victory Hoodie", category: "Lifestyle", price: "$85", img: "/assets/carnell.jpg" },
    ];

    return (
        <section id="shop" className="py-24 bg-white text-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header - Nike Style (Left Aligned, Big) */}
                <div className="mb-12 flex justify-between items-end">
                    <h2 className="text-6xl md:text-8xl font-nike font-bold uppercase tracking-tighter leading-none">
                        The Gear
                    </h2>
                    <div className="hidden md:flex gap-4">
                        <button className="rounded-full border border-gray-300 px-6 py-2 hover:border-black transition-colors font-medium">New Arrivals</button>
                        <button className="rounded-full border border-gray-300 px-6 py-2 hover:border-black transition-colors font-medium">Best Sellers</button>
                    </div>
                </div>

                {/* Featured Brand Block (Full Width) */}
                <div className="relative w-full h-[60vh] bg-[#f5f5f5] mb-16 overflow-hidden flex items-center justify-center group">
                    <img src="/assets/logo.jpg" alt="Brand" className="w-full h-full object-contain p-12 mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute bottom-12 left-8 md:left-12">
                        <h3 className="text-4xl md:text-6xl font-nike uppercase text-black mb-4">Personal<br />Branding</h3>
                        <button className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-colors">
                            Start Your Journey
                        </button>
                    </div>
                </div>

                {/* Product Carousel / Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {products.map((product, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            {/* Image Card - Light Grey Background */}
                            <div className="bg-[#f5f5f5] aspect-square mb-4 relative overflow-hidden">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Minimal Info */}
                            <div className="flex justify-between items-start px-2">
                                <div>
                                    <h3 className="font-medium text-lg text-black leading-tight">{product.name}</h3>
                                    <p className="text-gray-500 text-sm">{product.category}</p>
                                </div>
                                <span className="font-medium text-lg">{product.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <h3 className="text-3xl font-nike uppercase mb-6">See What Moves You</h3>
                    <button className="bg-black text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors">
                        Shop All Collection
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Shop;
