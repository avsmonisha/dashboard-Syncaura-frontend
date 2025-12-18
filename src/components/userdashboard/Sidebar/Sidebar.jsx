import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaFolderOpen,
  FaCalendarCheck,
  FaComments,
  FaRegFileAlt,
  FaClock,
  FaCheckSquare,
} from "react-icons/fa";
import { X } from "lucide-react";

export default function Sidebar({ open, setOpen }) {
  return (
    <aside
      className={`
        fixed top-0 left-0 z-50 min-h-screen w-[200px] md:w-[220px] lg:w-60
        bg-[#151b28] text-[#cfd4e0] p-[20px_10px]
        transform ${open ? "translate-x-0" : "-translate-x-full"}
        transition-all duration-300
        lg:static lg:translate-x-0 lg:inline-block
      `}
    >
      {/* Mobile Close Button */}
      <button
        className="lg:hidden mb-4 flex items-center gap-2 px-3 py-2 
  bg-red-500 rounded-md shadow-md text-white 
  transition-all duration-300 hover:bg-red-600 hover:scale-105 active:scale-95 w-full"
        onClick={() => setOpen(false)}
      >
        <X className="text-yellow-300 font-bold" />
        <span className="text-white font-semibold">Close</span>
      </button>

      {/* Header */}
      <div className="flex items-center gap-3 mb-[30px] pl-[10px]">
        <div className="w-10 h-10 bg-[#5660f6] flex items-center justify-center rounded-[10px] text-white font-bold text-[18px]">
          D
        </div>
        <h3 className="text-[18px] font-semibold text-white">DashBoard</h3>
      </div>

      {/* MENU */}
      <nav className="flex flex-col gap-2">
        {[
          { to: "/user-dashboard", label: "Dashboard", Icon: FaHome },
          { to: "/projects", label: "Projects", Icon: FaFolderOpen },
          { to: "/tasks", label: "Tasks", Icon: FaCheckSquare },
          { to: "/chat", label: "Chat", Icon: FaComments },
          { to: "/meetings", label: "Meetings", Icon: FaCalendarCheck },
          { to: "/documents", label: "Documents", Icon: FaRegFileAlt },
          { to: "/attendance", label: "Attendance", Icon: FaClock },
        ].map(({ to, label, Icon }) => (
          <NavLink
            onClick={() => setOpen(false)}
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 p-[12px_14px] rounded-[10px] text-[15px] transition
               ${
                 isActive
                   ? "bg-[#3b6ef8] text-white font-medium"
                   : "text-[#cfd4e0] hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
               }`
            }
          >
            {({ isActive }) => (
              <>
                <Icon
                  className={`text-[18px] ${
                    isActive ? "text-white" : "text-[#aeb5c6]"
                  }`}
                />
                <p className={`${isActive ? "text-white" : "text-white/80"}`}>
                  {label}
                </p>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
