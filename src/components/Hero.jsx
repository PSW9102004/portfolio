import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between">

                {/* Text Content */}
                <div className="md:w-1/2 mt-10 md:mt-0 text-center md:text-left">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-gold-600 font-medium mb-4 tracking-wide uppercase"
                    >
                        Software Development Engineer I
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-6 leading-tight"
                    >
                        Hello, I'm <br />
                        <span className="text-gold-500">Prathamesh Wagh</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0"
                    >
                        Passionate about extracting insights from data and building intelligent systems.
                        Turning complex problems into elegant solutions.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col md:flex-row items-center gap-4 justify-center md:justify-start"
                    >
                        <a
                            href="#projects"
                            className="px-8 py-3 bg-gold-500 text-white rounded-full font-medium hover:bg-gold-600 transition-colors flex items-center gap-2 shadow-lg shadow-gold-200"
                        >
                            View My Work <ArrowRight size={18} />
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1ew1gcEyxk_yfntRxHJ2ZHPB3PMKmCZrt/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-white text-gray-900 border border-gray-200 rounded-full font-medium hover:border-gold-500 hover:text-gold-500 transition-colors flex items-center gap-2"
                        >
                            Download Resume <Download size={18} />
                        </a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center gap-4 mt-8 justify-center md:justify-start"
                    >
                        <a href="https://github.com/PSW9102004" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-gold-600 transition-colors"><Github size={24} /></a>
                        <a href="https://www.linkedin.com/in/prathamesh-wagh136" target="_blank" rel="noopener noreferrer" className="p-2 text-gray-600 hover:text-gold-600 transition-colors"><Linkedin size={24} /></a>
                        <a href="mailto:waghprathamesh874@gmail.com" className="p-2 text-gray-600 hover:text-gold-600 transition-colors"><Mail size={24} /></a>
                    </motion.div>
                </div>

                {/* Image */}
                <div className="md:w-1/2 flex justify-center md:justify-end">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gold-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                            <img
                                src="profile.jpg"
                                alt="Prathamesh Wagh"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-8 -left-4 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3"
                        >
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-gray-900">SDE-I @ CareEdge Analytics</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
