'use client';

import { Button } from "@nextui-org/react";
import { useClerk } from '@clerk/clerk-react';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../components/Sidebar.jsx";

export default function Admin() {
  const { user } = useClerk();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  // Get navabar element
  const navbar = document.getElementById("navbar");
  // hide navbar
  navbar.style.display = "none";

  useEffect(() => {
    if (user && user.publicMetadata && user.publicMetadata.role === "admin") {
      console.log("User is admin");
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  if (!isAdmin) {
    return (<div className="flex w-auto h-[calc(100vh-200px)] flex-col items-center justify-center gap-10 p-4">
      <p className="text-2xl text-center font-normal text-slate-950">You are not authorized to access this page.</p>
      <Button onClick={() => router.push("/")} color="primary" size="lg" className="text-lg">Go back to Home</Button>
    </div>);
  }

  return (
    <Sidebar />
  );
}
