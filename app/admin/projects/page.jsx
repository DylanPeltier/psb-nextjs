'use client';

import { useEffect } from "react";

export default function AdminProjects() {
  useEffect(() => {
    // Hide the navbar
    const navbar = document.getElementById("navbar");
    if (navbar) {
      navbar.style.display = "none";
    }
  },  []);

  return (
    <div className="w-full h-full flex flex-col items-start justify-start gap-10 p-10">
      <div className="w-full h-fit flex flex-col items-start justify-start gap-3">
        <p className="text-xl font-semibold">All Projects</p>
        <div className="flex flex-row w-full h-fit gap-8 items-start justify-start">
          Table goes here
        </div>
      </div>
    </div>
  );
}