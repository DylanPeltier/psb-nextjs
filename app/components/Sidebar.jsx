'use client';

import { useState } from "react";
import { Link, Button } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";
import { SidebarItem } from "./SidebarItem";
import { Divider } from "@nextui-org/react";
import { DashboardIcon } from "./DashboardIcon";
import { LayoutDashboard } from 'lucide-react';
import { useRouter } from "next/navigation";
import { FolderOpen } from 'lucide-react';
import { House } from 'lucide-react';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState(null);
  const router = useRouter();

  return (
    <div className="flex w-fit h-screen flex-col items-start justify-start border-r-1 border-slate-300 gap-3 p-6">
      <div id="company-card" className="flex flex-row w-fit h-fit gap-3 items-center justify-center mb-8">
        <div className="border-1 border-slate-300 rounded-md w-fit h-fit">
          <AcmeLogo />
        </div>
        <div className="flex flex-col items-start justify-center w-full h-fit">
          <p className="text-md font-medium text-slate-950 truncate">Precision Sandblasting</p>
          <p className="text-xs font-medium text-slate-600">Chatham, ON</p>
        </div>
      </div>

      <SidebarItem
        title="Home"
        active={activeItem === "Home"}
        onClick={() => {
          setActiveItem("Home")
          router.push("/admin")
        }
      }
        icon={<House size={20} strokeWidth={1} fill="#2962ff"/>}
      />

      <Divider className="w-full" />

      <SidebarItem
        title="Projects"
        active={activeItem === "Profile"}
        onClick={() => {
          setActiveItem("Profile")
          router.push("/admin/projects")
        }
      }
      icon={<FolderOpen size={20} fill="#2962ff" strokeWidth={1} color="#EBF5FF" />}
      />
    </div>
  );
}
