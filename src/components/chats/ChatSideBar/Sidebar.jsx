import { Edit3, Funnel, Search } from "lucide-react";
import Avatar from "../Avatar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Sidebar({ chats, selectedChat, onSelect }) {
  const [search, setSearch] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  const [filteredItems, setFilteredItems] = useState(chats);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(search.trim());
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    if (!debouncedValue) {
      setFilteredItems(chats);
      return;
    }

    const searchData = chats.filter((item) =>
      item.name.toLowerCase().includes(debouncedValue.toLowerCase())
    );

    setFilteredItems(searchData);
  }, [debouncedValue, chats]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -25,
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
    <aside
      className={
        `relative w-full md:w-80 flex flex-col border-r bg-[#FFFFFF] dark:bg-[#2E2F2F] border-[#E0DDDD] dark:border-[#575757] ` +
        (selectedChat ? "hidden md:flex" : "flex")
      }
    >
      {/* Header */}
      <div className="p-4 border-b">
        <div className="flex w-full items-center justify-between">
          <h2 className="text-3xl text-[#000000] dark:text-[#FFFFFF] font-semibold mb-2">Chat</h2>
          <Funnel className="size-8 text-black dark:text-white fill-black dark:fill-white" />
        </div>
        <div className="flex mt-2 items-center gap-2 bg-[#EDEDED] dark:bg-[#000000] border border-[#989696] px-3 py-2 rounded-lg">
          <Search size={16} className="text-gray-500" />
          <input
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            placeholder="Search"
            className="bg-transparent dark:text-[#7E7E7E] dark:placeholder:text-[#7E7E7E] text-[#5C5C5C] placeholder:text-[#5C5C5C] outline-none text-sm w-full"
          />
        </div>
      </div>

      {/* Chat list */}
      <motion.div
        key={debouncedValue || "all"} 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="flex-1 pb-20 sidebar-chat-list"
      >
        {filteredItems.length !== 0 ? filteredItems.map((c) => (
          <motion.div
            variants={itemVariants}
            key={c.id}
            onClick={() => onSelect(c)}
            className={`relative flex items-center gap-3 px-4 py-3 cursor-pointer
        hover:bg-gray-100 dark:hover:bg-gray-700
        ${selectedChat?.id === c.id ? "bg-[#E2EBFF] dark:bg-[#144344]" : ""}`}
          >
            <Avatar label={c.avatar} gradient={c.gradient} />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <p className="font-medium text-lg text-black dark:text-white truncate">{c.name}</p>
                <span className="text-sm text-black dark:text-white">{c.time}</span>
              </div>
              <p className="text-xs text-black dark:text-white truncate">{c.last}</p>
            </div>
            {c.unread > 0 && (
              <span className="absolute bottom-2 right-3 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full text-[11px] font-semibold bg-blue-600 dark:bg-[#73FBFD] text-white dark:text-black">
                {c.unread}
              </span>
            )}
          </motion.div>
        )) : (
          <div className="h-full w-full flex flex-col items-center justify-center text-sm font-medium text-black dark:text-gray-400" >
            <div>
              No Contact Found with name
            </div> <span className="font-bold text-lg">"{debouncedValue}"</span>
          </div>
        )}
      </motion.div>


      {/* Floating circular Edit button inside sidebar */}
      <button
        className="absolute bottom-4 right-4
          w-12 h-12 rounded-full
          bg-blue-600 dark:bg-[#73FBFD]
          flex items-center justify-center
          text-white dark:text-black
          shadow-lg hover:scale-105 transition-transform"
      >
        <Edit3 size={20} />
      </button>
    </aside>
  );
}
