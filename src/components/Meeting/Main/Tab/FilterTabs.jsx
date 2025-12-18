import { motion } from "framer-motion";

const filters = [
  { key: "all", label: "All" },
  { key: "ongoing", label: "Ongoing" },
  { key: "upcoming", label: "Upcoming" },
  { key: "past", label: "Past" },
];

export default function FilterTabs({ activeFilter, setActiveFilter }) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="bg-[#EDEDED] w-full justify-around sm:w-96 dark:bg-[#383838] flex gap-1 px-2 py-1 rounded-4xl relative  ">
        {filters.map((item) => {
          const isActive = activeFilter === item.key;

          return (
            <div key={item.key} className="relative shrink-0">
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 35,
                  }}
                  className="absolute inset-0 bg-[#2461E6] dark:bg-[#73FBFD] rounded-4xl"
                />
              )}

              <p
                onClick={() => setActiveFilter(item.key)}
                className={`
                  relative z-10 px-4 py-1 flex items-center justify-center cursor-pointer rounded-4xl
                  text-[#000000] dark:text-[#D2D2D2]
                  whitespace-nowrap
                  ${isActive ? "text-white dark:text-black" : ""}
                `}
              >
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
