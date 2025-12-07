import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-3xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-8">
                        About <span className="text-gold-500">Me</span>
                    </h2>

                    <div className="prose prose-lg text-gray-600 mx-auto">
                        <p className="mb-6">
                            I am a final year B.Tech student at <strong>IIITDM Jabalpur</strong>, specializing in Electronics and Communication Engineering.
                            My passion lies in the intersection of <strong>Data Science</strong> and <strong>Full Stack Development</strong>.
                        </p>
                        <p className="mb-6">
                            I have a strong track record in competitive programming with a <strong>LeetCode rating of 1800+</strong> and have solved over 400 problems.
                            I was also selected for the prestigious <strong>Amazon ML Challenge</strong>, ranking in the top 60 nationwide.
                        </p>
                        <p>
                            I enjoy building intelligent systems, from RAG-based LLM applications to real-time collaborative tools.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { number: '400+', label: 'LeetCode Problems' },
                            { number: 'Top 60', label: 'Amazon ML Challenge' },
                            { number: '1800+', label: 'Contest Rating' }
                        ].map((stat, index) => (
                            <div key={index} className="p-6 bg-gray-50 rounded-2xl">
                                <h3 className="text-4xl font-bold text-gold-500 mb-2">{stat.number}</h3>
                                <p className="text-gray-600 font-medium">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
