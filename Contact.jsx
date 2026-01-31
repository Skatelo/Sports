import React from 'react';
import { Mail, Instagram, Twitter, Facebook } from 'lucide-react';

const Contact = () => {
    return (
        <footer id="contact" className="bg-black text-white pt-24 pb-8 border-t border-zinc-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                    <div>
                        <span className="text-red-600 font-bold tracking-widest uppercase">Get In Touch</span>
                        <h2 className="text-4xl md:text-5xl font-black mt-2 mb-6">JOIN THE MOVEMENT</h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-md">
                            Ready to take your game to the next level? Contact AGAB Athletics and Entertainment today.
                        </p>

                        <div className="flex items-center gap-4 mb-8">
                            <a href="mailto:lewiscarnelll24@gmail.com" className="flex items-center gap-3 bg-zinc-900 px-6 py-4 rounded-xl hover:bg-zinc-800 transition-colors border border-zinc-800">
                                <Mail className="text-red-500" />
                                <span className="font-medium">lewiscarnelll24@gmail.com</span>
                            </a>
                        </div>

                        <div className="flex gap-4">
                            {[Instagram, Twitter, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors text-white">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <form className="bg-zinc-900/50 p-8 rounded-2xl border border-zinc-800" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">First Name</label>
                                <input type="text" className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="John" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-400 mb-2">Last Name</label>
                                <input type="text" className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="Doe" />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                            <input type="email" className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="john@example.com" />
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea rows="4" className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 focus:outline-none focus:border-red-600 transition-colors" placeholder="Tell us about yourself..."></textarea>
                        </div>
                        <button className="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-700 transition-colors shadow-lg shadow-red-600/20">
                            SEND MESSAGE
                        </button>
                    </form>
                </div>

                <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} AGAB Athletics and Entertainment LLC. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Contact;
