import React from 'react';
import { motion } from "framer-motion";
import dashboardPreview from "../../assets/workspace-dashboard.png";

const FeatureShowcase = () => {
  return (
    <section
      
      className="w-full py-16"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADER */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2
            className="text-xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Work Smarter. Collaborate Faster. Grow Together.
          </h2>

          <p
            className="text-m max-w-3xl mx-auto"
            style={{ color: 'var(--text-secondary)' }}
          >
            From planning and collaboration to deployment and performance tracking — everything in one platform.
          </p>
        </motion.div>

        {/* CARD */}
        <motion.div
          className="rounded-3xl overflow-hidden"
          style={{ backgroundColor: 'var(--card-bg)' }}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="grid lg:grid-cols-2 gap-12 p-14">

            {/* LEFT CONTENT */}
            <motion.div
              className="flex flex-col justify-start space-y-6"
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
              <motion.h3
                className="text-4xl font-bold"
                style={{ color: 'var(--text-primary)' }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                From Start to Success — All in One Workspace
              </motion.h3>

              <motion.p
                className="text-2xl leading-relaxed"
                style={{ color: 'var(--text-primary)' }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                Flowbit streamlines your workflow from planning to execution.
                Manage projects, tasks, chats, meetings, documents, attendance,
                and performance — all inside one seamless and modern platform
                built to scale with your team.
              </motion.p>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.div
                className="w-full max-w-xl rounded-2xl shadow-xl overflow-hidden"
                style={{ backgroundColor: 'var(--bg-secondary)' }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  className="w-full h-124 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--bg-secondary)' }}
                >
                  <img
                    src={dashboardPreview}
                    alt="dashboardPreview"
                    className="w-full h-auto"
                  />
                </div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeatureShowcase;
