import React, { useState } from 'react';
import { motion } from "framer-motion";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setStatus('Please enter an email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setStatus('Please enter a valid email address');
      return;
    }

    setStatus('Thank you for subscribing!');
    setEmail('');

    setTimeout(() => {
      setStatus('');
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="w-full py-20"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">

        {/* Heading & Description */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Stay in the loop
          </h2>
          <p
            className="text-base mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Get updates on new features, tips, and stories from teams using Flowbit.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          className="flex gap-3 max-w-lg mx-auto mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 border rounded-md focus:outline-none focus:ring-2"
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)'
            }}
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 text-sm font-medium rounded-md hover:opacity-90 transition-opacity text-white"
            style={{
              backgroundColor: 'var(--accent-color)',
              color: "var(--bg-primary)"
            }}
          >
            Subscribe
          </motion.button>
        </motion.form>

        {/* Status */}
        {status && (
          <motion.p
            className="text-sm mb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              color: status.includes('Thank you') ? '#22c55e' : '#ef4444'
            }}
          >
            {status}
          </motion.p>
        )}

        {/* Footer note */}
        <motion.p
          className="text-xs"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ color: 'var(--text-secondary)' }}
        >
          By subscribing, you agree to our Terms and Privacy Policy.
        </motion.p>

      </div>
    </section>
  );
};

export default Newsletter;
