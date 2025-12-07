import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MapPin, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState(null); // null, 'success', 'error'

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        setStatus(null);

        // REPLACE THESE WITH YOUR ACTUAL EMAILJS KEYS
        // Sign up at https://emailjs.com/
        const SERVICE_ID = 'service_c4ejsog';
        const TEMPLATE_ID = 'template_pzjsl26';
        const PUBLIC_KEY = 'cylqz04RA0hfDunZN';

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setIsLoading(false);
                setStatus('success');
                e.target.reset();
                setTimeout(() => setStatus(null), 5000); // Clear success message after 5s
            }, (error) => {
                console.log(error.text);
                setIsLoading(false);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="py-20 bg-gray-900 text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                            Let's Work <span className="text-gold-500">Together</span>
                        </h2>
                        <p className="text-gray-400 mb-8 text-lg">
                            I'm currently available for freelance projects and full-time opportunities.
                            If you have a project that needs some data magic, I'd love to hear about it.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gold-500">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <a href="mailto:waghprathamesh874@gmail.com" className="text-white hover:text-gold-500 transition-colors">waghprathamesh874@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-gold-500">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p className="text-white">Buldhana, Maharashtra, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4 mt-10">
                            <a href="https://github.com/PSW9102004" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-white transition-all">
                                <Github size={20} />
                            </a>
                            <a href="https://www.linkedin.com/in/prathamesh-wagh136" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-gold-500 hover:text-white transition-all">
                                <Linkedin size={20} />
                            </a>
                        </div>
                    </motion.div>

                    <motion.form
                        ref={form}
                        onSubmit={sendEmail}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-gray-800 p-8 rounded-2xl border border-gray-700 relative"
                    >
                        <div className="mb-6">
                            <label htmlFor="user_name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gold-500 text-white transition-colors"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="user_email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gold-500 text-white transition-colors"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="4"
                                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-gold-500 text-white transition-colors resize-none"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full py-3 bg-gold-500 text-white font-medium rounded-lg hover:bg-gold-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="animate-spin" size={20} /> Sending...
                                </>
                            ) : (
                                "Send Message"
                            )}
                        </button>

                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-3 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-2 text-green-400"
                            >
                                <CheckCircle size={20} />
                                <span>Message sent successfully! I'll get back to you soon.</span>
                            </motion.div>
                        )}

                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg flex items-center gap-2 text-red-400"
                            >
                                <AlertCircle size={20} />
                                <span>Something went wrong. Please try again later.</span>
                            </motion.div>
                        )}
                    </motion.form>
                </div>

                <div className="border-t border-gray-800 mt-20 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Prathamesh Wagh. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
