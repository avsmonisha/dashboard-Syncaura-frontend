import React from 'react';
import { motion } from "framer-motion";

const WorkflowSection = () => {
  const scrollToFeatures = (e) => {
    e.preventDefault();
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      className="w-full py-16 border-t"
      style={{
        backgroundColor: 'var(--bg-primary)',
        borderColor: 'var(--border-color)'
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p
              className="text-sm font-semibold mb-4"
              style={{ color: 'var(--text-secondary)' }}
            >
              Workflow
            </p>

            <h2
              className="text-5xl font-bold leading-tight"
              style={{ color: 'var(--text-primary)' }}
            >
              Work smarter,<br />collaborate faster
            </h2>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 }
              }
            }}
          >
            <motion.p
              className="text-base leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              From planning to execution, everything happens in one place. No more
              switching between tools. No more lost messages. Just pure productivity.
            </motion.p>

            <motion.div
              className="flex gap-4"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 text-sm font-medium rounded-md hover:opacity-90 transition-opacity text-white"
                style={{
                  backgroundColor: 'var(--accent-color)',
                  color: "var(--bg-primary)"
                }}
              >
                Start
              </motion.button>

              <motion.button
                onClick={scrollToFeatures}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="px-6 py-2.5 border text-sm font-medium rounded-md hover:opacity-70 transition-opacity"
                style={{
                  borderColor: 'var(--accent-color)',
                  color: 'var(--accent-color)'
                }}
              >
                Explore
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
