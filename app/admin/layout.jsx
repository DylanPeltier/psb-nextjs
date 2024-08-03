"use client";

import Sidebar from "../components/Sidebar.jsx";
import AdminNavbar from "../components/AdminNavbar.jsx";
import { Menu } from "lucide-react";
import { useClerk } from "@clerk/clerk-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

export default function AdminLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { user } = useClerk();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.style.display = "none";
    }

    if (user && user.publicMetadata && user.publicMetadata.role === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  const handleGoBackHome = () => {
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.style.display = "block";
    }
    router.push("/");
  };

  if (!isAdmin) {
    return (
      <div className="flex w-auto h-[calc(100vh-200px)] flex-col items-center justify-center gap-10 p-4">
        <p className="text-2xl text-center font-normal text-slate-950">
          You are not authorized to access this page.
        </p>
        <Button
          onClick={handleGoBackHome}
          color="primary"
          size="lg"
          className="text-lg"
        >
          Go back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="w-screen h-screen flex">
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-40 min-lg:relative min-lg:translate-x-0`}
      >
        <Sidebar toggleSidebar={toggleSidebar} />
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 min-lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <div className="flex-1 flex flex-col relative z-20">
        <AdminNavbar>
          <button
            className="p-2 text-xl min-lg:hidden cursor-pointer z-50"
            onClick={toggleSidebar}
          >
            <Menu color="#020617" />
          </button>
        </AdminNavbar>
        <div className="flex-1 p-4">{children}</div>
      </div>
    </div>
  );
}
