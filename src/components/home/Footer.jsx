import React, { useState } from 'react';
import { Facebook, Instagram, X, Linkedin, Youtube } from 'lucide-react';
import { motion } from "framer-motion";

const Footer = () => {
  const [footerEmail, setFooterEmail] = useState('');
  const [footerStatus, setFooterStatus] = useState('');

  const handleFooterSubmit = (e) => {
    e.preventDefault();

    if (!footerEmail) {
      setFooterStatus('Please enter an email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(footerEmail)) {
      setFooterStatus('Please enter a valid email address');
      return;
    }

    setFooterStatus('Subscribed successfully!');
    setFooterEmail('');

    setTimeout(() => {
      setFooterStatus('');
    }, 3000);
  };

  return (
    <footer
      className="w-full border-t"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-color)'
      }}
    >
      <div className="max-w-[1280px] mx-auto px-20 py-16">

        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-20">

          {/* Logo + Subscribe */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold" style={{ color: 'var(--accent-color)' }}>
              FlowBit
            </h3>
            <p className="text-sm max-w-sm" style={{ color: 'var(--text-secondary)' }}>
              Get updates on new features and product releases.
            </p>

            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <input
                type="email"
                placeholder="Your email"
                value={footerEmail}
                onChange={(e) => setFooterEmail(e.target.value)}
                className="w-[344px] h-[44px] px-4 border rounded-md text-sm focus:outline-none focus:ring-2"
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-primary)'
                }}
              />
              <motion.button
                onClick={handleFooterSubmit}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-[44px] px-6 border text-sm font-medium rounded-md transition text-white"
                style={{
                  borderColor: 'var(--accent-color)',
                  backgroundColor: 'var(--accent-color)',
                  color: "var(--bg-primary)"
                }}
              >
                Subscribe
              </motion.button>
            </motion.div>

            {footerStatus && (
              <motion.p
                className="text-xs"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                style={{
                  color: footerStatus.includes('success') ? '#22c55e' : '#ef4444'
                }}
              >
                {footerStatus}
              </motion.p>
            )}

            <motion.p
              className="text-xs max-w-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ color: 'var(--text-secondary)' }}
            >
              You agree to our Privacy Policy and consent to receive company updates.
            </motion.p>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Product</h4>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
              {["Features", "Pricing", "Security", "Roadmap", "Company"].map(item => (
                <li key={item} className="hover:opacity-70 cursor-pointer">{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* About Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>About</h4>
            <ul className="space-y-3 text-sm" style={{ color: 'var(--text-secondary)' }}>
              {["Blog", "Careers", "Contact", "Follow us", "Facebook"].map(item => (
                <li key={item} className="hover:opacity-70 cursor-pointer">{item}</li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-sm font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Instagram</h4>
            <ul className="space-y-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
              {[
                { icon: <Facebook size={16} />, label: "Facebook" },
                { icon: <X size={16} />, label: "X" },
                { icon: <Instagram size={16} />, label: "Instagram" },
                { icon: <Linkedin size={16} />, label: "LinkedIn" },
                { icon: <Youtube size={16} />, label: "YouTube" },
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 hover:opacity-70 cursor-pointer">
                  {item.icon} {item.label}
                </li>
              ))}
            </ul>

            <p className="text-xs mt-6" style={{ color: 'var(--text-secondary)' }}>
              © 2025 Flowbit. All rights reserved.
            </p>
          </motion.div>
        </div>

        {/* Footer Bottom */}
        <motion.div
          className="mt-16 border-t pt-6 flex items-center justify-between text-sm"
          style={{
            borderColor: 'var(--border-color)',
            color: 'var(--text-secondary)'
          }}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <span>Terms of Service</span>
          <div className="flex gap-6">
            <span className="hover:opacity-70 cursor-pointer">Cookies Settings</span>
            <span className="hover:opacity-70 cursor-pointer">Terms of service</span>
            <span className="hover:opacity-70 cursor-pointer">Privacy policy</span>
          </div>
        </motion.div>

      </div>
    </footer>
  );
};

export default Footer;
