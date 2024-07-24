'use client';

import { Button } from "@nextui-org/react";
import { useClerk } from '@clerk/clerk-react';
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdminProjectCard from "../components/AdminProjectCard";

export default function Admin() {
  const { user } = useClerk();
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Hide the navbar
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.style.display = "none";
    }

    // Check if the user is an admin
    if (user && user.publicMetadata && user.publicMetadata.role === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }
  }, [user]);

  if (!isAdmin) {
    return (
      <div className="flex w-auto h-[calc(100vh-200px)] flex-col items-center justify-center gap-10 p-4">
        <p className="text-2xl text-center font-normal text-slate-950">You are not authorized to access this page.</p>
        <Button onClick={() => router.push("/")} color="primary" size="lg" className="text-lg">Go back to Home</Button>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-10 p-10">
      <div className="w-full h-fit flex flex-col items-start justify-start gap-3">
        <p className="text-xl font-semibold">Upcoming Work</p>
        <div className="flex flex-row w-full h-fit gap-8 items-start justify-start">
          <AdminProjectCard />
          <AdminProjectCard />
          <AdminProjectCard />
        </div>
      </div>
    </div>
  );
}
