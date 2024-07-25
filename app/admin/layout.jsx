'use client';

import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";
import AdminNavbar from "../components/AdminNavbar.jsx";
import { Menu } from 'lucide-react';

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-screen h-screen flex">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 md:relative md:translate-x-0 md:flex`}
      >
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>

      {/* Overlay for darkening effect */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col relative z-20">
        <AdminNavbar>
          {/* Hamburger Menu for smaller screens */}
          <button
            className="p-2 text-xl md:hidden"
            onClick={toggleSidebar}
          >
            <Menu color="#020617" />
          </button>
        </AdminNavbar>
        <div className="flex-1 p-4">
          {children}
        </div>
      </div>
    </div>
  );
}
