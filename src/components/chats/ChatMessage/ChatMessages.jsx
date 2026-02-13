import MessageBubble from "../MessageBubble";
import { motion } from "framer-motion";

export default function ChatMessages() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative flex-1 overflow-hidden h-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="relative flex-1 overflow-y-auto p-4 z-20"
      >

        <motion.div variants={itemVariants} className="flex justify-center mb-4">
          <span className="text-sm font-semibold bg-[#C5D7FF] text-[#1C1C1C] dark:text-[#E0E0E0] dark:bg-[#408485] px-3 py-1 rounded-full">
            Today
          </span>
        </motion.div>

        <motion.div variants={itemVariants}>
          <MessageBubble text="Hey bro, you free ah? Need to ask something." />
          <MessageBubble text="Ya I'm free. What do you want to ask?" isOwn />
        </motion.div>
        
      </motion.div>
    </div>

  );
}
