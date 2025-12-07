import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        {
            category: "Data Science & ML",
            items: ["Python", "PyTorch", "TensorFlow", "Scikit-Learn", "Pandas", "NumPy", "PySpark", "BigQuery"]
        },
        {
            category: "Web Development",
            items: ["React", "Node.js", "Next.js", "TypeScript", "Flask", "Django", "HTML/CSS"]
        },
        {
            category: "CS Fundamentals & Tools",
            items: ["C++", "SQL", "Git", "Linux", "OOP", "DBMS", "OS", "CN"]
        }
    ];

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">
                        My <span className="text-gold-500">Skills</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        A comprehensive toolkit that enables me to tackle complex challenges across the data and development spectrum.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gold-100 inline-block">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((item, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gold-50 hover:text-gold-700 transition-colors"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
