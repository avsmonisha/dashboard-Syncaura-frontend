import { useState } from "react";
import {
    Menu,
    LayoutDashboard,
    Folder,
    CheckSquare,
    MessageCircle,
    Calendar,
    FileText,
    AlertTriangle,
    Megaphone,
    Clock,
    Umbrella,
    BarChart2,
    Link2,
    Settings,
    X,
    LogOut,
} from "lucide-react";
import useThemeStore from "../store/useThemeStore";
import { NavLink } from "react-router-dom";


const menuItems = [
    { label: "Dashboard", icon: LayoutDashboard, path: "/" },
    { label: "Projects", icon: Folder, path: "/projects" },
    { label: "Tasks", icon: CheckSquare, path: "/tasks" },
    { label: "Chat", icon: MessageCircle, path: "/chat" },
    { label: "Meetings", icon: Calendar, path: "/meetings" },
    { label: "Documents", icon: FileText, path: "/documents" },
    { label: "Complaints", icon: AlertTriangle, path: "/complaints" },
    { label: "Notice", icon: Megaphone, path: "/notice" },
    { label: "Attendance", icon: Clock, path: "/attendance" },
    { label: "Leave", icon: Umbrella, path: "/leave" },
    { label: "Performance", icon: BarChart2, path: "/performance" },
    { label: "Integrations", icon: Link2, path: "/integrations" },
    { label: "Settings", icon: Settings, path: "/settings" },
];


export default function MobileSidebar({ open, setOpen }) {
    const { isDark } = useThemeStore()
    const logOutHandle=()=>{
        console.log('LogOut SUccessfully');
        
    }

    return (
        <>


            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/30 z-40 md:hidden"
                />
            )}


            {/* Sidebar */}
            <aside data-theme={isDark ? "dark" : "light"}
                className={`
    bg-[#F8F8F8] dark:bg-[#2E2F2F]
    w-[230px] lg:w-[240px]
    h-screen flex flex-col
    fixed lg:static
    top-0 left-0 z-100  border-r border-[#E0DDDD] dark:border-[#575757]
    transform transition-transform duration-300
    ${open ? "translate-x-0" : "-translate-x-full"}
    lg:translate-x-0
  `}
            >
                <div className="flex lg:hidden items-center justify-between px-4 py-4">
                    <button onClick={() => setOpen(false)}>
                        <X size={20} className="text-[#000000] dark:text-[#F8F8F8]" />
                    </button>
                </div>
                <div className="lg:flex hidden items-center justify-between px-4 py-4">
                    <Menu size={30} className="text-[#000000] dark:text-[#F8F8F8]" />

                </div>

                <nav className="px-1 space-y-1 flex-1 overflow-y-auto">
                    {menuItems.map((item) => {
                        const Icon = item.icon;
                        return (
                            <NavLink
                                key={item.label}
                                to={item.path}
                                onClick={() => setOpen(false)} // close on mobile
                                className={({ isActive }) =>
                                    `flex items-center gap-3 px-3 py-2 rounded-lg text-xl cursor-pointer
           text-black dark:text-[#F8F8F8]
           transition-colors
           ${isActive
                                        ? "bg-[#EDEDED] dark:bg-[#242424] font-medium"
                                        : "hover:bg-gray-100 dark:hover:bg-[#575757]"
                                    }`
                                }
                            >
                                <Icon size={20} />
                                {item.label}
                            </NavLink>
                        );
                    })}
                </nav>

                <div className="flex flex-col gap-5 px-4 py-4">
                    <div className="h-px w-full bg-[#E0DDDD] dark:bg-[#575757]" />
                    <button onClick={()=>logOutHandle()}  className="flex cursor-pointer items-center justify-center gap-5 w-full">
                        <LogOut className="size-6 text-[#FF0000]" />
                        <h2 className="text-[#FF0000] text-xl font-semibold" >Log Out</h2>
                        
                    </button>
                </div>
            </aside>
        </>
    );
}


