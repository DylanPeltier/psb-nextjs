'use client';

import { useEffect } from "react";
import ProjectTable from "../../components/ProjectTable";
import { Input, Button } from "@nextui-org/react";

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
        <p className="text-2xl font-semibold mb-2">All Projects</p>
        <div className="flex flex-row items-start justify-between w-full">
          <Input placeholder="Search projects" className="w-40 flex-none"/>
          <Button color="primary" className="font-semibold">Add Project</Button>
        </div>
        <div className="flex flex-row w-full h-fit gap-8 items-start justify-start">
          <ProjectTable />
        </div>
      </div>
    </div>
  );
}