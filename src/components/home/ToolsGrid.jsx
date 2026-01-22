import React from 'react';
import { motion } from "framer-motion";

const ToolsGrid = () => {
  const tools = [
    {
      title: "Task & Project Management",
      description:
        "Create tasks, set priorities, add deadlines, and track progress with Kanban or Gantt views — everything stays organized.",
    },
    {
      title: "Real-time Chat",
      description:
        "Chat instantly, share files, and collaborate in private or group channels with real-time updates.",
    },
    {
      title: "Meetings & Video Calls",
      description:
        "Schedule meetings with auto Google Meet/Zoom links, calendar sync, and notes — all in one place.",
    },
    {
      title: "Attendance & Leave Tracker",
      description:
        "Mark attendance, request or approve leave, and monitor team availability easily.",
    },
  ];

  return (
    <section
      id="features"
      className="w-full pt-12 pb-16"
      style={{ backgroundColor: 'var(--bg-primary)' }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p
            className="text-sm font-medium mb-3"
            style={{ color: 'var(--text-secondary)' }}
          >
            Tools
          </p>

          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: 'var(--text-primary)' }}
          >
            Everything you need to work
          </h2>

          <p
            className="text-base"
            style={{ color: 'var(--text-secondary)' }}
          >
            Each feature built to save time and eliminate friction from your daily
            workflow.
          </p>
        </motion.div>

        {/* GRID */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.12 }
            }
          }}
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="group p-6 rounded-2xl border
                         hover:shadow-xl transition-all duration-300
                         hover:-translate-y-1"
              style={{
                backgroundColor: 'var(--card-bg)',
                borderColor: 'var(--border-color)'
              }}
              variants={{
                hidden: { opacity: 0, y: 30, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1 }
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
            >
              <h3
                className="text-lg font-semibold mb-3"
                style={{ color: 'var(--text-primary)' }}
              >
                {tool.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {tool.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ToolsGrid;
