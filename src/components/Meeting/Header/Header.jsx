import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell } from 'lucide-react'
import ToggleSwitch from "../../dashboard/Header/ToggleSwitch"
import { FaBars } from 'react-icons/fa'

const Header = ({ setOpen }) => {
  const [showProfile, setShowProfile] = useState(false);

  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const dayName = today.toLocaleDateString("en-US", {
    weekday: "long",
  });

  return (
    <div className='text-black py-3  bg-[#FFFFFF] dark:bg-[#2E2F2F] shadow-[0_10px_20px_-10px_rgba(0,0,0,0.25)] w-full flex items-center justify-end z-50'>
      <div className='w-full flex items-center justify-between px-4'>

        <div className="flex items-center justify-center gap-5">
          <button className="lg:hidden" onClick={() => setOpen(true)}>
            <FaBars className="text-2xl sm:text-3xl text-[#333] dark:text-gray-400" />
          </button>

          {/* Profile Section */}
          <div className="flex gap-2 items-center justify-center relative">
            {/* Avatar */}
            <div
              onClick={() => setShowProfile(prev => !prev)}
              className="size-12 rounded-full bg-linear-to-b from-red-600 to-red-900
              text-white flex items-center justify-center font-semibold text-xl
              cursor-pointer sm:cursor-none"
            >
              J
            </div>

            <div className="hidden sm:flex flex-col items-start justify-center -space-y-1.5">
              <div className='flex gap-1 items-center justify-center text-black dark:text-white'>
                <h1 className='font-light text-lg'>Hello!</h1>
                <h1 className='font-semibold text-lg'>John Doe</h1>
              </div>
              <div className='flex items-center text-[#989696] justify-start font-semibold text-sm'>
                Employee
              </div>
            </div>

            <AnimatePresence>
              {showProfile && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute top-14 left-0 sm:hidden
                  bg-white dark:bg-[#383a3a]
                  shadow-xl rounded-xl px-4 py-3 z-50"
                >
                  <div className="flex flex-col w-60 items-start justify-center -space-y-1.5">
                    <div className="flex gap-1 items-center justify-center text-black dark:text-white">
                      <h1 className="font-light text-lg">Hello!</h1>
                      <h1 className="font-semibold text-lg">John Doe</h1>
                    </div>
                    <div className="flex items-center text-[#989696] justify-start font-semibold text-sm">
                      Employee
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="flex text-base dark:text-[#FFFFFF] items-center justify-center gap-1.5">
            <h1 className='font-bold'>{dayName}</h1>
            <h1 className='font-light'> | {formattedDate}</h1>
          </div>
          <ToggleSwitch />
        </div>

      </div>
    </div>
  )
}

export default Header;
