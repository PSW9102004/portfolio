import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Context-Based RAG System",
            description: "A document-based Q&A system using Retrieval-Augmented Generation (RAG). Built with LangChain, ChromaDB, and OpenAI embeddings to provide accurate answers from large text files.",
            tags: ["Python", "LangChain", "OpenAI", "ChromaDB"],
            github: "https://github.com/PSW9102004/LLM_RAG_Document_QnA",
            demo: "#"
        },
        {
            title: "Real-time Code Editor",
            description: "A collaborative code editor enabling multiple users to edit simultaneously. Features unique room IDs, secure session access, and syntax highlighting.",
            tags: ["React", "Socket.IO", "MongoDB", "Node.js"],
            github: "https://github.com/PSW9102004/Code-Editor",
            demo: "#"
        },
        {
            title: "AI Hangman Game",
            description: "Engineered a sophisticated Hangman solver utilizing 4-gram precision from a 50K-word dataset. Developed probabilistic algorithms for bigram, trigram, and 4-gram probability calculations to enhance adaptive letter predictions.",
            tags: ["Python", "N-gram Model", "Probabilistic Modeling"],
            github: "https://github.com/PSW9102004/AI-Hangman---Word-Guessing/tree/main",
            demo: "#"
        },
        {
            title: "Cab Booking App",
            description: "Cross-platform Flutter app for cab bookings with configurable add-ons. Includes a Next.js admin dashboard for managing listings and tracking rides.",
            tags: ["Flutter", "Firebase", "Next.js", "TypeScript"],
            github: "https://github.com/PSW9102004/Cab-Booking-App",
            demo: "#"
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                        Featured <span className="text-gold-500">Projects</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A selection of projects that demonstrate my expertise in data science and software engineering.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="p-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-gold-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-6 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-medium rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 hover:text-gold-600 transition-colors text-sm font-medium"
                                    >
                                        <Github size={18} /> Code
                                    </a>
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-600 hover:text-gold-600 transition-colors text-sm font-medium"
                                    >
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
