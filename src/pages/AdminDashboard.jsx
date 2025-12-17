import { useState, useEffect } from 'react'
import Sidebar from '../components/Admin/Sidebar'
import Header from '../components/Admin/Header'
import Dashboard from '../components/Admin/Dashboard'

import './index.css';
import useThemeStore from '../store/useThemeStore';
function AdminDashboard() {
  const {isDark, toggleTheme} = useThemeStore()

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDark])

  return (
    <div className="flex min-h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden ">
        <Header isDarkMode={isDark} setIsDarkMode={toggleTheme} />
        <Dashboard />
      </main>
    </div>
  )
}

export default AdminDashboard
