import { Bell } from 'lucide-react'
import ToggleSwitch from "../../dashboard/Header/ToggleSwitch"
import { FaBars } from 'react-icons/fa'

const Header = ({setOpen}) => {
  return (
    <div className='text-black py-3 xl:py-6 bg-[#FFFFFF] dark:bg-[#2E2F2F] shadow-[0_10px_20px_-10px_rgba(0,0,0,0.25)] w-full flex items-center justify-end px-15' >
      <div className='relative w-full' >
        <button className="lg:hidden mr-4 absolute -top-3 -left-8 " onClick={() => setOpen(true)}>
          <FaBars className="text-2xl sm:tex-3xl  text-[#333] dark:text-gray-400" />
        </button>
        <div className='absolute -top-3 xl:-top-4 left-4 lg:left-0 ' >
          <ToggleSwitch />
        </div>
      </div>
      <div className='relative'>
        <Bell className='text-2xl text-[#747B88]' />
        <div className='absolute -top-1 -right-[0.5px] h-3 w-3 bg-[#F43F5E] rounded-[50%_50%]' ></div>
      </div>

    </div>
  )
}

export default Header