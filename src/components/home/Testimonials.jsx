import React from "react";
import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "We reduced 40% of manual work after switching to Flowbit. Attendance and leave tracking became effortless.",
      name: "Priya S",
      role: "HR Executive",
      initial: "P",
      color: "#f43f5e",
    },
    {
      quote:
        "The UI is super clean and intuitive. Kanban boards and real-time chat make daily work so much smoother.",
      name: "Rahul M",
      role: "Product Designer",
      initial: "R",
      color: "#22c55e",
    },
    {
      quote:
        "Scheduling meetings with auto Google Meet links is a lifesaver. No more jumping between tools.",
      name: "Sneha K",
      role: "Team Lead",
      initial: "S",
      color: "#6366f1",
    },
    {
      quote:
        "Our documentation, tasks, and meetings stay perfectly in sync. It feels like having everything in one brain.",
      name: "Vikas R",
      role: "Engineering Manager",
      initial: "V",
      color: "#d97706",
    },
  ];

  return (
    <section
      className="w-full py-12"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <div className="max-w-7xl mx-auto px-20">
        {/* IMPORTANT: overflow-y-hidden prevents scrollbar glitch */}
        <div className="overflow-x-auto overflow-y-hidden">
          <motion.div
            className="flex gap-6 min-w-max pb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.12 },
              },
            }}
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                className="w-[260px] min-h-[160px]
                           flex flex-col justify-between
                           p-4 rounded-xl border shadow-sm
                           flex-shrink-0"
                style={{
                  backgroundColor: "var(--card-bg)",
                  borderColor: "var(--border-color)",
                }}
                variants={{
                  hidden: { opacity: 0, y: 20, scale: 0.96 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                whileHover={{ scale: 1.04 }}
              >
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-secondary)" }}
                >
                  {item.quote}
                </p>

                <div className="flex items-center gap-3 mt-4">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center
                               text-white text-xs font-semibold"
                    style={{ backgroundColor: item.color }}
                  >
                    {item.initial}
                  </div>

                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {item.name}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
