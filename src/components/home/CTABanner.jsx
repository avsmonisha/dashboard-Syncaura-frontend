import React from "react";
import { motion } from "framer-motion";
import ctaTeamMeeting from "../../assets/cta-team-meeting.png";

const CTABanner = () => {
  return (
    <section
      className="w-full py-16 overflow-hidden"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-8xl mx-auto px-24">
        <motion.div
          className="relative h-87 rounded-lg overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* BACKGROUND IMAGE */}
          <div className="absolute inset-0">
            <img
              src={ctaTeamMeeting}
              alt="Team meeting"
              className="w-full h-full object-cover scale-105"
            />
          </div>

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/50" />

          {/* CONTENT */}
          <motion.div
            className="relative h-full flex flex-col items-center justify-center text-center px-6 py-20 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-5xl font-bold text-white max-w-2xl whitespace-nowrap">
              Work smarter, faster, together
            </h2>

            <p className="text-lg text-white/80 max-w-xl">
              Manage tasks, chat, meet, and track performance all in one place.
            </p>

            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-3 bg-white text-gray-900
                           text-sm font-medium rounded-md
                           transition-shadow hover:shadow-lg"
              >
                Get started
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-3 border-2 border-white
                           bg-transparent text-white
                           text-sm font-medium rounded-md
                           hover:bg-white/10 transition-colors"
              >
                Learn more
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
