import React from 'react';
import { motion } from "framer-motion";
import heroTeam from "../../assets/hero-team.png";

const Hero = () => {
  const scrollToFeatures = (e) => {
    e.preventDefault();
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="w-full pt-16 pb-8"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl font-bold leading-tight"
              style={{ color: 'var(--text-primary)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Welcome to<br />Flowbit
            </motion.h1>

            <motion.p
              className="text-xl h-35 leading-relaxed max-w-md"
              style={{ color: 'var(--text-secondary)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Flowbit brings projects, tasks, chat, meetings, documents and performance insights into one seamless workspace. Create your first project and start organizing your workflow today.
            </motion.p>

            <motion.div
              className="flex gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <button
                className="px-6 py-2.5 text-sm font-medium rounded-md hover:opacity-90 transition-opacity text-white"
                style={{
                  backgroundColor: 'var(--accent-color)',
                  color: "var(--bg-primary)"
                }}
              >
                Get started
              </button>

              <button
                onClick={scrollToFeatures}
                className="px-6 py-2.5 border text-sm font-medium rounded-md hover:opacity-70 transition-opacity"
                style={{
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              >
                Features
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            className="flex justify-end"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="w-full max-w-xl">
              <div
                className="w-full h-110 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: 'var(--bg-primary)' }}
              >
                <img
                  src={heroTeam}
                  alt="Team collaboration illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
