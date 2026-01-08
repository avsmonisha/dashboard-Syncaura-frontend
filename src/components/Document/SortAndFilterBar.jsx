import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, SlidersHorizontal } from "lucide-react";


export default function SortAndFilterBar({selected, setSelected, sortOptions}) {
  const [open, setOpen] = useState(false);
 

  return (
    <div className="w-full flex flex-col xs:flex-row gap-3 sm:gap-4 items-start sm:items-center justify-between">
      
      <div className="relative w-full sm:w-56">
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600
                     bg-white dark:bg-[#2E2F2F] text-gray-800 dark:text-gray-200
                     transition hover:bg-gray-50 dark:hover:bg-[#3a3b3b]"
        >
          <span className="text-sm">Sort by: <strong>{selected}</strong></span>
          <ChevronDown
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            size={18}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute z-20 mt-2 w-full rounded-xl shadow-lg border border-gray-200 dark:border-gray-700
                         bg-white dark:bg-[#2E2F2F] overflow-hidden"
            >
              {sortOptions.map(option => (
                <button
                  key={option}
                  onClick={() => {
                    setSelected(option);
                    setOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-sm transition
                    ${selected === option
                      ? " bg-blue-50 dark:bg-[#344343] text-blue-600 dark:text-[#73FBFD]"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 cursor-pointer "}`}
                >
                  {option}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Filter Button */}
      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="w-full sm:w-auto flex items-center justify-center gap-2 px-4 py-2 rounded-xl
                   border border-gray-300 dark:border-gray-600
                   bg-white dark:bg-[#2E2F2F]
                   text-gray-800 dark:text-gray-200
                   transition hover:bg-gray-50 dark:hover:bg-[#3a3b3b]"
      >
        <SlidersHorizontal size={18} />
        <span className="text-sm font-medium">Filters</span>
      </motion.button>
    </div>
  );
}
