"use client";

import { useState, useEffect } from "react";
import { Link, Button, Divider } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { SidebarItem } from "./SidebarItem";
import { useRouter, usePathname } from "next/navigation";
import { House, FolderOpen } from "lucide-react";

export default function Sidebar({ toggleSidebar }) {
  const [activeItem, setActiveItem] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  const handleGoBackHome = () => {
    // Show the navbar before redirecting
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.style.display = "block";
    }
    router.push("/");
  };

  useEffect(() => {
    // Determine the active item based on the current route
    if (pathname === "/admin") {
      setActiveItem("Home");
    } else if (pathname === "/admin/projects") {
      setActiveItem("Projects");
    }
  }, [pathname]);

  return (
    <div className="flex w-fit h-screen flex-col items-start justify-start border-r-1 border-slate-300 gap-3 p-6 bg-slate-50">
      <div
        id="company-card"
        className="flex flex-row w-fit h-fit gap-3 items-center justify-center mb-8"
      >
        <div className="border-1 border-slate-300 rounded-md w-fit h-fit">
          <AcmeLogo />
        </div>
        <div className="flex flex-col items-start justify-center w-full h-fit">
          <p className="text-md font-medium text-slate-950 truncate">
            Precision Sandblasting
          </p>
          <p className="text-xs font-medium text-slate-600">Chatham, ON</p>
        </div>
      </div>

      <SidebarItem
        title="Admin Dashboard"
        active={activeItem === "Admin Dashboard"}
        onClick={() => {
          setActiveItem("Admin Dashboard");
          router.push("/admin");
          toggleSidebar();
        }}
        icon={<House size={20} strokeWidth={1} fill="#2962ff" />}
      />

      <Divider className="w-full" />

      <SidebarItem
        title="Projects"
        active={activeItem === "Projects"}
        onClick={() => {
          setActiveItem("Projects");
          router.push("/admin/projects");
          toggleSidebar();
        }}
        icon={
          <FolderOpen
            size={20}
            fill="#2962ff"
            strokeWidth={1}
            color="#EBF5FF"
          />
        }
      />

      <Divider className="w-full" />

      <SidebarItem
        title="Website Home"
        active={activeItem === "Admin Dashboard"}
        onClick={() => {
          setActiveItem("Admin Dashboard");
          router.push("/");
          toggleSidebar();
          handleGoBackHome();
        }}
        icon={<House size={20} strokeWidth={1} fill="#2962ff" />}
      />
    </div>
  );
}
