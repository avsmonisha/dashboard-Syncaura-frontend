import React from 'react';
import { motion } from "framer-motion";

const StatsSection = () => {
  return (
    <section
      className="w-full py-16"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p
            className="text-sm font-medium mb-3"
            style={{ color: 'var(--text-primary)' }}
          >
            Growth
          </p>

          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Millions trust Flowbit daily
          </h2>

          <p
            className="text-base max-w-10xl"
            style={{ color: 'var(--text-primary)' }}
          >
            Over two million users worldwide depend on Flowbit to manage their work.
            Students, teams, and organizations choose us because we deliver results.
          </p>
        </motion.div>

        {/* STATS */}
        <motion.div
          className="grid md:grid-cols-2 gap-16 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {[
            { value: "2M+", text: "Active users across the globe" },
            { value: "98%", text: "User satisfaction rating from our community" }
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <p
                className="text-5xl font-bold mb-2"
                style={{ color: 'var(--text-primary)' }}
              >
                {item.value}
              </p>

              <p
                className="text-base"
                style={{ color: 'var(--text-secondary)' }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ACTION BUTTONS */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="px-6 py-2 border text-sm font-medium rounded-md hover:opacity-70 transition-opacity"
            style={{
              borderColor: 'var(--border-color)',
              color: 'var(--text-secondary)'
            }}
          >
            Learn
          </motion.button>

          <motion.button
            whileHover={{ x: 6 }}
            className="flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity"
            style={{ color: 'var(--text-secondary)' }}
          >
            <span>Arrow</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12H19M19 12L13 6M19 12L13 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.button>
        </div>

        {/* LOGOS */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-center text-sm mb-8"
            style={{ color: 'var(--text-secondary)' }}
          >
            Trusted by top students all over the world
          </p>

          <motion.div
            className="flex justify-center gap-8 flex-wrap"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.08
                }
              }
            }}
          >
            {Array.from({ length: 8 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-14 h-14 rounded-lg"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
                variants={{
                  hidden: { opacity: 0, scale: 0.85 },
                  visible: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default StatsSection;
