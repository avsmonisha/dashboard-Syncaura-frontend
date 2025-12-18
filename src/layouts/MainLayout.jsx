import { useState } from "react";
import Sidebar from "../components/userdashboard/Sidebar/Sidebar";
import useThemeStore from "../store/useThemeStore";

export default function MainLayout({ children, TopbarComponent }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const {isDark}=useThemeStore()

  return (
    <div data-theme={isDark? "dark": "light"} className="flex min-h-screen overflow-hidden bg-[#f6f7fb] dark:bg-black">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="flex flex-col flex-1 overflow-y-auto">
        {/* Render the Topbar passed from parent */}
        {TopbarComponent && <TopbarComponent setOpen={setSidebarOpen} />}

       
          {children}
       
      </div>
    </div>
  );
}
